export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition hover:border-[var(--color-accent)]">
      <div className="flex aspect-square items-center justify-center border-b border-[var(--color-border)] bg-[var(--color-surface-2)]">
        <span className="text-xs tracking-wide text-[var(--color-text-muted)] uppercase">
          [Item Image]
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-medium tracking-wide text-[var(--color-accent)] uppercase">
          {product.category}
        </span>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="flex-1 text-sm text-[var(--color-text-muted)]">
          {product.blurb}
        </p>
        <p className="mt-2 text-base font-semibold">{product.price}</p>
      </div>
    </div>
  );
}
