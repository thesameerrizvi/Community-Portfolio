import { useEffect } from "react";
import { profile } from "./data/portfolioData.js";
import NetworkBackground from "./components/NetworkBackground.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Journey from "./components/Journey.jsx";
import Partnerships from "./components/Partnerships.jsx";
import Events from "./components/Events.jsx";
import ImpactStats from "./components/ImpactStats.jsx";
import Speakers from "./components/Speakers.jsx";
import Achievements from "./components/Achievements.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useEffect(() => { document.title = profile.siteTitle; }, []);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <NetworkBackground />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Journey />
        <Partnerships />
        <Events />
        <ImpactStats />
        <Speakers />
        <Achievements />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
