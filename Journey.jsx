import { journey, sections } from "../data/portfolioData.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

/** Vertical on mobile, horizontal grid on large screens. Edit `journey` in portfolioData.js */
export default function Journey() {
  return (
    <Section meta={sections.journey}>
      <ol className="grid gap-8 lg:grid-cols-6 lg:gap-0">
        {journey.map((j, i) => (
          <Reveal as="li" key={j.stage} delay={i * 0.07} className="relative flex gap-5 lg:block lg:pr-6">
            {/* connector line: vertical on mobile, horizontal on desktop */}
            {i < journey.length - 1 && (
              <span aria-hidden className="absolute left-[7px] top-6 h-[calc(100%+2rem)] w-px bg-gradient-to-b from-accent/50 to-white/10 lg:left-6 lg:top-[7px] lg:h-px lg:w-[calc(100%-1.5rem)] lg:bg-gradient-to-r" />
            )}
            <span aria-hidden className="relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-accent bg-ink" />
            <div className="lg:mt-5">
              <h3 className="font-display text-2xl text-white">{j.stage}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{j.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
