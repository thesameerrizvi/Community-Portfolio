/**
 * ============================================================================
 *  PORTFOLIO DATA — the ONLY file you need to edit to update the website.
 * ============================================================================
 *  • Every section on the site is generated from the arrays/objects below.
 *  • Add an object  → a new card appears.  Remove an object → it disappears.
 *  • Images live in /public/images/<folder>/ and are referenced as
 *    "/images/<folder>/<file>". A missing image shows a clean placeholder.
 *  • Leave a field as "" / null / [] and the site simply hides it.
 *
 *  FUTURE CMS / DATABASE (Supabase, Sanity, Contentful, Firebase…)
 *  ---------------------------------------------------------------
 *  Components only import from THIS file and never contain content. To move to
 *  a CMS later, replace each export with data fetched from your backend and
 *  keep the same object shapes. Example with Supabase:
 *
 *    // const { data } = await supabase.from("events").select("*").order("sort");
 *    // export const events = data;
 *
 *  (Top-level await needs a Vite target of es2022, or fetch inside a
 *  `usePortfolioData()` hook and pass the result down from App.jsx.)
 * ============================================================================
 */

/* ------------------------------------------------------------------ PROFILE */
export const profile = {
  name: "Sameer Rizvi",
  headline: "Community Builder • Programs & Ecosystem • Technology Communities",
  motto:
    "Building communities, creating connections, and turning ideas into meaningful experiences.",
  photo: "/images/profile/sameer.jpg", // Replace with a professional portrait (square works best)
  photoAlt: "Portrait of Sameer Rizvi",
  primaryCta: { label: "Explore My Work", href: "#events" },
  secondaryCta: { label: "Let's Connect", href: "#contact" },
  email: "sameerrizvi322@gmail.com",
  siteTitle: "Sameer Rizvi — Community Builder | Programs & Ecosystem",
};

