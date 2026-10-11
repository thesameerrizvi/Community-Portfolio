# Sameer Rizvi — Portfolio

Community Builder • Programs & Ecosystem • Technology Communities.
React + Vite + Tailwind CSS + Framer Motion + Lucide.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the build
```

Deploy the `dist/` folder to Vercel, Netlify, Cloudflare Pages or GitHub Pages.

## The one rule

**All content lives in `src/data/portfolioData.js`.** Components never contain text
about you — they loop over the arrays in that file. Add an object, a card appears.
Delete it, the card disappears. Empty fields (`""`, `null`, `[]`) are hidden automatically.

## Images

Put files in `public/images/<folder>/` and reference them as `"/images/<folder>/<file>"`.

```
public/images/
├── profile/        your portrait  → profile.photo
├── companies/      org logos      → experiences[].logo
├── partnerships/   community logos→ partnerships[].logo
├── events/         posters/photos → events[].coverImage / gallery
├── speakers/       speaker photos → speakers[].photo
├── achievements/   certificates   → achievements[].image
└── gallery/        general photos → gallery[].src
```

Missing image? The site shows a placeholder (initials or icon) — nothing breaks.
Tip: keep photos under ~300 KB (resize to ≤1600px wide) for fast loading.

## How to…

**Add an event** — In `events`, copy the commented template (or an existing event), give it a unique `id`, fill in fields, drop the poster in `public/images/events/`. Link speakers by putting their `id`s in `speakers: []`.

**Remove an event** — Delete its object from `events`.

**Add event photos** — Add to that event's `gallery: [{ src: "/images/events/x.jpg", caption: "…" }]`. To also show it in "Community in Action", add it to the top-level `gallery` array.

**Add a speaker** — Add an object to `speakers` (`id`, `name`, `designation`, `organization`, `topic`, `event`, `photo`, `linkedin`). Then reference the `id` in an event's `speakers` list.

**Add a partnership** — Add to `partnerships`. Keep `collaborationType` as "Community Collaboration" / "Ecosystem Collaboration" unless it is a formal partnership.

**Add / edit / remove an experience** — Edit the `experiences` array (newest first). Optional: `displayRole`, `description` (string or list of paragraphs), `certificate`, `images`, `link`.

**Add an achievement** — Add to `achievements` (`title`, `organization`, `year`, `description`, `image`, `link`).

**Change statistics** — Edit `impactStats`. Give `value: "6+"` for your own numbers; blank values are hidden. Entries with `source: "experiences" | "partnerships" | "speakers" | "events"` count automatically.

**Add gallery images** — Add `{ id, src, caption, event, category }` to `gallery`. Filter chips are created from your `category` values.

**Change social links / email** — Edit `socialLinks` and `profile.email`. GitHub appears once you fill in its `url`.

**Change the motivational text** — `profile.motto` (hero). Other copy: `about`, `contact`, `journey`, `sections`.

## Still to fill in (marked TODO in the data file)

Company / community logos, partnership descriptions, achievement years and certificates, speaker LinkedIn, real attendee numbers, workshop/participant stats, a GitHub link, and a professional portrait (the current hero photo is a crop from an event photo; replace `public/images/profile/sameer.jpg`).

## Moving to a CMS later

Components read only from `portfolioData.js`. Keep the same object shapes and swap each export for data fetched from Supabase / Sanity / Contentful / Firebase (see the note at the top of the data file). No component needs redesigning.

## Structure

```
src/
├── components/   Navbar, Hero, About, Experience, Journey, Partnerships, Events,
│                 ImpactStats, Speakers, Achievements, Gallery, Contact, Footer,
│                 + shared: Section, Reveal, SafeImage, Lightbox, NetworkBackground
├── data/portfolioData.js
├── lib/          icons + count-up hook
├── App.jsx  main.jsx  index.css
```

Accessibility: semantic landmarks, skip link, keyboard-navigable lightbox (←/→/Esc), visible focus, and `prefers-reduced-motion` support (Framer Motion + the background network).
