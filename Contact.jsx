import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { contact, profile, sections, socialLinks } from "../data/portfolioData.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const linkedin = socialLinks.find((s) => s.id === "linkedin")?.url;
  return (
    <Section meta={{ id: sections.contact.id }}>
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 id={`${sections.contact.id}-h`} className="font-display text-4xl leading-tight text-white sm:text-6xl">
          {contact.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">{contact.text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <Mail className="h-4 w-4" aria-hidden /> {profile.email}
          </a>
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
