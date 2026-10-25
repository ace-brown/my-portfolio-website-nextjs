import { useEffect, useRef, type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { motion, useScroll, useSpring } from "motion/react";

import Header from "./header";
import Footer from "./footer";
import CursorGlow from "./cursor-glow";

import classes from "./layout.module.css";

type LayoutProps = {
  children: ReactNode;
  /**
   * Changes on navigation so the page-enter animation replays and the page
   * scrolls to the top. Pages sharing a layout share a key (see lib/page-layout.ts).
   */
  pageKey: string;
};

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  return <motion.div className={classes.progress} style={{ scaleX }} />;
}

// Lenis keeps its own scroll position, so jump it to the top (or to the #hash
// target) when the page changes.
function ScrollToTopOnNavigate({ pageKey }: { pageKey: string }) {
  const lenis = useLenis();
  const previousKey = useRef(pageKey);

  useEffect(() => {
    if (previousKey.current === pageKey) return;
    previousKey.current = pageKey;
    const target = window.location.hash
      ? document.getElementById(
          decodeURIComponent(window.location.hash.slice(1)),
        )
      : null;
    lenis?.scrollTo(target ?? 0, { immediate: true, force: true });
  }, [pageKey, lenis]);

  return null;
}

export default function Layout({ children, pageKey }: LayoutProps) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, anchors: true, stopInertiaOnNavigate: true }}
    >
      <ScrollToTopOnNavigate pageKey={pageKey} />
      <a className={classes["skip-link"]} href="#main-content">
        Skip to content
      </a>
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <motion.main
        key={pageKey}
        id="main-content"
        className={classes.main}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
      <Footer />
    </ReactLenis>
  );
}
