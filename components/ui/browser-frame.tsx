import Image, { type StaticImageData } from "next/image";

import classes from "./browser-frame.module.css";

type BrowserFrameProps = {
  image: StaticImageData;
  alt: string;
  /** shown in the fake address bar */
  url?: string;
  sizes: string;
  priority?: boolean;
  /** "pan": fixed height, the full-page screenshot scrolls on hover. "scroll": scrollable inside the frame. */
  mode?: "pan" | "scroll";
};

function displayUrl(url?: string) {
  if (!url) return "";
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

/** Screenshot inside a minimal browser window. */
export default function BrowserFrame({
  image,
  alt,
  url,
  sizes,
  priority = false,
  mode = "pan",
}: BrowserFrameProps) {
  return (
    <div className={classes.frame} data-mode={mode}>
      <div className={classes.chrome} aria-hidden>
        <span className={classes.dots}>
          <span />
          <span />
          <span />
        </span>
        <span className={classes.url}>{displayUrl(url)}</span>
      </div>
      <div
        className={classes.viewport}
        // a scrollable frame must handle its own wheel events, not Lenis
        {...(mode === "scroll" && { tabIndex: 0, "data-lenis-prevent": true })}
      >
        {mode === "pan" ? (
          <Image
            src={image}
            alt={alt}
            fill
            sizes={sizes}
            placeholder="blur"
            priority={priority}
            className={classes["pan-image"]}
          />
        ) : (
          <Image
            src={image}
            alt={alt}
            sizes={sizes}
            placeholder="blur"
            priority={priority}
            className={classes["scroll-image"]}
          />
        )}
      </div>
    </div>
  );
}
