import { useState } from "react";
import { contact } from "../../data/mockData";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState(contact.faq[0]?.id ?? null);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>
      {contact.faq.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium"
            >
              {item.q}
              <span className="text-[var(--color-text-muted)]">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <p className="px-5 pb-4 text-sm text-[var(--color-text-muted)]">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
