import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile, sections } from "../data/portfolioData.js";

const navItems = [{ id: "home", nav: "Home" }, ...Object.values(sections).filter((s) => s.nav)];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const els = navItems.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-white/10 bg-ink/85 backdrop-blur" : ""}`}>
      <nav aria-label="Primary" className="page flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-xl text-white">{profile.name}</a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={`rounded-full px-3 py-2 text-sm transition-colors hover:text-white ${active === n.id ? "text-accent" : "text-zinc-400"}`}
              >
                {n.nav}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="rounded-full p-2 text-white hover:bg-white/10 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="page flex flex-col gap-1 pb-5 lg:hidden">
          {navItems.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-3 py-3 text-base ${active === n.id ? "bg-white/5 text-accent" : "text-zinc-300"}`}
              >
                {n.nav}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