/* -------------------------------------------------------------- SOCIAL LINKS */
// icon: "linkedin" | "mail" | "github". Empty url = hidden everywhere.
export const socialLinks = [
  { id: "linkedin", label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/thesameerrizvi" },
  { id: "email", label: "Email", icon: "mail", url: "mailto:sameerrizvi322@gmail.com" },
  { id: "github", label: "GitHub", icon: "github", url: "" }, // TODO: add your GitHub URL to show the icon
];

/* -------------------------------------------------------------------- ABOUT */
export const about = {
  title: "Where technology meets community.",
  paragraphs: [
    "I'm a B.Tech Computer Science student who spends most of my time on the community side of technology — helping students, designers and developers find learning opportunities, meet the right people and build together.",
    "I work with technology communities on workshops, hackathons and community programs, coordinating speakers and mentors, reaching out to partners, and keeping students engaged from the first announcement to the last session.",
  ],
  focusAreas: [
    "Technical workshops",
    "Hackathons",
    "Community programs",
    "Speaker coordination",
    "Mentor coordination",
    "Partnerships & outreach",
    "Student engagement",
    "Community collaboration",
  ],
};

/* --------------------------------------------------------------- EXPERIENCE */
// Newest first. Optional: displayRole, location, description (string OR array
// of paragraphs), logo, certificate (offer letter / certificate image),
// images [], link.
export const experiences = [
  {
    id: "rendezvous-iit-delhi",
    organization: "Rendezvous IIT Delhi",
    role: "Campus Ambassador",
    period: "Aug 2026 - Present",
    location: "",
    description: "",
    logo: "/images/companies/rendezvous-iit-delhi.png",
    certificate: "",
    images: [],
    link: "",
  },
  {
    id: "codewithtechno",
    organization: "CodeWithTechno",
    role: "Co-Founder",
    displayRole: "Co-Founder — Programs & Ecosystem Relations",
    period: "Apr 2026 - Present",
    location: "Delhi, India · Hybrid",
    description: [
      "As the Director of Programs and Ecosystem Relations at CodeWithTechno, Sameer contributes to building a strong learning and collaboration ecosystem for students, designers and developers.",
      "His role involves coordinating workshops, hackathons and community-driven programs while supporting event execution and ecosystem growth.",
      "He actively engages with speakers, mentors and industry professionals to create meaningful learning opportunities and strengthen community relationships.",
      "He also contributes to outreach, partnerships and collaboration initiatives aimed at fostering an execution-first tech community and enabling impactful learning experiences.",
    ],
    logo: "/images/companies/codewithtechno.png",
    certificate: "",
    images: [],
    link: "",
  },
  {
    id: "cloud-junction",
    organization: "Cloud Junction",
    role: "Student Partner",
    period: "Jul 2026 - Sep 2026",
    location: "",
    description: "",
    logo: "/images/companies/cloud-junction.png",
    certificate: "",
    images: [],
    link: "",
  },
  {
    id: "builders-hub",
    organization: "Builders Hub",
    role: "Campus Ambassador",
    period: "Jul 2026 - Sep 2026",
    location: "",
    description: "",
    logo: "/images/companies/builders-hub.png",
    certificate: "",
    images: [],
    link: "",
  },
  {
    id: "hnbgu",
    organization: "Hemvati Nandan Bahuguna Garhwal University",
    shortName: "HNBGU",
    role: "Brand Ambassador",
    period: "Jun 2026 - Sep 2026",
    location: "",
    description: "",
    logo: "/images/companies/hnbgu.png",
    certificate: "",
    images: [],
    link: "",
  },
  {
    id: "gemini",
    organization: "Gemini",
    role: "Student Ambassador",
    period: "May 2026 - Sep 2026",
    location: "",
    description: "",
    logo: "/images/companies/gemini.png",
    certificate: "",
    images: [],
    link: "",
  },
];

/* ----------------------------------------------------------------- JOURNEY */
// Factual summary of how involvement has grown. Edit freely.
export const journey = [
  { stage: "Learning", text: "Short courses, summits and cloud workshops — IIT Roorkee, Research AI Summit, Microsoft Fabric." },
  { stage: "Community", text: "Joined student and campus programs with Gemini, HNBGU, Builders Hub, Cloud Junction and Rendezvous IIT Delhi." },
  { stage: "Programs", text: "Began coordinating workshops, hackathons and community programs." },
  { stage: "Partnerships", text: "Collaborating with communities such as Microsoft Power BI UP, Neo4j and PyDelhi." },
  { stage: "Ecosystem", text: "Working with speakers, mentors and industry professionals to open up learning opportunities." },
  { stage: "Leadership", text: "Co-Founder — Programs & Ecosystem Relations at CodeWithTechno." },
];

/* ------------------------------------------------------------- PARTNERSHIPS */
// These are community collaborations — NOT official partnerships or
// representation unless you explicitly write so in `collaborationType`.
// `events` = list of event ids (from `events` below) done with this community.
export const partnerships = [
  {
    id: "microsoft-power-bi-up",
    name: "Microsoft Power BI UP",
    logo: "/images/partnerships/microsoft-power-bi-up.png",
    description: "", // TODO: one line about the collaboration
    website: "",
    collaborationType: "Community Collaboration",
    events: [],
  },
  {
    id: "neo4j",
    name: "Neo4j",
    logo: "/images/partnerships/neo4j.png",
    description: "", // TODO
    website: "",
    collaborationType: "Ecosystem Collaboration",
    events: [],
  },
  {
    id: "pydelhi",
    name: "PyDelhi",
    logo: "/images/partnerships/pydelhi.png",
    description: "", // TODO
    website: "",
    collaborationType: "Community Collaboration",
    events: [],
  },
];

/* ------------------------------------------------------------------ EVENTS */
// Newest first. `speakers` / `mentors` = ids from `speakers` below.
// attendees: leave null unless you have the exact number.
export const events = [
  {
    id: "buildroom-001",
    title: "The BuildRoom #001 — Breaking into Product Design in the AI Era",
    date: "19 July 2026",
    time: "11:00 AM – 12:30 PM",
    location: "Online (Google Meet)",
    type: "Speaker Session",
    role: "Programs & Ecosystem Relations",
    partner: "CodeWithTechno",
    attendees: null, // TODO: add the confirmed number of attendees
    description:
      "The first edition of The BuildRoom by CodeWithTechno, a live session with a product designer from Adobe on breaking into product design in the age of AI.",
    coverImage: "/images/events/buildroom-001-poster.jpg",
    gallery: [
      { src: "/images/events/buildroom-001-session.jpg", caption: "Live session on Google Meet" },
    ],
    speakers: ["ipshita-singh"],
    mentors: [],
    link: "",
  },
  // ---- COPY THIS BLOCK TO ADD A NEW EVENT ---------------------------------
  // {
  //   id: "unique-event-id",
  //   title: "Event name",
  //   date: "Month YYYY",
  //   time: "",
  //   location: "City / Online",
  //   type: "Workshop",            // Workshop | Hackathon | Speaker Session | Meetup ...
  //   role: "Your role",
  //   partner: "Community name",
  //   attendees: null,             // or a real number
  //   description: "What happened and why it mattered.",
  //   coverImage: "/images/events/your-event-cover.jpg",
  //   gallery: [{ src: "/images/events/your-event-1.jpg", caption: "Optional" }],
  //   speakers: [],                // ids from the speakers list
  //   mentors: [],
  //   link: "",
  // },
];

/* ---------------------------------------------------------------- SPEAKERS */
export const speakers = [
  {
    id: "ipshita-singh",
    name: "Ipshita Singh",
    designation: "Product Designer",
    organization: "Adobe",
    topic: "Breaking into Product Design in the AI Era",
    event: "The BuildRoom #001",
    photo: "/images/speakers/ipshita-singh.jpg",
    linkedin: "",
    website: "",
  },
  // Add more speakers by copying the block above.
];

/* ------------------------------------------------------------ ACHIEVEMENTS */
export const achievements = [
  {
    id: "iit-roorkee-ml",
    title: "One-Week Short-Term Course: Basics of Machine Learning & Responsible AI",
    organization: "IIT Roorkee · supported by IndiaAI Mission",
    year: "", // TODO
    description: "Selected for the course.",
    image: "",
    link: "",
  },
  {
    id: "research-ai-summit-2025",
    title: "Research AI Summit 2025",
    organization: "BRIC-NIPGR & semanticClimate",
    year: "2025",
    description: "",
    image: "",
    link: "",
  },
  {
    id: "microsoft-fabric-azure",
    title: "Microsoft Fabric & Azure Cloud Workshop",
    organization: "American Center New Delhi · Microsoft Fabric User Group",
    year: "", // TODO
    description: "",
    image: "",
    link: "",
  },
  {
    id: "cloud-computing-quiz",
    title: "Cloud Computing Quiz",
    organization: "Cloud Junction",
    year: "", // TODO
    description: "",
    image: "",
    link: "",
  },
];

/* ------------------------------------------------------------- IMPACT STATS */
// Use `value` for your own number (e.g. "6+"). Stats with an empty value are
// hidden. Use `source` to count automatically from a list instead:
// "experiences" | "partnerships" | "speakers" | "events".
export const impactStats = [
  { id: "roles", label: "Community Roles", source: "experiences" },
  { id: "collabs", label: "Community Collaborations", source: "partnerships" },
  { id: "speakers", label: "Speakers Featured", source: "speakers" },
  { id: "workshops", label: "Workshops & Hackathons", value: "" }, // e.g. "6+"
  { id: "participants", label: "Students / Participants Reached", value: "" }, // e.g. "500+"
  { id: "programs", label: "Programs Executed", value: "" },
];

/* ----------------------------------------------------------------- GALLERY */
// category: "Speaker Session" | "Workshop" | "Team" | "Community" | "Online" ...
// Filter chips are generated from the categories you use.
export const gallery = [
  { id: "g1", src: "/images/gallery/sameer-on-stage.jpg", caption: "Presenting on stage", event: "", category: "Speaker Session" },
  { id: "g2", src: "/images/gallery/team-photo-01.jpg", caption: "Team and community members after a session", event: "", category: "Team" },
  { id: "g3", src: "/images/gallery/speaker-session-03.jpg", caption: "Speaker session in progress", event: "", category: "Speaker Session" },
  { id: "g4", src: "/images/gallery/workshop-session-01.jpg", caption: "Guest session with students", event: "", category: "Workshop" },
  { id: "g5", src: "/images/gallery/community-group-01.jpg", caption: "Community members", event: "", category: "Community" },
  { id: "g6", src: "/images/gallery/speaker-session-02.jpg", caption: "Speaker at the podium", event: "", category: "Speaker Session" },
  { id: "g7", src: "/images/gallery/workshop-session-02.jpg", caption: "Hands-on session with a full room", event: "", category: "Workshop" },
  { id: "g8", src: "/images/gallery/speaker-session-01.jpg", caption: "Session introduction", event: "", category: "Speaker Session" },
  { id: "g9", src: "/images/gallery/online-team-meet-01.jpg", caption: "Organising team on a call", event: "", category: "Online" },
  { id: "g10", src: "/images/events/buildroom-001-poster.jpg", caption: "Event poster", event: "The BuildRoom #001", category: "Speaker Session" },
  { id: "g11", src: "/images/events/buildroom-001-session.jpg", caption: "Live session on Google Meet", event: "The BuildRoom #001", category: "Online" },
];

/* ------------------------------------------------------------------ CONTACT */
export const contact = {
  title: "Let's Build Something Meaningful Together.",
  text: "If you're building a community, running a technical program, organizing an event, or looking for someone passionate about ecosystem and collaboration, let's connect.",
};

/* ---------------------------------------------------------------- SECTIONS */
// Section headings + navbar. Reorder or rename here.
export const sections = {
  about: { id: "about", nav: "About", heading: "About", subheading: "" },
  experience: { id: "experience", nav: "Experience", heading: "Experience", subheading: "Roles across the community ecosystem" },
  journey: { id: "journey", heading: "Journey", subheading: "From learning to leading" },
  partnerships: { id: "partnerships", nav: "Partnerships", heading: "Community Partnerships & Ecosystem", subheading: "Communities I collaborate with" },
  events: { id: "events", nav: "Events", heading: "Events & Programs", subheading: "Sessions, workshops and programs" },
  impact: { id: "impact", heading: "Impact", subheading: "By the numbers" },
  speakers: { id: "speakers", nav: "Speakers", heading: "Speakers & Industry Connections", subheading: "People who make the sessions worth attending" },
  achievements: { id: "achievements", nav: "Achievements", heading: "Achievements", subheading: "Learning and recognition" },
  gallery: { id: "gallery", nav: "Gallery", heading: "Community in Action", subheading: "Moments from the ground" },
  contact: { id: "contact", nav: "Contact" },
};
