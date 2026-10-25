import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiMoon, FiSun } from "react-icons/fi";

import classes from "./theme-toggle.module.css";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  // null until mounted: the real theme is only known in the browser
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync with the theme set by _document
    setTheme(
      document.documentElement.dataset.theme === "dark" ? "dark" : "light",
    );
  }, []);

  const toggleHandler = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // storage unavailable (private mode); the theme still applies for this visit
    }
    setTheme(nextTheme);
  };

  const label =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      className={classes.toggle}
      onClick={toggleHandler}
      aria-label={label}
      title={label}
      disabled={theme === null}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme ?? "unknown"}
          className={classes.icon}
          initial={{ rotate: -90, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? <FiSun aria-hidden /> : <FiMoon aria-hidden />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
