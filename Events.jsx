import { useState } from "react";
import { Calendar, ExternalLink, MapPin, Users } from "lucide-react";
import { events, sections, speakers } from "../data/portfolioData.js";
import Section, { EmptyState } from "./Section.jsx";
import SafeImage from "./SafeImage.jsx";
import Lightbox from "./Lightbox.jsx";
import Reveal from "./Reveal.jsx";

const names = (ids = []) => ids.map((id) => speakers.find((s) => s.id === id)).filter(Boolean);

function EventCard({ event: e, onOpen, flip }) {
  const media = [
    ...(e.coverImage ? [{ src: e.coverImage, caption: "Event poster", event: e.title }] : []),
    ...(e.gallery || []).map((g) => (typeof g === "string" ? { src: g, event: e.title } : { ...g, event: e.title })),
  ];
  const speakerList = names(e.speakers);
  const mentorList = names(e.mentors);

  const meta = [
    e.date && { icon: Calendar, text: e.time ? `${e.date} · ${e.time}` : e.date },
    e.location && { icon: MapPin, text: e.location },
    e.attendees && { icon: Users, text: `${e.attendees.toLocaleString("en-IN")} attendees` },
  ].filter(Boolean);

  return (
    <Reveal as="li">
      <article className="surface grid overflow-hidden lg:grid-cols-5">
        <button
          onClick={() => onOpen(media, 0)}
          aria-label={`View images for ${e.title}`}
          className={`group relative block overflow-hidden bg-ink-700 lg:col-span-2 ${flip ? "lg:order-2" : ""}`}
        >
          <SafeImage
            src={e.coverImage}
            alt={`${e.title} poster`}
            label={e.title}
            className="h-full max-h-[520px] min-h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </button>

        <div className="flex flex-col p-6 sm:p-9 lg:col-span-3">
          <div className="flex flex-wrap items-center gap-2">
            {e.type && <span className="chip border-accent/40 text-accent">{e.type}</span>}
            {e.partner && <span className="chip">{e.partner}</span>}
          </div>
          <h3 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">{e.title}</h3>

          <ul className="mt-5 space-y-2 text-sm text-zinc-400">
            {meta.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2"><Icon className="h-4 w-4 text-zinc-500" aria-hidden />{text}</li>
            ))}
          </ul>

          {e.description && <p className="mt-5 leading-relaxed text-zinc-300">{e.description}</p>}

          <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
            {e.role && (<div><dt className="text-zinc-500">Sameer's role</dt><dd className="mt-1 text-white">{e.role}</dd></div>)}
            {speakerList.length > 0 && (<div><dt className="text-zinc-500">Speaker{speakerList.length > 1 ? "s" : ""}</dt><dd className="mt-1 text-white">{speakerList.map((s) => `${s.name}${s.organization ? `, ${s.organization}` : ""}`).join(" · ")}</dd></div>)}
            {mentorList.length > 0 && (<div><dt className="text-zinc-500">Mentor{mentorList.length > 1 ? "s" : ""}</dt><dd className="mt-1 text-white">{mentorList.map((s) => s.name).join(" · ")}</dd></div>)}
          </dl>

          {media.length > 1 && (
            <ul className="mt-6 flex flex-wrap gap-3">
              {media.slice(1).map((m, i) => (
                <li key={m.src}>
                  <button onClick={() => onOpen(media, i + 1)} aria-label={`View photo ${i + 1} from ${e.title}`} className="overflow-hidden rounded-lg border border-white/10">
                    <SafeImage src={m.src} alt={m.caption || e.title} className="h-16 w-24 object-cover transition-transform duration-300 hover:scale-105" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {e.link && (
            <a href={e.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-soft">
              Event page <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Events() {
  const [viewer, setViewer] = useState({ items: [], index: null });
  return (
    <Section meta={sections.events}>
      {events.length === 0 ? (
        <EmptyState>Add your first event in <code>events</code> inside portfolioData.js.</EmptyState>
      ) : (
        <ol className="space-y-8">
          {events.map((e, i) => (
            <EventCard key={e.id || e.title} event={e} flip={i % 2 === 1} onOpen={(items, index) => setViewer({ items, index })} />
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
