import { achievements } from "../data/mockData";
import StatsStrip from "../components/home/StatsStrip";
import NewsFeed from "../components/achievements/NewsFeed";
import HallOfFame from "../components/achievements/HallOfFame";
import AwardBadges from "../components/achievements/AwardBadges";

export default function Achievements() {
  return (
    <>
      <section className="px-6 pt-24 pb-8 text-center sm:pt-32">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Achievements
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-[var(--color-text-muted)]">
          A running record of what the chapter has built and won.
        </p>
      </section>

      <StatsStrip stats={achievements.stats} />
      <NewsFeed />
      <HallOfFame />
      <AwardBadges />
    </>
  );
}
