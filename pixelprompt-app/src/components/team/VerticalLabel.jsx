// Sideways section label for the pinned field/faculty panels — reads
// bottom-to-top, replacing what used to be a normal horizontal heading.
// `overlay` renders it floating directly over full-bleed content (a field
// or dark panel) with a scrim behind the text for legibility, instead of
// occupying its own bordered column.
export default function VerticalLabel({ text, overlay = false }) {
  if (overlay) {
    return (
      <div className="absolute left-0 top-0 z-10 flex h-full w-16 items-center justify-center sm:w-20">
        <span
          className="rounded-full bg-black/35 px-2 py-4 font-display text-lg font-bold tracking-[0.15em] text-white uppercase backdrop-blur-sm sm:text-2xl"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {text}
        </span>
      </div>
    );
  }

  return (
    <div className="flex w-14 shrink-0 items-center justify-center border-r border-[var(--color-border)] sm:w-20">
      <span
        className="font-display text-xl font-bold tracking-[0.15em] text-[var(--color-text)] uppercase sm:text-3xl"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        {text}
      </span>
    </div>
  );
}
