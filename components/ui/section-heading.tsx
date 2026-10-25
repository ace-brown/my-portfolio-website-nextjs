import type { ReactNode } from "react";

import Reveal from "./reveal";
import SplitText from "./split-text";

import classes from "./section-heading.module.css";

type SectionHeadingProps = {
  /** small mono label above the title, e.g. "01 — About" */
  eyebrow: string;
  title: string;
  /** optional content on the right (a button, a count, ...) */
  aside?: ReactNode;
  id?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  aside,
  id,
}: SectionHeadingProps) {
  return (
    <div className={classes.heading}>
      <div>
        <Reveal y={16}>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <h2 id={id} className={classes.title}>
          <SplitText text={title} inView stagger={0.02} />
        </h2>
      </div>
      {aside && (
        <Reveal y={16} delay={0.2} className={classes.aside}>
          {aside}
        </Reveal>
      )}
    </div>
  );
}
