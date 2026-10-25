// Inline script in pages/_document.tsx: runs before React hydrates so the page
// never flashes the wrong theme. next.config.ts allows it in the Content
// Security Policy by its hash, so any change here is picked up automatically.
export const THEME_SCRIPT = `(function () {
  var theme;
  try { theme = localStorage.getItem("theme"); } catch (e) {}
  if (theme !== "light" && theme !== "dark") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.dataset.theme = theme;
})();`;
