import Link from "next/link";
import type { ReactNode } from "react";

import styles from "./button.module.css";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  link?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({
  children,
  className,
  link,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classNames = className ? `${className} ${styles.btn}` : styles.btn;

  if (link) {
    return (
      <Link className={classNames} href={link}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
