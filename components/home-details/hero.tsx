import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";

import Button from "../ui/button";
import SplitText from "../ui/split-text";
import posterImg from "../../public/shore-poster.jpg";

import classes from "./hero.module.css";

// Only load the background video on wider screens for visitors who haven't
// asked for reduced motion; everyone else sees the poster image.
const VIDEO_QUERY =
  "(min-width: 50em) and (prefers-reduced-motion: no-preference)";

const ROTATING_WORDS = ["responsive", "accessible", "fast", "delightful"];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((current) => (current + 1) % ROTATING_WORDS.length),
      2400,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={classes.rotator}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={ROTATING_WORDS[index]}
          className={`gradient-text ${classes["rotator-word"]}`}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {ROTATING_WORDS[index]}.
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(VIDEO_QUERY);
    const changeHandler = () => setShowVideo(mediaQuery.matches);
    changeHandler();
    mediaQuery.addEventListener("change", changeHandler);
    return () => mediaQuery.removeEventListener("change", changeHandler);
  }, []);

  return (
    <section ref={sectionRef} className={classes.hero}>
      {/* layer 1: the ocean */}
      <motion.div
        className={classes.media}
        style={{ scale: mediaScale }}
        aria-hidden
      >
        <Image
          src={posterImg}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className={classes["media-item"]}
        />
        {showVideo && (
          <video
            className={classes["media-item"]}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/shore-poster.jpg"
          >
            <source src="/shore.mp4" type="video/mp4" />
          </video>
        )}
      </motion.div>

      {/* layer 2: page-coloured sheet blended over the video, so it only shows through the letters */}
      <div className={classes.mask} aria-hidden>
        <motion.div className={classes.name} style={{ y: nameY }}>
          <SplitText
            text="KAZEM"
            className={classes["name-line"]}
            delay={0.25}
            stagger={0.07}
          />
          <SplitText
            text="ABDI"
            className={classes["name-line"]}
            delay={0.55}
            stagger={0.07}
          />
        </motion.div>
      </div>

      {/* layer 3: ambient light and grid */}
      <div className={classes.aurora} aria-hidden />
      <div className={classes.grid} aria-hidden />

      {/* layer 4: content */}
      <motion.div
        className={`container ${classes.content}`}
        style={{ opacity: contentOpacity }}
      >
        <motion.div
          className={classes.top}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <p className="eyebrow">Web developer — Stuttgart, Germany</p>
          <p className={classes.coords}>48.7758° N, 9.1829° E</p>
        </motion.div>

        <h1 className="visually-hidden">Kazem Abdi Dehnoei, web developer</h1>

        <motion.div
          className={classes.bottom}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={classes.tagline}>
            I build web apps with React, Next.js &amp; Node.js that are{" "}
            <RotatingWord />
          </p>
          <div className={classes.ctas}>
            <Button link="/projects" size="lg" arrow>
              View my work
            </Button>
            <Button link="/contact" size="lg" variant="ghost">
              Get in touch
            </Button>
          </div>
        </motion.div>

        <div className={classes.scroll} aria-hidden>
          <span>Scroll</span>
          <span className={classes["scroll-line"]} />
        </div>
      </motion.div>
    </section>
  );
}
