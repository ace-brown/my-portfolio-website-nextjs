import Link from "next/link";
import { useEffect, useState } from "react";

import classes from "./hero.module.css";

// Only load the background video on wider screens for visitors who haven't
// asked for reduced motion; everyone else just sees the poster image.
const VIDEO_QUERY =
  "(min-width: 50em) and (prefers-reduced-motion: no-preference)";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(VIDEO_QUERY);
    const changeHandler = () => setShowVideo(mediaQuery.matches);
    changeHandler();
    mediaQuery.addEventListener("change", changeHandler);
    return () => mediaQuery.removeEventListener("change", changeHandler);
  }, []);

  return (
    <section className={classes.hero}>
      {showVideo && (
        <video
          className={classes["video-bg"]}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/shore-poster.jpg"
          aria-hidden
        >
          <source src="/shore.mp4" type="video/mp4" />
        </video>
      )}
      <div className={classes.content}>
        <h1 className={classes["content-title"]}>Hi! My name is Kazem</h1>
        <p className={classes["content-info"]}>
          I&apos;m a web developer in Stuttgart building responsive apps with
          React and Next.js
        </p>
        <div className={classes.actions}>
          <Link href="/projects">View my projects</Link>
          <Link href="/contact" className={classes["action--secondary"]}>
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
