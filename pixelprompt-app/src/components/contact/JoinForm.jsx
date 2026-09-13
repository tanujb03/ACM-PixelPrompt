import { useState } from "react";

const initialForm = { name: "", email: "", year: "", interest: "", message: "" };

export default function JoinForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
          Welcome to the Collective!
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          We&apos;ve received your application. Keep an eye on your inbox for onboarding details and Discord access.
        </p>
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

      {/* Badge */}
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wider text-[var(--color-pink)] uppercase">
        <span className="h-2 w-2 rounded-full bg-[var(--color-pink)] animate-pulse" />
        Membership Application
      </div>

      <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl">
        Ready to build what&apos;s next?
      </h2>
      <p className="text-sm text-[var(--color-text-muted)]">
        Fill out this form to join our chapters, access private repos, and participate in sponsored hackathons.
      </p>

      {/* Name Input */}
      <div className="mt-2 flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Ada Lovelace"
          value={form.name}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)]/50 transition-all focus:border-[var(--color-lime)] focus:bg-white/[0.07] focus:ring-2 focus:ring-[var(--color-lime)]/20 focus:outline-none"
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
          University Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="ada@university.edu"
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
            <option value="1">1st Year (Freshman)</option>
            <option value="2">2nd Year (Sophomore)</option>
            <option value="3">3rd Year (Junior)</option>
            <option value="4">4th Year (Senior)</option>
            <option value="grad">Graduate Student</option>
          </select>
        </div>

        {/* SIG interest */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="interest" className="text-xs font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
            Interested SIG
          </label>
          <select
            id="interest"
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-[#160731] px-4 py-3 text-sm text-[var(--color-text)] transition-all focus:border-[var(--color-lime)] focus:ring-2 focus:ring-[var(--color-lime)]/20 focus:outline-none"
          >
            <option value="">Select SIG</option>
            <option value="acm-w">ACM-W (Women in Tech)</option>
            <option value="sig-ai">SIG-AI (Artificial Intelligence)</option>
            <option value="cp-cell">Competitive Programming</option>
            <option value="sig-web-cloud">SIG-Web & Cloud</option>
            <option value="not-sure">Exploring / Not sure yet</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
          Anything else we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us what technologies you love or what projects you want to build..."
          value={form.message}
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
        <span>{isSubmitting ? "Submitting Application..." : "Submit Application"}</span>
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </form>
  );
}

