import { Globe, Linkedin } from "lucide-react";
import { sections, speakers } from "../data/portfolioData.js";
import Section, { EmptyState } from "./Section.jsx";
import SafeImage from "./SafeImage.jsx";
import Reveal from "./Reveal.jsx";

export default function Speakers() {
  return (
    <Section meta={sections.speakers}>
      {speakers.length === 0 ? (
        <EmptyState>Add speakers in <code>speakers</code> inside portfolioData.js.</EmptyState>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s, i) => (
            <Reveal as="li" key={s.id || s.name} delay={i * 0.05}>
              <article className="surface group h-full overflow-hidden transition-colors duration-200 hover:border-white/25">
                <div className="aspect-[4/3] overflow-hidden bg-ink-700">
                  <SafeImage
                    src={s.photo}
                    alt={`Photo of ${s.name}`}
                    label={s.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{s.name}</h3>
                  <p className="mt-1 text-sm text-zinc-300">
                    {[s.designation, s.organization].filter(Boolean).join(", ")}
                  </p>
                  {s.topic && <p className="mt-4 text-sm leading-relaxed text-zinc-400">{s.topic}</p>}
                  {s.event && <p className="mt-3 text-sm text-accent">{s.event}</p>}
                  {(s.linkedin || s.website) && (
                    <div className="mt-4 flex gap-2">
                      {s.linkedin && (
                        <a href={s.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} on LinkedIn`} className="rounded-full border border-white/15 p-2 text-zinc-400 hover:border-accent hover:text-accent">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {s.website && (
                        <a href={s.website} target="_blank" rel="noopener noreferrer" aria-label={`${s.name}'s website`} className="rounded-full border border-white/15 p-2 text-zinc-400 hover:border-accent hover:text-accent">
                          <Globe className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      )}
    </Section>
  );
}
