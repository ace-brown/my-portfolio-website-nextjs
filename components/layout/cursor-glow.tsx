import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

import classes from "./layout.module.css";

// Soft light that trails the mouse; skipped on touch devices.
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const x = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const moveHandler = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    // eslint-disable-next-line react-hooks/set-state-in-effect -- pointer type is only known in the browser
    setEnabled(true);
    window.addEventListener("pointermove", moveHandler);
    return () => window.removeEventListener("pointermove", moveHandler);
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return <motion.div className={classes.glow} style={{ x, y }} aria-hidden />;
}
