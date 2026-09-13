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
        type="sphere"
        color="var(--color-lime)"
        size="h-80 w-80"
        className="-top-20 -right-20 opacity-20"
        blur="blur-[90px]"
        speed={15}
      />
      <FloatingShape
        type="torus"
        color="var(--color-accent)"
        size="h-96 w-96"
        className="top-1/3 -left-32 opacity-15"
        blur="blur-[110px]"
        speed={20}
      />

      {/* Hero Header */}
      <section className="relative z-10 px-6 pt-32 pb-12 text-center sm:pt-40 sm:pb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-[var(--color-lime)] uppercase backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[var(--color-lime)] animate-pulse" />
          Track Record & Legacy
        </div>

        <div className="mt-6 flex justify-center">
          <SplitTextReveal
            text="Victories & Accolades."
            as="h1"
            className="font-display text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-6xl md:text-7xl"
          />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-base text-[var(--color-text-muted)] sm:text-lg">
          A running showcase of hackathon championships, open-source milestones, and chapter awards.
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

