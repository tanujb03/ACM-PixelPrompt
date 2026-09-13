import ProductGrid from "../components/product/ProductGrid";

export default function Product() {
  return (
    <>
      <section className="px-6 pt-24 pb-8 text-center sm:pt-32">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          [Product Page Headline]
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-[var(--color-text-muted)]">
          [Short line introducing the catalog / list below.]
        </p>
      </section>
      <ProductGrid />
    </>
  );
}
