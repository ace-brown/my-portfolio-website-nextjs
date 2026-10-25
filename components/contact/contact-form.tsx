import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";

import Button from "../ui/button";

import classes from "./contact-form.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  // sent along so the server can ignore forms filled in faster than a human could
  const shownAt = useRef(0);

  useEffect(() => {
    shownAt.current = Date.now();
  }, []);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = {
      ...Object.fromEntries(new FormData(form)),
      elapsedMs: Date.now() - shownAt.current,
    };

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result: { message: string } = await response.json();

      setStatus(response.ok ? "success" : "error");
      setFeedback(result.message);
      if (response.ok) form.reset();
    } catch {
      setStatus("error");
      setFeedback("Sorry, something went wrong. Please try again later.");
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            placeholder=" "
          />
          <label htmlFor="name">Your name</label>
        </div>
        <div className={classes.control}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            placeholder=" "
          />
          <label htmlFor="email">Email address</label>
        </div>
      </div>
      <div className={classes.control}>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          maxLength={5000}
          placeholder=" "
        />
        <label htmlFor="message">Tell me about your project</label>
      </div>
      <div className={classes.honeypot} aria-hidden>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className={classes.submit}>
        <Button type="submit" size="lg" arrow disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>
        <p role="status" className={classes.status}>
          <AnimatePresence mode="wait">
            {feedback && (
              <motion.span
                key={feedback}
                className={status === "error" ? classes.error : classes.success}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {feedback}
              </motion.span>
            )}
          </AnimatePresence>
        </p>
      </div>
    </form>
  );
}
