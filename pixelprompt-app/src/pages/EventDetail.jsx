import { useParams, Link, Navigate } from "react-router-dom";
import { events } from "../data/events";
import Reveal from "../components/shared/Reveal";
import SplitTextReveal from "../components/shared/SplitTextReveal";
import MagneticButton from "../components/shared/MagneticButton";

const imageModules = import.meta.glob("../assets/images/events/*", {
  eager: true,
  import: "default",
});
const imagesByFilename = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => [path.split("/").pop(), url])
);

const palette = [
  { bg: "var(--color-lime)", text: "#150734" },
  { bg: "var(--color-pink)", text: "#ffffff" },
  { bg: "var(--color-blue)", text: "#ffffff" },
  { bg: "var(--color-lavender)", text: "#150734" },
  { bg: "var(--color-orange)", text: "#150734" },
  { bg: "var(--color-purple)", text: "#ffffff" },
];

export default function EventDetail() {
  const { eventId } = useParams();
  const index = events.findIndex((e) => e.id === eventId);
  const event = events[index];

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  const colors = palette[index % palette.length];
  const imageSrc = event.image ? imagesByFilename[event.image] : null;

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section
        className="relative overflow-hidden px-6 pt-32 pb-16 sm:pt-40 sm:pb-20"
        style={{ background: `linear-gradient(160deg, ${colors.bg} 0%, var(--color-bg) 75%)` }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,_rgba(0,0,0,0.25),_transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <Link
            to="/events"
            viewTransition
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest"
            style={{ color: colors.text }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All Events
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span
              className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide"
              style={{ background: "rgba(0,0,0,0.15)", color: colors.text }}
            >
              {event.type}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: colors.text, opacity: 0.75 }}>
              {event.date}
            </span>
          </div>

          <SplitTextReveal
            text={event.shortName || event.name}
            as="h1"
            className="mt-4 font-hero text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
            style={{ color: colors.text }}
          />

          {imageSrc && (
            <Reveal as="div" className="mt-10 overflow-hidden rounded-3xl">
              <img
                src={imageSrc}
                alt={event.name}
                className="h-64 w-full object-cover sm:h-96"
                loading="lazy"
              />
            </Reveal>
          )}
        </div>
      </section>

      {/* About the event */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-[2fr_1fr]">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[var(--color-lime)] uppercase">
              About the event
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl">
              What happened
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)]">
              {event.description}
            </p>

            {event.formats && (
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {event.formats.map((format) => (
                  <div key={format.id} className="glow-card p-5">
                    <h3 className="font-display text-base font-semibold text-[var(--color-lime)]">
                      {format.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {format.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="glow-card flex flex-col gap-5 p-6 sm:h-fit">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[var(--color-text-muted)] uppercase">
                Date
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--color-text)]">{event.date}</p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-[var(--color-text-muted)] uppercase">
                Type
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--color-text)]">{event.type}</p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-[var(--color-text-muted)] uppercase">
                Conducted by
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--color-text)]">
                {event.organizer || "ACM MITS Student Chapter"}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <MagneticButton
            to="/events"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-bright)] px-7 py-3.5 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface)]"
          >
            Back to all events
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
