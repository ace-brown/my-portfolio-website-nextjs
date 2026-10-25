import { useEffect, useState } from "react";

/** `false` during server render and until the query is checked in the browser. */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const changeHandler = () => setMatches(mediaQuery.matches);
    changeHandler();
    mediaQuery.addEventListener("change", changeHandler);
    return () => mediaQuery.removeEventListener("change", changeHandler);
  }, [query]);

  return matches;
}
