import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/router";
import { ReactLenis, useLenis } from "lenis/react";
import { motion, useScroll, useSpring } from "motion/react";

import Header from "./header";
import Footer from "./footer";
import CursorGlow from "./cursor-glow";

import classes from "./layout.module.css";

type LayoutProps = {
  children: ReactNode;
  /** changes on every navigation so the page-enter animation replays */
  pageKey: string;
};

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  return <motion.div className={classes.progress} style={{ scaleX }} />;
}

// Lenis keeps its own scroll position, so jump it to the top on navigation.
function ScrollToTopOnNavigate() {
  const router = useRouter();
  const lenis = useLenis();

  useEffect(() => {
    const completeHandler = (url: string) => {
      if (!url.includes("#"))
        lenis?.scrollTo(0, { immediate: true, force: true });
    };
    router.events.on("routeChangeComplete", completeHandler);
    return () => router.events.off("routeChangeComplete", completeHandler);
  }, [router.events, lenis]);

  return null;
}

export default function Layout({ children, pageKey }: LayoutProps) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, anchors: true, stopInertiaOnNavigate: true }}
    >
      <ScrollToTopOnNavigate />
      <a className={classes["skip-link"]} href="#main-content">
        Skip to content
      </a>
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <motion.main
        key={pageKey.split("#")[0]}
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
