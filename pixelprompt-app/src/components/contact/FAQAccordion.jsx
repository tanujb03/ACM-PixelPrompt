import { useState } from "react";
import { contact } from "../../data/mockData";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState(contact.faq[0]?.id ?? null);

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wider text-[var(--color-accent)] uppercase">
          Got Questions?
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          Everything you need to know about joining ACM Nova Chapter.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {contact.faq.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-[var(--color-lime)]/40 bg-[var(--color-surface)]/90 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
              >
                <span className="font-display text-base font-semibold text-[var(--color-text)] sm:text-lg">
                  {item.q}
                </span>
                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 border-[var(--color-lime)] bg-[var(--color-lime)] text-[#0d0221]"
                      : "border-white/20 bg-white/5 text-[var(--color-text-muted)]"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

