import { useEffect, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/** Splits "6+" → { num: 6, prefix: "", suffix: "+" }. Non-numeric values return num = null. */
export function parseStat(value) {
  const str = String(value ?? "").trim();
  const m = str.match(/^(\D*?)(\d[\d,]*)(.*)$/);
  if (!m) return { num: null, prefix: "", suffix: "", raw: str };
  return { prefix: m[1], num: parseInt(m[2].replace(/,/g, ""), 10), suffix: m[3], raw: str };
}

/** Counts from 0 → target once the element scrolls into view. */
export function useCountUp(ref, target, duration = 1200) {
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView || target == null) return;
    if (reduce) return setN(target);
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setN(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, reduce]);

  return n;
}
