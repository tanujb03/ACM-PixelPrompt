const typeLabels = {
  workshop: "Workshop",
  hackathon: "Hackathon",
  talk: "Talk",
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// One upcoming-event card — used in the Home events teaser and the full
// filterable list on /events.
export default function EventCard({ event }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <span className="w-fit rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium tracking-wide text-[var(--color-accent)] uppercase">
        {typeLabels[event.type] ?? event.type}
      </span>
      <h3 className="text-lg font-semibold">{event.name}</h3>
      <p className="text-sm text-[var(--color-text-muted)]">{event.description}</p>
      <div className="mt-2 flex flex-col gap-1 text-xs text-[var(--color-text-muted)]">
        <span>{formatDate(event.date)} · {event.time}</span>
        <span>{event.location}</span>
      </div>
    </div>
  );
}
