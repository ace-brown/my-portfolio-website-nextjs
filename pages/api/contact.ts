import type { NextApiRequest, NextApiResponse } from "next";

type ContactResponse = { message: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed." });
  }

  const name = asTrimmedString(req.body?.name);
  const email = asTrimmedString(req.body?.email);
  const message = asTrimmedString(req.body?.message);
  // hidden "company" field: real visitors leave it empty, bots tend to fill it
  const honeypot = asTrimmedString(req.body?.company);

  if (honeypot) {
    return res.status(200).json({ message: "Thanks for your message!" });
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

  return res
    .status(200)
    .json({ message: "Thanks for your message! I'll get back to you soon." });
}
