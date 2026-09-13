import Reveal from "../shared/Reveal";

const defaultVisual = (
  <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
    <span className="text-xs tracking-wide text-[var(--color-text-muted)] uppercase">
      [Visual Placeholder]
    </span>
  </div>
);

// One alternating text/visual section. Rendered once per entry in
// data/mockData.js `features` — pass `reverse` to flip the layout, and
// `visual` to swap in a real image/component instead of the empty box.
export default function FeatureBlock({ feature, reverse = false, visual }) {
  return (
    <Reveal
      as="div"
      className={`mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-16 sm:py-20 md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2">{visual ?? defaultVisual}</div>

      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {feature.title}
        </h2>
        <p className="mt-4 text-base text-[var(--color-text-muted)]">
          {feature.description}
        </p>
      </div>
    </Reveal>
  );
}
