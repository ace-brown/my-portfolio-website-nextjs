import type { ReactNode } from "react";
import { motion } from "motion/react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** distance in px the element rises while fading in */
  y?: number;
  as?: "div" | "section" | "li" | "p" | "article";
};

/** Fades and slides its children in the first time they scroll into view. */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  as = "div",
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
