import Link from "next/link";
import type { PointerEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

import classes from "./button.module.css";

const MotionLink = motion.create(Link);

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
  // magnetic effect: the button leans towards the mouse pointer
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  const moveHandler = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.35);
  };

  const leaveHandler = () => {
    x.set(0);
    y.set(0);
  };

  const sharedProps = {
    className: [classes.btn, classes[variant], classes[size], className]
      .filter(Boolean)
      .join(" "),
    style: { x: springX, y: springY },
    onPointerMove: moveHandler,
    onPointerLeave: leaveHandler,
  };

  const content = (
    <>
      <span className={classes.label}>{children}</span>
      {arrow && (
        <span className={classes.arrow} aria-hidden>
          <FiArrowUpRight />
        </span>
      )}
    </>
  );

  if (link && external) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        {...sharedProps}
      >
        {content}
      </motion.a>
    );
  }

  if (link) {
    return (
      <MotionLink href={link} {...sharedProps}>
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...sharedProps}
    >
      {content}
    </motion.button>
  );
}
