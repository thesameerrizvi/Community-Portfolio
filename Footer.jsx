import { profile } from "../data/portfolioData.js";
import SocialLinks from "./SocialLinks.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="page flex flex-col items-center gap-5 text-center">
        <p className="font-display text-2xl text-white">{profile.name}</p>
        <p className="text-sm text-zinc-400">{profile.headline}</p>
        <SocialLinks />
        <p className="text-xs text-zinc-500">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
