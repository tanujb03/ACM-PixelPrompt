// One SIG/vertical card — used in the Home "What We Do" teaser grid and
// the full verticals grid on /about.
export default function VerticalCard({ vertical }) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <h3 className="text-lg font-semibold">{vertical.name}</h3>
      <p className="mt-2 text-sm text-[var(--color-text-muted)]">
        {vertical.description}
      </p>
    </div>
  );
}
