import ContactInfo from "../components/contact/ContactInfo";
import JoinForm from "../components/contact/JoinForm";
import FAQAccordion from "../components/contact/FAQAccordion";
import FloatingShape from "../components/shared/FloatingShape";
import SplitTextReveal from "../components/shared/SplitTextReveal";
import WaveDivider from "../components/shared/WaveDivider";

export default function Contact() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background shapes */}
      <FloatingShape
        type="sphere"
        color="var(--color-lime)"
        size="h-72 w-72"
        className="-top-24 -right-20 opacity-20"
        blur="blur-[90px]"
        speed={14}
      />
      <FloatingShape
        type="pill"
        color="var(--color-pink)"
        size="h-80 w-80"
        className="top-1/3 -left-32 opacity-15"
        blur="blur-[100px]"
        speed={18}
      />

      {/* Hero header */}
      <section className="relative z-10 px-6 pt-32 pb-14 text-center sm:pt-40 sm:pb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-[var(--color-lime)] uppercase backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[var(--color-lime)] animate-pulse" />
          Join The Chapter
        </div>
        <div className="mt-6 flex justify-center">
          <SplitTextReveal
            text="Get in Touch & Join."
            as="h1"
            className="font-display text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-6xl md:text-7xl"
          />
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--color-text-muted)] sm:text-lg">
          Whether you want to build cutting-edge software, lead workshops, or compete in global hackathons — your journey starts here.
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

