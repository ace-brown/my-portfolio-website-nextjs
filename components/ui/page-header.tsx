import type { ReactNode } from "react";
import { motion } from "motion/react";

import SplitText from "./split-text";

import classes from "./page-header.module.css";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  /** small number shown next to the title, e.g. a count */
  sup?: string | number;
  intro?: ReactNode;
  children?: ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  sup,
  intro,
  children,
}: PageHeaderProps) {
  return (
    <header className={`container ${classes.header}`}>
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {eyebrow}
      </motion.p>
      <h1 className={classes.title}>
        <SplitText text={title} delay={0.1} stagger={0.03} />
        {sup !== undefined && <sup className={classes.sup}>({sup})</sup>}
      </h1>
      {intro && (
        <motion.p
          className={classes.intro}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {intro}
        </motion.p>
      )}
      {children}
    </header>
  );
}
