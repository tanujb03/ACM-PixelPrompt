export default function VerticalCard({ vertical }) {
  return (
    <div className="glow-card group flex flex-col overflow-hidden">
      {vertical.image && (
        <div className="relative h-32 w-full overflow-hidden">
          <img
            src={vertical.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent" />
        </div>
      )}
      <div className="flex flex-col gap-3 p-5">
        <h3 className="font-display text-base font-semibold text-[var(--color-text)]">
          {vertical.name}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
          {vertical.description}
        </p>
      </div>
    </div>
  );
}
