import type { CSSProperties, ReactNode } from "react";

import classes from "./marquee.module.css";

type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
  /** seconds for one full loop */
  duration?: number;
};

/** Endlessly scrolling row; the content is rendered twice so the loop is seamless. */
export default function Marquee({
  children,
  reverse = false,
  duration = 40,
}: MarqueeProps) {
  return (
    <div
      className={classes.marquee}
      data-reverse={reverse}
      style={{ "--duration": `${duration}s` } as CSSProperties}
    >
      <div className={classes.track}>{children}</div>
      <div className={classes.track} aria-hidden>
        {children}
      </div>
    </div>
  );
}
