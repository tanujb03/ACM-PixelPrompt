import { useState } from "react";

const initialForm = { name: "", email: "", year: "", interest: "", message: "" };

// Fake-functional — no backend yet, so submission just logs to console
// and shows a success state. Swap in a real handler once one exists.
export default function JoinForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Membership interest form submitted:", form);
    setSubmitted(true);
    setForm(initialForm);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center">
        <p className="text-base font-semibold">Thanks for reaching out!</p>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          We've received your interest form and will be in touch soon.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm font-semibold text-[var(--color-accent)] hover:opacity-80"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
    >
      <h2 className="text-lg font-semibold">Join / Membership Interest</h2>

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm text-[var(--color-text-muted)]">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm text-[var(--color-text-muted)]">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="year" className="text-sm text-[var(--color-text-muted)]">Year of Study</label>
        <select
          id="year"
          name="year"
          value={form.year}
          onChange={handleChange}
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
        >
          <option value="">Select one</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
          <option value="grad">Graduate Student</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="interest" className="text-sm text-[var(--color-text-muted)]">Which SIG interests you?</label>
        <select
          id="interest"
          name="interest"
          value={form.interest}
          onChange={handleChange}
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
        >
          <option value="">Select one</option>
          <option value="acm-w">ACM-W</option>
          <option value="sig-ai">SIG-AI</option>
          <option value="cp-cell">Competitive Programming Cell</option>
          <option value="sig-web-cloud">SIG-Web & Cloud</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm text-[var(--color-text-muted)]">Anything else?</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
        />
      </div>

      <button
        type="submit"
        className="mt-2 rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
      >
        Submit Interest
      </button>
    </form>
  );
}
