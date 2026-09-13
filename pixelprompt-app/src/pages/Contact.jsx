import ContactInfo from "../components/contact/ContactInfo";
import JoinForm from "../components/contact/JoinForm";
import FAQAccordion from "../components/contact/FAQAccordion";

export default function Contact() {
  return (
    <>
      <section className="px-6 pt-24 pb-8 text-center sm:pt-32">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Contact & Join
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-[var(--color-text-muted)]">
          Have a question, or ready to join? Reach out below.
        </p>
      </section>

      <section className="px-6 pb-16 sm:pb-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <ContactInfo />
          <JoinForm />
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/40 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
