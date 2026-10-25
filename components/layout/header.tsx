import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLenis } from "lenis/react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { NAV_ITEMS, isActivePath } from "./nav-items";
import ThemeToggle from "./theme-toggle";
import Button from "../ui/button";
import { SITE } from "../../lib/site";

import classes from "./header.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const router = useRouter();
  const lenis = useLenis();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const { scrollY } = useScroll();

  // hide while scrolling down, show again as soon as the visitor scrolls up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 240);
    setScrolled(latest > 40);
  });

  useEffect(() => {
    if (!menuOpen) return;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      document.removeEventListener("keydown", keyHandler);
    };
  }, [menuOpen, lenis]);

  useEffect(() => {
    const startHandler = () => setMenuOpen(false);
    router.events.on("routeChangeStart", startHandler);
    return () => router.events.off("routeChangeStart", startHandler);
  }, [router.events]);

  const barClasses = [classes.bar, scrolled && classes["bar--scrolled"]]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <motion.header
        className={classes.header}
        animate={{ y: hidden && !menuOpen ? "-140%" : "0%" }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <div className={barClasses}>
          <Link
            href="/"
            className={classes.brand}
            aria-label="Kazem Abdi – home"
          >
            <span className={classes["brand-mark"]} aria-hidden>
              KA
            </span>
            <span className={classes["brand-name"]}>
              kazem<span className={classes["brand-dot"]}>.</span>abdi
            </span>
          </Link>

          <nav aria-label="Main" className={classes.nav}>
            <ul onMouseLeave={() => setHoveredPath(null)}>
              {NAV_ITEMS.map((item) => {
                const active = isActivePath(router.pathname, item.path);
                const highlighted = hoveredPath
                  ? hoveredPath === item.path
                  : active;
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={classes.link}
                      aria-current={active ? "page" : undefined}
                      onMouseEnter={() => setHoveredPath(item.path)}
                    >
                      {highlighted && (
                        <motion.span
                          layoutId="nav-pill"
                          className={classes.pill}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 35,
                          }}
                        />
                      )}
                      <span className={classes["link-text"]}>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={classes.actions}>
            <ThemeToggle />
            <Button link="/contact" size="sm" className={classes.cta}>
              Let&apos;s talk
            </Button>
            <button
              type="button"
              className={classes.burger}
              data-open={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className={classes.overlay}
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <nav aria-label="Mobile">
              <ul className={classes["overlay-list"]}>
                {NAV_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      delay: 0.15 + index * 0.07,
                      duration: 0.6,
                      ease: EASE,
                    }}
                  >
                    <Link
                      href={item.path}
                      className={classes["overlay-link"]}
                      aria-current={
                        isActivePath(router.pathname, item.path)
                          ? "page"
                          : undefined
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className={classes["overlay-index"]}>
                        0{index + 1}
                      </span>
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              className={classes["overlay-footer"]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <div className={classes["overlay-socials"]}>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub aria-hidden />
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin aria-hidden />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
