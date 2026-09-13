import { teamGlobe } from "../../data/mockData";
import SplitTextReveal from "../shared/SplitTextReveal";

// Placeholder for the 3D "Team Globe" section — the real globe model isn't
// in the repo yet. Per the content doc's build notes: each node on the
// globe will be a team member's photo, and clicking only zooms into that
// photo (no navigation to the Team page). Do not fake this with a 2D
// substitute — this block stays a clearly labeled placeholder until the
// real model lands.
export default function TeamGlobePlaceholder() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <SplitTextReveal
          text={teamGlobe.heading}
          as="h2"
          className="font-display text-3xl font-bold tracking-tight sm:text-5xl"
        />
        <p className="mt-4 text-sm text-[var(--color-text-muted)] sm:text-base">
          {teamGlobe.subheading}
        </p>

        <div className="mt-10 flex h-72 flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-[var(--color-border-bright)] sm:h-96">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.5 4 5.6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.6-4-9s1.5-6.5 4-9z" />
          </svg>
          <p className="text-xs font-semibold tracking-widest text-[var(--color-text-muted)] uppercase">
            3D Team Globe {"—"} coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
