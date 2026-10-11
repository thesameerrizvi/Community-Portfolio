import { ArrowUpRight } from "lucide-react";
import { events, partnerships, sections } from "../data/portfolioData.js";
import Section, { EmptyState } from "./Section.jsx";
import SafeImage from "./SafeImage.jsx";
import Reveal from "./Reveal.jsx";

export default function Partnerships() {
  return (
    <Section meta={sections.partnerships}>
      {partnerships.length === 0 ? (
        <EmptyState>Add communities in <code>partnerships</code> inside portfolioData.js.</EmptyState>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partnerships.map((p, i) => {
            const linked = (p.events || []).map((id) => events.find((e) => e.id === id)).filter(Boolean);
            return (
              <Reveal as="li" key={p.id || p.name} delay={i * 0.05}>
                <article className="surface flex h-full flex-col p-6 transition-colors duration-200 hover:border-white/25">
                  <div className="flex items-center gap-4">
                    <SafeImage
                      src={p.logo}
                      alt={`${p.name} logo`}
                      label={p.name}
                      className="h-14 w-14 shrink-0 rounded-xl bg-white object-contain p-2"
                    />
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                      {p.collaborationType && <p className="text-sm text-accent">{p.collaborationType}</p>}
                    </div>
                  </div>
                  {p.description && <p className="mt-4 text-sm leading-relaxed text-zinc-400">{p.description}</p>}
                  {linked.length > 0 && (
                    <ul className="mt-4 space-y-1 text-sm text-zinc-400">
                      {linked.map((e) => <li key={e.id}>{e.title}</li>)}
                    </ul>
                  )}
                  {p.website && (
                    <a href={p.website} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1 pt-5 text-sm text-zinc-300 hover:text-accent">
                      Visit website <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </a>
                  )}
                </article>
              </Reveal>
            );
          })}
        </ul>
      )}
    </Section>
  );
}
