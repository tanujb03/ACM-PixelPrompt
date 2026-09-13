import EventSpotlight from "../components/events/EventSpotlight";
import EventList from "../components/events/EventList";
import FootfallStats from "../components/events/FootfallStats";
import FloatingShape from "../components/shared/FloatingShape";
import SplitTextReveal from "../components/shared/SplitTextReveal";
import WaveDivider from "../components/shared/WaveDivider";

export default function Events() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient background shapes */}
      <FloatingShape
        shape="decagon"
        color="var(--color-pink)"
        size={200}
        className="-top-20 -right-20 opacity-20"
        rotateSpeed="15s"
      />
      <FloatingShape
        shape="circle"
        color="var(--color-lime)"
        size={220}
        className="top-1/3 -left-32 opacity-15"
        rotateSpeed="18s"
      />

      {/* Hero Header */}
      <section className="relative z-10 px-6 pt-32 pb-12 text-center sm:pt-40 sm:pb-16">
        <div className="flex justify-center">
          <SplitTextReveal
            text="Events & Activities"
            as="h1"
            className="font-display text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-6xl md:text-7xl"
          />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-base text-[var(--color-text-muted)] sm:text-lg">
          Workshops, hackathons, talks — filter by what you're looking for.
        </p>
      </section>

      <EventSpotlight />
      <WaveDivider variant="dark-to-light" />
      <div className="section-lavender">
        <EventList />
      </div>
      <WaveDivider variant="light-to-dark" />
      <FootfallStats />
    </div>
  );
}
