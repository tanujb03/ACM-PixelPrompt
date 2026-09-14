import TeamFieldSequence from "../components/team/TeamFieldSequence";
import FloatingShape from "../components/shared/FloatingShape";
import SplitTextReveal from "../components/shared/SplitTextReveal";

export default function Team() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient background shapes */}
      <FloatingShape
        type="sphere"
        color="var(--color-accent)"
        size="h-80 w-80"
        className="-top-24 -left-20 opacity-20"
        blur="blur-[90px]"
        speed={16}
      />
      <FloatingShape
        type="pill"
        color="var(--color-pink)"
        size="h-96 w-96"
        className="top-1/3 -right-32 opacity-15"
        blur="blur-[110px]"
        speed={19}
      />

      {/* Hero Header */}
      <section className="relative z-10 px-6 pt-32 pb-12 text-center sm:pt-40 sm:pb-16">
        <div className="flex justify-center">
          <SplitTextReveal
            text="Leadership & Minds."
            as="h1"
            className="font-display text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-6xl md:text-7xl"
          />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-base text-[var(--color-text-muted)] sm:text-lg">
          The passionate developers, designers, and faculty researchers powering the chapter day in and day out.
        </p>
      </section>

      <TeamFieldSequence />
    </div>
  );
}
