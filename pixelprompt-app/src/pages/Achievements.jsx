import { achievements } from "../data/mockData";
import StatsStrip from "../components/home/StatsStrip";
import NewsFeed from "../components/achievements/NewsFeed";
import HallOfFame from "../components/achievements/HallOfFame";
import AwardBadges from "../components/achievements/AwardBadges";
import FloatingShape from "../components/shared/FloatingShape";
import SplitTextReveal from "../components/shared/SplitTextReveal";
import WaveDivider from "../components/shared/WaveDivider";

export default function Achievements() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient background shapes */}
      <FloatingShape
        shape="circle"
        color="var(--color-lime)"
        size={320}
        className="-top-20 -right-20 opacity-20 blur-[90px]"
        rotateSpeed="15s"
      />
      <FloatingShape
        shape="decagon"
        color="var(--color-accent)"
        size={384}
        className="top-1/3 -left-32 opacity-15 blur-[110px]"
        rotateSpeed="20s"
      />

      {/* Hero Header */}
      <section className="relative z-10 px-6 pt-32 pb-12 text-center sm:pt-40 sm:pb-16">
        <div className="flex justify-center">
          <SplitTextReveal
            text={achievements.pageHeading}
            as="h1"
            className="font-display text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-6xl md:text-7xl"
          />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-base text-[var(--color-text-muted)] sm:text-lg">
          {achievements.pageSubheading}
        </p>
      </section>

      <StatsStrip stats={achievements.stats} />
      <WaveDivider fillBottom="rgba(211,197,246,0.03)" />
      <NewsFeed />
      <WaveDivider fillBottom="rgba(180,240,66,0.03)" />
      <HallOfFame />
      <WaveDivider fillBottom="rgba(247,37,133,0.03)" />
      <AwardBadges />
    </div>
  );
}

