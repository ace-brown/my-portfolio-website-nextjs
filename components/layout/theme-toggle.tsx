import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type Theme = "light" | "dark";

export default function ThemeToggle({ className }: { className?: string }) {
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
      className={className}
      onClick={toggleHandler}
      aria-label={label}
      title={label}
      disabled={theme === null}
    >
      {theme === "dark" ? <FaSun aria-hidden /> : <FaMoon aria-hidden />}
    </button>
  );
}
