import Hero from "../components/home/Hero";
import AwardsTicker from "../components/home/AwardsTicker";
import WhatWeDoTeaser from "../components/home/WhatWeDoTeaser";
import EventsTeaser from "../components/home/EventsTeaser";
import FinalCta from "../components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <AwardsTicker />
      <WhatWeDoTeaser />
      <EventsTeaser />
      <FinalCta />
    </>
  );
}
