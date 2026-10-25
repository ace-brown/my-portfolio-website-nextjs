import { Fragment } from "react";
import { motion } from "motion/react";

import classes from "./split-text.module.css";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  /** seconds between letters */
  stagger?: number;
  /** animate when scrolled into view instead of on mount */
  inView?: boolean;
};

/**
 * Letters slide up from behind an invisible line, one after another.
 * Screen readers get the plain text from a visually hidden copy.
 */
export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.035,
  inView = false,
}: SplitTextProps) {
  const words = text.split(" ");
  let letterIndex = 0;

  const animateProps = inView
    ? {
        whileInView: "visible",
        viewport: { once: true, margin: "0px 0px -10% 0px" },
      }
    : { animate: "visible" };

  return (
    <motion.span className={className} initial="hidden" {...animateProps}>
      {/* screen readers get the plain text; the animated letters are hidden from them */}
      <span className="visually-hidden">{text}</span>
      {words.map((word, wordIndex) => (
        <Fragment key={wordIndex}>
          <span className={classes.word} aria-hidden>
            {[...word].map((letter) => {
              const index = letterIndex++;
              return (
                <span key={index} className={classes.mask}>
                  <motion.span
                    className={classes.letter}
                    variants={{
                      hidden: { y: "110%" },
                      visible: { y: "0%" },
                    }}
                    transition={{
                      duration: 0.9,
                      delay: delay + index * stagger,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {letter}
                  </motion.span>
                </span>
              );
            })}
          </span>
          {/* the space must sit outside the inline-block word or it collapses */}
          {wordIndex < words.length - 1 && " "}
        </Fragment>
      ))}
    </motion.span>
  );
}
