import { useState } from "react";
import { contact } from "../../data/mockData";

const initialForm = { name: "", email: "", year: "", branch: "", sigs: [], why: "" };

export default function JoinForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSig = (sig) => {
    setForm((prev) => ({
      ...prev,
      sigs: prev.sigs.includes(sig) ? prev.sigs.filter((s) => s !== sig) : [...prev.sigs, sig],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Membership interest form submitted:", form);
      setSubmitted(true);
      setIsSubmitting(false);
      setForm(initialForm);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-[var(--color-lime)]/30 bg-[var(--color-surface)]/80 p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-lime)]/10 to-transparent" />
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-lime)]/20 text-[var(--color-lime)]">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-[var(--color-text)]">
          {contact.joinForm.confirmationMessage}
        </h3>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold tracking-wider text-[var(--color-lime)] uppercase transition hover:border-[var(--color-lime)] hover:bg-[var(--color-lime)]/10"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-[var(--color-surface)]/80 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-300 hover:border-white/20"
    >
      <div className="pointer-events-none absolute -top-20 -left-20 h-44 w-44 rounded-full bg-[var(--color-lime)]/10 blur-3xl" />

      <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl">
        {contact.joinForm.heading}
      </h2>

      {/* Name Input */}
      <div className="mt-2 flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)]/50 transition-all focus:border-[var(--color-lime)] focus:bg-white/[0.07] focus:ring-2 focus:ring-[var(--color-lime)]/20 focus:outline-none"
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)]/50 transition-all focus:border-[var(--color-lime)] focus:bg-white/[0.07] focus:ring-2 focus:ring-[var(--color-lime)]/20 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Year of Study */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="year" className="text-xs font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
            Year of Study
          </label>
          <select
            id="year"
            name="year"
            value={form.year}
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-[#160731] px-4 py-3 text-sm text-[var(--color-text)] transition-all focus:border-[var(--color-lime)] focus:ring-2 focus:ring-[var(--color-lime)]/20 focus:outline-none"
          >
            <option value="">Select year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </div>

        {/* Branch */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="branch" className="text-xs font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
            Branch
          </label>
          <input
            id="branch"
            name="branch"
            type="text"
            required
            placeholder="e.g. CSE, IT, ECE"
            value={form.branch}
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)]/50 transition-all focus:border-[var(--color-lime)] focus:bg-white/[0.07] focus:ring-2 focus:ring-[var(--color-lime)]/20 focus:outline-none"
          />
        </div>
      </div>

      {/* SIG(s) of interest */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
          SIG(s) of interest
        </span>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {contact.joinForm.sigOptions.map((sig) => (
            <label
              key={sig}
              className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                form.sigs.includes(sig)
                  ? "border-[var(--color-lime)] bg-[var(--color-lime)]/10 text-[var(--color-lime)]"
                  : "border-white/10 bg-white/[0.04] text-[var(--color-text-muted)] hover:border-white/20"
              }`}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={form.sigs.includes(sig)}
                onChange={() => toggleSig(sig)}
              />
              {sig}
            </label>
          ))}
        </div>
      </div>

      {/* Why join */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="why" className="text-xs font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
          Why do you want to join?
        </label>
        <textarea
          id="why"
          name="why"
          rows={3}
          value={form.why}
          onChange={handleChange}
          className="resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)]/50 transition-all focus:border-[var(--color-lime)] focus:bg-white/[0.07] focus:ring-2 focus:ring-[var(--color-lime)]/20 focus:outline-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-bubble group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[var(--color-lime)] py-3.5 text-sm font-bold text-[#0d0221] shadow-[0_6px_0_#89c922] transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_4px_0_#89c922] active:translate-y-1.5 active:shadow-[0_1px_0_#89c922] disabled:opacity-50"
      >
        <span>{isSubmitting ? "Submitting…" : contact.joinForm.submitLabel}</span>
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </form>
  );
}
