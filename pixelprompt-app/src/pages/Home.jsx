import Hero from "../components/home/Hero";
import AwardsTicker from "../components/home/AwardsTicker";
import WhatWeDoTeaser from "../components/home/WhatWeDoTeaser";
import EventTree3D from "../components/home/EventTree3D";
import TeamGlobePlaceholder from "../components/home/TeamGlobePlaceholder";
import FinalCta from "../components/home/FinalCta";

export default function Home() {
  return (
    <>
      {/* 1. Hero — dark navy, giant uppercase text */}
      <Hero />

      {/* 2. Awards marquee ticker */}
      <AwardsTicker />

      {/* 3. What We Do — 4 solid-color cards */}
      <WhatWeDoTeaser />

      {/* 4. Event Tree — 3D, leaf nodes = events */}
      <EventTree3D />

      {/* 5. Team Globe — 3D placeholder */}
      <TeamGlobePlaceholder />

      {/* 6. Join CTA band */}
      <FinalCta />
    </>
  );
}
