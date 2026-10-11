import { useState } from "react";
import { ExternalLink, FileImage } from "lucide-react";
import { achievements, sections } from "../data/portfolioData.js";
import Section, { EmptyState } from "./Section.jsx";
import Lightbox from "./Lightbox.jsx";
import Reveal from "./Reveal.jsx";

export default function Achievements() {
  const [viewer, setViewer] = useState({ items: [], index: null });
  return (
    <Section meta={sections.achievements}>
      {achievements.length === 0 ? (
        <EmptyState>Add achievements in <code>achievements</code> inside portfolioData.js.</EmptyState>
      ) : (
        <ul className="grid gap-5 md:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal as="li" key={a.id || a.title} delay={(i % 2) * 0.06}>
              <article className="surface flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm text-zinc-300">{a.organization}</p>
                  {a.year && <p className="shrink-0 text-sm text-zinc-500">{a.year}</p>}
                </div>
                <h3 className="mt-3 font-display text-2xl leading-snug text-white">{a.title}</h3>
                {a.description && <p className="mt-3 text-sm leading-relaxed text-zinc-400">{a.description}</p>}
                {(a.image || a.link) && (
                  <div className="mt-auto flex gap-5 pt-5 text-sm">
                    {a.image && (
                      <button onClick={() => setViewer({ items: [{ src: a.image, caption: a.title }], index: 0 })} className="inline-flex items-center gap-2 text-accent hover:text-accent-soft">
                        <FileImage className="h-4 w-4" aria-hidden /> View certificate
                      </button>
                    )}
                    {a.link && (
                      <a href={a.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:text-accent-soft">
                        <ExternalLink className="h-4 w-4" aria-hidden /> Open link
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </ul>
      )}
      <Lightbox
        items={viewer.items}
        index={viewer.index}
        onIndexChange={(index) => setViewer((v) => ({ ...v, index }))}
        onClose={() => setViewer({ items: [], index: null })}
      />
    </Section>
  );
}
