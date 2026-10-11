import { useRef } from "react";
import * as data from "../data/portfolioData.js";
import { impactStats, sections } from "../data/portfolioData.js";
import { parseStat, useCountUp } from "../lib/useCountUp.js";
import Section from "./Section.jsx";

function Stat({ label, value }) {
  const ref = useRef(null);
  const { num, prefix, suffix, raw } = parseStat(value);
  const n = useCountUp(ref, num);
  return (
    <div ref={ref} className="border-t border-white/15 pt-5">
      <p className="font-display text-5xl text-white sm:text-6xl">
        {num === null ? raw : <>{prefix}{n.toLocaleString("en-IN")}{suffix}</>}
      </p>
      <p className="mt-2 text-sm text-zinc-400">{label}</p>
    </div>
  );
}

export default function ImpactStats() {
  // `source` counts automatically from another list; `value` is a number you provide.
  const visible = impactStats
    .map((s) => ({ ...s, shown: s.source ? String(data[s.source]?.length ?? "") : s.value }))
    .filter((s) => s.shown !== "" && s.shown != null && s.shown !== "0");

  if (visible.length === 0) return null;

  return (
    <Section meta={sections.impact}>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3">
        {visible.map((s) => <Stat key={s.id} label={s.label} value={s.shown} />)}
      </div>
    </Section>
  );
}
