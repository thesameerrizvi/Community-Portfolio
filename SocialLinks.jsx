import { socialLinks } from "../data/portfolioData.js";
import { getSocialIcon } from "../lib/icons.js";

/** Renders every social link that has a URL. Add/remove in `socialLinks` (portfolioData.js). */
export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socialLinks.filter((s) => s.url).map((s) => {
        const Icon = getSocialIcon(s.icon);
        const external = s.url.startsWith("http");
        return (
          <li key={s.id}>
            <a
              href={s.url}
              aria-label={s.label}
              title={s.label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-5 w-5" aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
