import EventSpotlight from "../components/events/EventSpotlight";
import EventsFilterList from "../components/events/EventsFilterList";
import PastEventGallery from "../components/events/PastEventGallery";
import FootfallStats from "../components/events/FootfallStats";
import FloatingShape from "../components/shared/FloatingShape";
import SplitTextReveal from "../components/shared/SplitTextReveal";
import WaveDivider from "../components/shared/WaveDivider";

export default function Events() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient background shapes */}
      <FloatingShape
        type="torus"
        color="var(--color-pink)"
        size="h-80 w-80"
        className="-top-20 -right-20 opacity-20"
        blur="blur-[90px]"
        speed={15}
      />
      <FloatingShape
        type="sphere"
        color="var(--color-lime)"
        size="h-96 w-96"
        className="top-1/3 -left-32 opacity-15"
        blur="blur-[110px]"
        speed={18}
      />

      {/* Hero Header */}
      <section className="relative z-10 px-6 pt-32 pb-12 text-center sm:pt-40 sm:pb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-[var(--color-lime)] uppercase backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[var(--color-lime)] animate-pulse" />
          Flagship & Community
        </div>

        <div className="mt-6 flex justify-center">
          <SplitTextReveal
            text="Events & Gatherings."
            as="h1"
            className="font-display text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-6xl md:text-7xl"
          />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-base text-[var(--color-text-muted)] sm:text-lg">
          Workshops, 48-hour hackathons, tech talks, and open-source sprints — where ideas turn into reality.
        </p>
      </section>

      <EventSpotlight />
      <WaveDivider fillBottom="rgba(211,197,246,0.03)" />
      <EventsFilterList />
      <WaveDivider fillBottom="rgba(180,240,66,0.03)" />
      <PastEventGallery />
      <WaveDivider fillBottom="rgba(247,37,133,0.03)" />
      <FootfallStats />
    </div>
  );
}

