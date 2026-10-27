import classes from "./site-mirror.module.css";

// enough levels that the innermost one is a few pixels wide even at the end of a zoom cycle
const DEPTH = 7;

/** A sketch of the home page whose window shows the page again, down to DEPTH levels. */
function Level({ depth }: { depth: number }) {
  return (
    <div className={classes.level}>
      <span className={classes.nav}>
        <span />
        <span />
        <span />
      </span>
      <span className={classes.eyebrow} />
      <span className={classes.name}>Kazem</span>
      <span className={classes.line} />
      <span className={`${classes.line} ${classes.short}`} />
      <span className={classes.button} />
      <span className={classes.bar} />
      <div className={classes.screen}>
        {depth > 1 && <Level depth={depth - 1} />}
      </div>
    </div>
  );
}

/**
 * The portfolio drawn inside itself (a Droste effect), zooming endlessly into its own window.
 * Used instead of a screenshot for the portfolio project.
 */
export default function SiteMirror({ alt = "" }: { alt?: string }) {
  return (
    <div
      className={classes.mirror}
      {...(alt ? { role: "img", "aria-label": alt } : { "aria-hidden": true })}
    >
      <div className={classes.zoom}>
        <Level depth={DEPTH} />
      </div>
    </div>
  );
}
