import Image, { type StaticImageData } from "next/image";
import { useCallback, useState, type CSSProperties } from "react";

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
  /** hide the window bar, for images that already show their own window */
  bare?: boolean;
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
  bare = false,
}: BrowserFrameProps) {
  // The tiny blurred preview sits behind the screenshot as a background, and the
  // real image fades in over it once loaded. (next/image's own blur placeholder
  // swaps in a single frame, which flashes on bright screenshots.)
  const [loaded, setLoaded] = useState(false);
  // a cached image can finish loading before React hydrates, so check on mount too
  const imageRef = useCallback((img: HTMLImageElement | null) => {
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  const imageProps = {
    src: image,
    sizes,
    priority,
    ref: imageRef,
    onLoad: () => setLoaded(true),
    "data-loaded": loaded,
  };

  return (
    <div className={classes.frame} data-mode={mode}>
      {!bare && (
        <div className={classes.chrome} aria-hidden>
          <span className={classes.dots}>
            <span />
            <span />
            <span />
          </span>
          <span className={classes.url}>{displayUrl(url)}</span>
        </div>
      )}
      <div
        className={classes.viewport}
        style={
          image.blurDataURL
            ? ({
                "--preview": `url("${image.blurDataURL}")`,
              } as CSSProperties)
            : undefined
        }
        // a scrollable frame must handle its own wheel events, not Lenis
        {...(mode === "scroll" && { tabIndex: 0, "data-lenis-prevent": true })}
      >
        {mode === "pan" ? (
          <Image
            {...imageProps}
            alt={alt}
            fill
            className={classes["pan-image"]}
          />
        ) : (
          <Image
            {...imageProps}
            alt={alt}
            className={classes["scroll-image"]}
          />
        )}
      </div>
    </div>
  );
}
