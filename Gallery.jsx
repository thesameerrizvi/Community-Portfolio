import { useMemo, useState } from "react";
import { gallery, sections } from "../data/portfolioData.js";
import Section, { EmptyState } from "./Section.jsx";
import SafeImage from "./SafeImage.jsx";
import Lightbox from "./Lightbox.jsx";

/** Masonry via CSS columns. Filter chips are built from the `category` values in `gallery`. */
export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState(null);

  const categories = useMemo(() => ["All", ...new Set(gallery.map((g) => g.category).filter(Boolean))], []);
  const items = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <Section meta={sections.gallery}>
      {gallery.length === 0 ? (
        <EmptyState>Add photos in <code>gallery</code> inside portfolioData.js.</EmptyState>
      ) : (
        <>
          {categories.length > 2 && (
            <div role="group" aria-label="Filter gallery" className="mb-8 flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  aria-pressed={filter === c}
                  className={`chip transition-colors ${filter === c ? "border-accent bg-accent/10 text-accent" : "hover:border-white/30"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}

          <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {items.map((g, i) => (
              <li key={g.id || g.src} className="mb-4 break-inside-avoid">
                <button onClick={() => setIndex(i)} aria-label={`Open image: ${g.caption || g.event || "gallery photo"}`} className="group relative block w-full overflow-hidden rounded-xl border border-white/10 bg-ink-700">
                  <SafeImage src={g.src} alt={g.caption || g.event || "Community event photo"} className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]" />
                  {(g.caption || g.event) && (
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10 text-left text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                      {g.caption}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
      <Lightbox items={items} index={index} onIndexChange={setIndex} onClose={() => setIndex(null)} />
    </Section>
  );
}
