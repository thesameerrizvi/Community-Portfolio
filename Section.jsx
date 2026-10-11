import Reveal from "./Reveal.jsx";

/** Shared wrapper: anchor id, heading, sub-heading. Content comes from `sections` in portfolioData.js */
export default function Section({ meta, children, className = "" }) {
  return (
    <section id={meta.id} aria-labelledby={`${meta.id}-h`} className={`section-pad ${className}`}>
      <div className="page">
        {meta.heading && (
          <Reveal className="mb-12 max-w-3xl">
            <h2 id={`${meta.id}-h`} className="font-display text-4xl leading-tight text-white sm:text-5xl">
              {meta.heading}
            </h2>
            {meta.subheading && <p className="mt-3 text-lg text-zinc-400">{meta.subheading}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function EmptyState({ children }) {
  return (
    <p className="surface border-dashed p-8 text-center text-sm text-zinc-500">{children}</p>
  );
}
