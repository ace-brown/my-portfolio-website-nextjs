import type { PointerEvent, ReactNode } from "react";

import classes from "./spotlight-card.module.css";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

/** Card with a soft light that follows the mouse across its surface and border. */
export default function SpotlightCard({
  children,
  className,
}: SpotlightCardProps) {
  const moveHandler = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--x",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--y",
      `${event.clientY - rect.top}px`,
    );
  };

  return (
    <div
      className={className ? `${classes.card} ${className}` : classes.card}
      onPointerMove={moveHandler}
    >
      {children}
    </div>
  );
}
