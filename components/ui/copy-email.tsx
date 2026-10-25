import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiCheck, FiCopy } from "react-icons/fi";

import { SITE } from "../../lib/site";

import classes from "./copy-email.module.css";

/** Shows the email address; clicking copies it to the clipboard. */
export default function CopyEmail({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copyHandler = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  };

  return (
    <button
      type="button"
      className={className ? `${classes.copy} ${className}` : classes.copy}
      onClick={copyHandler}
      aria-label={`Copy email address ${SITE.email}`}
    >
      <span>{SITE.email}</span>
      <span className={classes.icon}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "copied" : "copy"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={classes["icon-inner"]}
          >
            {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className={classes.status} role="status">
        {copied ? "Copied!" : ""}
      </span>
    </button>
  );
}
