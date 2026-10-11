import { about, sections } from "../data/portfolioData.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <Section meta={sections.about}>
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <Reveal>
          <p className="font-display text-3xl leading-snug text-white sm:text-4xl">{about.title}</p>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-zinc-300">
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="text-sm font-semibold text-white">What I work on</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {about.focusAreas.map((f) => <li key={f} className="chip">{f}</li>)}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
