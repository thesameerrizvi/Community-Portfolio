import { motion } from "framer-motion";
import { profile } from "../data/portfolioData.js";
import SafeImage from "./SafeImage.jsx";
import SocialLinks from "./SocialLinks.jsx";

const ease = [0.22, 1, 0.36, 1];
const fade = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function Hero() {
  const roles = profile.headline.split("•").map((r) => r.trim()).filter(Boolean);

  return (
    <section id="home" aria-label="Introduction" className="flex min-h-[100svh] items-center pb-16 pt-28">
      <div className="page flex flex-col items-center text-center">
        {/* One orchestrated moment: the portrait settles into place, then text follows */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-full border border-accent/25" aria-hidden />
          <div className="absolute -inset-7 rounded-full border border-white/5" aria-hidden />
          <SafeImage
            src={profile.photo}
            alt={profile.photoAlt}
            label={profile.name}
            eager
            className="h-36 w-36 rounded-full object-cover ring-1 ring-white/15 sm:h-48 sm:w-48"
          />
        </motion.div>

        <motion.h1 {...fade(0.25)} className="mt-10 font-display text-5xl leading-none text-white sm:text-7xl lg:text-8xl">
          {profile.name}
        </motion.h1>

        <motion.ul {...fade(0.4)} aria-label="Focus areas" className="mt-6 flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm text-zinc-300 sm:text-base">
          {roles.map((r, i) => (
            <li key={r} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />}
              {r}
            </li>
          ))}
        </motion.ul>

        <motion.p {...fade(0.55)} className="mt-8 max-w-2xl font-display text-2xl italic leading-snug text-sand sm:text-3xl">
          “{profile.motto}”
        </motion.p>

        <motion.div {...fade(0.7)} className="mt-10 flex flex-col items-center gap-6 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-3">
            <a href={profile.primaryCta.href} className="btn-primary">{profile.primaryCta.label}</a>
            <a href={profile.secondaryCta.href} className="btn-ghost">{profile.secondaryCta.label}</a>
          </div>
          <span aria-hidden className="hidden h-8 w-px bg-white/10 sm:block" />
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
}
