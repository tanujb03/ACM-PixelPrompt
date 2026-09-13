import Hero from "../components/home/Hero";
import AwardsTicker from "../components/home/AwardsTicker";
import WaveDivider from "../components/shared/WaveDivider";
import AboutTeaser from "../components/home/AboutTeaser";
import WhatWeDoTeaser from "../components/home/WhatWeDoTeaser";
import TrustSection from "../components/home/TrustSection";
import EventsTeaser from "../components/home/EventsTeaser";
import StatsStrip from "../components/home/StatsStrip";
import FinalCta from "../components/home/FinalCta";
import { achievements } from "../data/mockData";

export default function Home() {
  return (
    <>
      {/* 1. Hero — dark navy, giant uppercase text */}
      <Hero />

      {/* 2. Awards marquee ticker */}
      <AwardsTicker />

      {/* 3. Transition: dark → lavender */}
      <WaveDivider variant="dark-to-light" />

      {/* 4. About teaser — light lavender section */}
      <AboutTeaser />

      {/* 5. Transition: lavender → dark */}
      <WaveDivider variant="light-to-dark" />

      {/* 6. Services / What We Do — dark navy, 3 large colored cards */}
      <WhatWeDoTeaser />

      {/* 7. Trust statement */}
      <TrustSection />

      {/* 8. Stats strip */}
      <StatsStrip stats={achievements.stats} />

      {/* 9. Events teaser */}
      <EventsTeaser />

      {/* 10. Final CTA */}
      <FinalCta />
    </>
  );
}
