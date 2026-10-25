import Link from "next/link";
import type { ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

import classes from "./button.module.css";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  /** internal path, or an absolute URL when `external` is set */
  link?: string;
  external?: boolean;
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({
  children,
  className,
  link,
  external = false,
  variant = "primary",
  size = "md",
  arrow = false,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classNames = [classes.btn, classes[variant], classes[size], className]
    .filter(Boolean)
    .join(" ");

  // on hover the label rolls up and an identical copy slides in from below
  const content = (
    <>
      <span className={classes.label}>
        <span className={classes["label-text"]}>{children}</span>
        <span className={classes["label-text"]} aria-hidden>
          {children}
        </span>
      </span>
      {arrow && (
        <span className={classes.arrow} aria-hidden>
          <FiArrowUpRight />
        </span>
      )}
    </>
  );

  if (link && external) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
      >
        {content}
      </a>
    );
  }

  if (link) {
    return (
      <Link href={link} className={classNames}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames}
    >
      {content}
    </button>
  );
}
