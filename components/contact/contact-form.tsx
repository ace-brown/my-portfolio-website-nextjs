import { useState, type FormEvent } from "react";

import Button from "../ui/button";

import classes from "./contact-form.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

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
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          maxLength={5000}
        />
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
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>
      <p
        role="status"
        className={status === "error" ? classes.error : classes.success}
      >
        {feedback}
      </p>
    </form>
  );
}
