import { about } from "../data/mockData";
import Reveal from "../components/shared/Reveal";

// PLACEHOLDER: generic Unsplash architecture shot — replace once PS locks.
const ABOUT_BANNER_IMAGE =
  "https://images.unsplash.com/photo-1622396481322-3b83d186701b?auto=format&fit=crop&w=1600&q=80";

export default function About() {
  return (
    <>
      <section className="px-6 pt-24 pb-12 text-center sm:pt-32">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          {about.headline}
        </h1>
      </section>

      <Reveal as="div" className="mx-auto max-w-4xl px-6 pb-12">
        <img
          src={ABOUT_BANNER_IMAGE}
          width={1600}
          height={640}
          className="aspect-[2.5/1] w-full rounded-2xl object-cover"
          alt="[Placeholder banner visual]"
        />
      </Reveal>

      <Reveal
        as="div"
        stagger={0.15}
        className="mx-auto flex max-w-3xl flex-col gap-4 px-6 pb-16 text-center text-base text-[var(--color-text-muted)]"
      >
        {about.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Reveal>

      <Reveal
        as="div"
        stagger={0.1}
        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 pb-24 sm:grid-cols-3"
      >
        {about.values.map((value) => (
          <div
            key={value.id}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center"
          >
            <h3 className="text-lg font-semibold">{value.title}</h3>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              {value.description}
            </p>
          </div>
        ))}
      </Reveal>
    </>
  );
}
