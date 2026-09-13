import ContactInfo from "../components/contact/ContactInfo";
import JoinForm from "../components/contact/JoinForm";
import FAQAccordion from "../components/contact/FAQAccordion";
import FloatingShape from "../components/shared/FloatingShape";
import SplitTextReveal from "../components/shared/SplitTextReveal";
import WaveDivider from "../components/shared/WaveDivider";
import { contact } from "../data/mockData";

export default function Contact() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background shapes */}
      <FloatingShape
        shape="circle"
        color="var(--color-lime)"
        size={288}
        className="-top-24 -right-20 opacity-20 blur-[90px]"
        rotateSpeed="14s"
      />
      <FloatingShape
        shape="pill"
        color="var(--color-pink)"
        size={320}
        className="top-1/3 -left-32 opacity-15 blur-[100px]"
        rotateSpeed="18s"
      />

      {/* Hero header */}
      <section className="relative z-10 px-6 pt-32 pb-14 text-center sm:pt-40 sm:pb-16">
        <div className="flex justify-center">
          <SplitTextReveal
            text={contact.pageHeading}
            as="h1"
            className="font-display text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-6xl md:text-7xl"
          />
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--color-text-muted)] sm:text-lg">
          {contact.pageSubheading}
        </p>
      </section>

      {/* Main Grid: Contact Info + Application Form */}
      <section className="relative z-10 px-6 pb-24 sm:pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <JoinForm />
          </div>
        </div>
      </section>

      {/* Wave transition into FAQ */}
      <WaveDivider fillBottom="rgba(211,197,246,0.04)" />

      {/* FAQ Section */}
      <section className="relative z-10 bg-[var(--color-surface)]/30 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}

