import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

type CounterProps = {
  value: number;
  suffix?: string;
};

/** Counts up from 0 to `value` when scrolled into view. */
export default function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const element = ref.current;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        element.textContent = `${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  // server render shows the final number, so it is right without JavaScript
  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
