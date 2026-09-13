import { eventTree } from "../../data/mockData";
import SplitTextReveal from "../shared/SplitTextReveal";

// Placeholder for the 3D "Event Tree" section — the real branching-geometry
// tree model isn't in the repo yet. Per the content doc's build notes: leaf
// nodes will be individual events (clickable, routing to that event on the
// Events page, with a hover tooltip showing the event name). Do not fake
// this interaction with a 2D substitute — this block stays a clearly
// labeled placeholder until the real model lands.
export default function EventTreePlaceholder() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <SplitTextReveal
          text={eventTree.heading}
          as="h2"
          className="font-display text-3xl font-bold tracking-tight sm:text-5xl"
        />
        <p className="mt-4 text-sm text-[var(--color-text-muted)] sm:text-base">
          {eventTree.subheading}
        </p>

        <div className="mt-10 flex h-72 flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-[var(--color-border-bright)] sm:h-96">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v6m0 0l-4-3m4 3l4-3M12 9v5m0 0l-5 4m5-4l5 4" />
            <circle cx="12" cy="20" r="1.5" fill="var(--color-text-muted)" />
          </svg>
          <p className="text-xs font-semibold tracking-widest text-[var(--color-text-muted)] uppercase">
            3D Event Tree {"—"} coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
