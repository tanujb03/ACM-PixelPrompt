import { achievements } from "../../data/mockData";
import Reveal from "../shared/Reveal";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function NewsFeed() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Achievements & News
        </h2>

        <Reveal as="div" stagger={0.08} className="mt-10 flex flex-col gap-6">
          {achievements.newsFeed.map((entry) => (
            <article
              key={entry.id}
              className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:flex-row"
            >
              <img
                src={entry.image}
                width={200}
                height={140}
                className="aspect-[10/7] w-full rounded-xl object-cover sm:w-48"
                alt={entry.title}
              />
              <div>
                <p className="text-xs font-medium tracking-wide text-[var(--color-text-muted)] uppercase">
                  {formatDate(entry.date)}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{entry.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {entry.description}
                </p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
