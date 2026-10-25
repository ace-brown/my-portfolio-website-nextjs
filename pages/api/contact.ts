import type { NextApiRequest, NextApiResponse } from "next";

type ContactResponse = { message: string };

// a contact message is a few KB at most; reject anything bigger before parsing
export const config = {
  api: { bodyParser: { sizeLimit: "16kb" } },
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// a human needs at least a few seconds to fill in the form
const MIN_FILL_TIME_MS = 3000;

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;
// Best effort: on serverless hosting each instance has its own memory, so this
// slows down a single sender rather than guaranteeing a global limit.
const recentRequests = new Map<string, number[]>();

const SUCCESS_MESSAGE = "Thanks for your message! I'll get back to you soon.";

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function clientIp(req: NextApiRequest) {
  const forwarded = req.headers["x-forwarded-for"];
  const first = (Array.isArray(forwarded) ? forwarded[0] : forwarded)
    ?.split(",")[0]
    ?.trim();
  return first || req.socket.remoteAddress || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (recentRequests.get(ip) ?? []).filter(
    (time) => now - time < RATE_WINDOW_MS,
  );
  recent.push(now);
  recentRequests.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

/** Only accept posts from this site's own pages, not from other websites. */
function isSameOrigin(req: NextApiRequest) {
  const origin = req.headers.origin;
  if (!origin) return true; // non-browser clients don't send Origin
  try {
    return new URL(origin).host === req.headers.host;
  } catch {
    return false;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed." });
  }

  if (!req.headers["content-type"]?.includes("application/json")) {
    return res.status(415).json({ message: "Unsupported content type." });
  }

  if (!isSameOrigin(req)) {
    return res.status(403).json({ message: "Forbidden." });
  }

  if (isRateLimited(clientIp(req))) {
    return res.status(429).json({
      message:
        "You've sent several messages in a short time. Please try again later.",
    });
  }

  // line breaks in the name would end up in the email subject
  const name = asTrimmedString(req.body?.name).replace(/[\r\n\t]+/g, " ");
  const email = asTrimmedString(req.body?.email);
  const message = asTrimmedString(req.body?.message);
  // hidden "company" field: real visitors leave it empty, bots tend to fill it
  const honeypot = asTrimmedString(req.body?.company);
  const elapsedMs = Number(req.body?.elapsedMs);

  // Bots get a fake success so they don't learn what gave them away.
  if (honeypot || !(elapsedMs >= MIN_FILL_TIME_MS)) {
    return res.status(200).json({ message: SUCCESS_MESSAGE });
  }

  if (
    !name ||
    name.length > 100 ||
    !EMAIL_PATTERN.test(email) ||
    email.length > 200 ||
    !message ||
    message.length > 5000
  ) {
    return res.status(422).json({
      message: "Please enter your name, a valid email address and a message.",
    });
  }

  // the recipient address only lives in server env vars, never in the site's code
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return res.status(503).json({
      message:
        "The contact form is not available right now. Please reach out on LinkedIn instead.",
    });
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to,
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!resendResponse.ok) {
    console.error(
      "Resend error",
      resendResponse.status,
      await resendResponse.text(),
    );
    return res.status(502).json({
      message:
        "Sorry, your message could not be sent. Please try again later or reach out on LinkedIn.",
    });
  }

  return res.status(200).json({ message: SUCCESS_MESSAGE });
}
