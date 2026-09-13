export default function VerticalCard({ vertical }) {
  return (
    <div className="glow-card flex flex-col gap-3 p-5">
      <h3 className="font-display text-base font-semibold text-[var(--color-text)]">
        {vertical.name}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
        {vertical.description}
      </p>
    </div>
  );
}
