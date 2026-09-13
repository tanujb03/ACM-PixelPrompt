import EventSpotlight from "../components/events/EventSpotlight";
import EventsFilterList from "../components/events/EventsFilterList";
import PastEventGallery from "../components/events/PastEventGallery";
import FootfallStats from "../components/events/FootfallStats";

export default function Events() {
  return (
    <>
      <section className="px-6 pt-24 pb-8 text-center sm:pt-32">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Events
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-[var(--color-text-muted)]">
          Workshops, hackathons, and talks — from our flagship hackathon to weekly sessions.
        </p>
      </section>

      <EventSpotlight />
      <EventsFilterList />
      <PastEventGallery />
      <FootfallStats />
    </>
  );
}
