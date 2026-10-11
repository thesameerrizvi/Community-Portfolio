import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { experiences, sections } from "../data/portfolioData.js";
import Section, { EmptyState } from "./Section.jsx";
import SafeImage from "./SafeImage.jsx";
import Lightbox from "./Lightbox.jsx";

function ExperienceCard({ experience: e, onOpen }) {
  const paragraphs = Array.isArray(e.description) ? e.description : e.description ? [e.description] : [];
  const current = /present/i.test(e.period);
  const media = [
    ...(e.certificate ? [{ src: e.certificate, caption: `${e.role} — ${e.organization}` }] : []),
    ...(e.images || []).map((src) => ({ src, caption: e.organization })),
  ];

  return (
    <motion.li
      className="relative pl-8 sm:pl-12"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span
        aria-hidden
        className={`absolute left-0 top-8 h-3 w-3 -translate-x-1/2 rounded-full border-2 ${current ? "border-accent bg-accent" : "border-zinc-500 bg-ink"}`}
      />
      <article className="surface p-6 transition-colors duration-200 hover:border-white/25 sm:p-7">
        <div className="flex items-start gap-4">
          <SafeImage
            src={e.logo}
            alt={`${e.organization} logo`}
            label={e.shortName || e.organization}
            className="h-14 w-14 shrink-0 rounded-xl bg-white object-contain p-1.5"
          />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-xl font-semibold text-white">{e.displayRole || e.role}</h3>
              {current && <span className="chip border-accent/40 text-accent">Current</span>}
            </div>
            <p className="mt-1 text-zinc-300">{e.organization}</p>
            <p className="mt-1 text-sm text-zinc-500">
              {e.period}{e.location ? ` · ${e.location}` : ""}
            </p>
          </div>
          {e.link && (
            <a href={e.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${e.organization} link`} className="rounded-full p-2 text-zinc-400 hover:text-accent">
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>

        {paragraphs.length > 0 && (
          <div className="mt-5 space-y-3 leading-relaxed text-zinc-400">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        )}

        {media.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-3">
            {media.map((m, i) => (
              <li key={m.src}>
                <button onClick={() => onOpen(media, i)} aria-label={`View image ${i + 1} for ${e.organization}`} className="overflow-hidden rounded-lg border border-white/10">
                  <SafeImage src={m.src} alt={m.caption} className="h-20 w-28 object-cover transition-transform duration-300 hover:scale-105" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </article>
    </motion.li>
  );
}

export default function Experience() {
  const [viewer, setViewer] = useState({ items: [], index: null });

  return (
    <Section meta={sections.experience}>
      {experiences.length === 0 ? (
        <EmptyState>Add your first experience in <code>experiences</code> inside portfolioData.js.</EmptyState>
      ) : (
        <ol className="ml-1.5 space-y-6 border-l border-white/10">
          {experiences.map((e) => (
            <ExperienceCard key={e.id || e.organization + e.period} experience={e} onOpen={(items, index) => setViewer({ items, index })} />
          ))}
        </ol>
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
