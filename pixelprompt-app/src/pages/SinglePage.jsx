import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { useActiveSection } from "../context/ActiveSectionContext";

// Home sections
import Hero from "../components/home/Hero";
import AwardsTicker from "../components/home/AwardsTicker";
import WhatWeDoTeaser from "../components/home/WhatWeDoTeaser";
import EventTreePlaceholder from "../components/home/EventTreePlaceholder";
import TeamGlobePlaceholder from "../components/home/TeamGlobePlaceholder";
import FinalCta from "../components/home/FinalCta";

// About sections
import { about } from "../data/mockData";
import SplitTextReveal from "../components/shared/SplitTextReveal";
import ScrollSlide from "../components/shared/ScrollSlide";
import Timeline from "../components/about/Timeline";
import VerticalsGrid from "../components/about/VerticalsGrid";
import FacultyAndMentors from "../components/about/FacultyAndMentors";
import WhyJoinList from "../components/about/WhyJoinList";
import chapterGroupPhoto from "../assets/images/about/chapter-group-photo.png";

// Events sections
import EventSpotlight from "../components/events/EventSpotlight";
import EventList from "../components/events/EventList";
import FootfallStats from "../components/events/FootfallStats";

// Team sections
import OfficerGrid from "../components/team/OfficerGrid";
import FacultyMentorCards from "../components/team/FacultyMentorCards";

// Achievements sections
import { achievements } from "../data/mockData";
import StatsStrip from "../components/home/StatsStrip";
import NewsFeed from "../components/achievements/NewsFeed";
import HallOfFame from "../components/achievements/HallOfFame";
import AwardBadges from "../components/achievements/AwardBadges";

// Contact sections
import ContactInfo from "../components/contact/ContactInfo";
import JoinForm from "../components/contact/JoinForm";
import FAQAccordion from "../components/contact/FAQAccordion";
import { contact } from "../data/mockData";

// Shared
import WaveDivider from "../components/shared/WaveDivider";

/* ─────────────────────────────────────────────────────────────────
   ZoomSection — each section zooms in from 0.88 scale as you scroll
   into it, creating a dramatic "approaching" effect. When you scroll
   past, it stays at scale 1. Combined with rounded corners for a
   card-like feel while zooming.
   ───────────────────────────────────────────────────────────────── */
function ZoomSection({ id, bg = "dark", children, className = "" }) {
  const sectionRef = useRef(null);
  const innerRef = useRef(null);
  const { registerSection } = useActiveSection();

  useEffect(() => {
    const el = sectionRef.current;
    registerSection(id, el);
    return () => registerSection(id, null);
  }, [id, registerSection]);

  // Zoom-in on scroll enter
  useEffect(() => {
    const inner = innerRef.current;
    if (!inner || id === "home") return; // Skip hero — it's already visible

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        {
          scale: 0.88,
          borderRadius: "40px",
          opacity: 0.6,
        },
        {
          scale: 1,
          borderRadius: "0px",
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: inner,
            start: "top 95%",
            end: "top 30%",
            scrub: 0.8,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [id]);

  const bgClasses = {
    dark: "bg-[var(--color-bg)]",
    lavender: "section-lavender",
    deep: "bg-[var(--color-bg-deep)]",
  };

  return (
    <section ref={sectionRef} id={id} className="relative">
      <div
        ref={innerRef}
        className={`relative overflow-hidden ${bgClasses[bg] || ""} ${className}`}
        style={{
          willChange: "transform, opacity, border-radius",
          transformOrigin: "center top",
        }}
      >
        {children}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SectionHeading with dramatic text reveal
   ───────────────────────────────────────────────────────────────── */
function SectionHeading({ title, subtitle, dark = true }) {
  return (
    <div className="px-6 pt-20 pb-8 text-center sm:pt-28 sm:pb-12">
      <SplitTextReveal
        text={title}
        as="h2"
        className={`font-hero text-3xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl ${
          dark ? "text-[var(--color-text)]" : "text-[#1a1145]"
        }`}
        y={100}
        duration={0.9}
        stagger={0.06}
      />
      {subtitle && (
        <ScrollSlide variant="slide-up" distance={50} delay={0.2} duration={0.8}>
          <p
            className={`mx-auto mt-6 max-w-xl text-base sm:text-lg ${
              dark ? "text-[var(--color-text-muted)]" : "text-[rgba(26,17,69,0.6)]"
            }`}
          >
            {subtitle}
          </p>
        </ScrollSlide>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   THE PAGE
   ───────────────────────────────────────────────────────────────── */
export default function SinglePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          SECTION 1: HOME — Dark Navy (no zoom — it's the first thing visible)
         ═══════════════════════════════════════════════════════ */}
      <ZoomSection id="home" bg="dark">
        <Hero />

        <ScrollSlide variant="slide-up" distance={60} duration={0.8}>
          <AwardsTicker />
        </ScrollSlide>

        <WhatWeDoTeaser />

        <ScrollSlide variant="zoom-in" duration={1}>
          <EventTreePlaceholder />
        </ScrollSlide>

        <ScrollSlide variant="zoom-in" duration={1} delay={0.2}>
          <TeamGlobePlaceholder />
        </ScrollSlide>
      </ZoomSection>

      {/* Wave: Dark → Lavender */}
      <WaveDivider variant="dark-to-light" />

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: ABOUT — Lavender (zooms in from card)
         ═══════════════════════════════════════════════════════ */}
      <ZoomSection id="about" bg="lavender">
        <SectionHeading
          title="About ACM MITS"
          subtitle="Chartered in 2019 — where students learn, build, and compete beyond the classroom."
          dark={false}
        />

        {/* Mission text slides in from left */}
        <ScrollSlide variant="slide-left" distance={100} duration={1}>
          <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 pb-8 text-base leading-relaxed text-[rgba(26,17,69,0.7)] sm:text-lg">
            {about.missionBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ScrollSlide>

        {/* Group photo zooms in */}
        <ScrollSlide variant="zoom-in" duration={1.2}>
          <div className="relative mx-auto mb-12 max-w-4xl overflow-hidden rounded-3xl px-6">
            <img
              src={chapterGroupPhoto}
              alt="ACM MITS chapter members at a workshop"
              className="h-56 w-full rounded-3xl object-cover sm:h-72"
              loading="lazy"
            />
          </div>
        </ScrollSlide>

        {/* Timeline slides in from right */}
        <ScrollSlide variant="slide-right" distance={100} duration={1}>
          <Timeline />
        </ScrollSlide>

        {/* Verticals fan in like cards */}
        <ScrollSlide variant="zoom-in" duration={1}>
          <VerticalsGrid />
        </ScrollSlide>

        <ScrollSlide variant="slide-left" distance={80} duration={0.9}>
          <FacultyAndMentors />
        </ScrollSlide>

        <ScrollSlide variant="slide-right" distance={80} duration={0.9}>
          <WhyJoinList />
        </ScrollSlide>
      </ZoomSection>

      {/* Wave: Lavender → Dark */}
      <WaveDivider variant="light-to-dark" />

      {/* ═══════════════════════════════════════════════════════
          SECTION 3: EVENTS — Dark Navy (zooms in)
         ═══════════════════════════════════════════════════════ */}
      <ZoomSection id="events" bg="dark">
        <SectionHeading
          title="Events & Activities"
          subtitle="Workshops, hackathons, talks — filter by what you're looking for."
        />

        {/* Spotlight rotates in with 3D perspective */}
        <ScrollSlide variant="scale" duration={1}>
          <EventSpotlight />
        </ScrollSlide>

        <ScrollSlide variant="curtain" duration={1.2}>
          <WaveDivider variant="dark-to-light" />
        </ScrollSlide>
        
        <div className="section-lavender pb-10">
          <ScrollSlide variant="slide-up" distance={80} duration={1}>
            <EventList />
          </ScrollSlide>
        </div>

        <ScrollSlide variant="curtain" duration={1.2}>
          <WaveDivider variant="light-to-dark" />
        </ScrollSlide>

        {/* Stats slide in from right */}
        <ScrollSlide variant="slide-right" distance={70}>
          <FootfallStats />
        </ScrollSlide>
      </ZoomSection>

      {/* Wave: Dark → Lavender */}
      <WaveDivider variant="dark-to-light" />

      {/* ═══════════════════════════════════════════════════════
          SECTION 4: TEAM — Lavender (zooms in)
         ═══════════════════════════════════════════════════════ */}
      <ZoomSection id="team" bg="lavender">
        <SectionHeading
          title="Leadership & Minds."
          subtitle="The passionate developers, designers, and faculty researchers powering the chapter day in and day out."
          dark={false}
        />

        {/* Team cards zoom in */}
        <ScrollSlide variant="zoom-in" duration={1}>
          <OfficerGrid />
        </ScrollSlide>

        {/* Faculty slides from left */}
        <ScrollSlide variant="slide-left" distance={100} duration={1}>
          <FacultyMentorCards />
        </ScrollSlide>
      </ZoomSection>

      {/* Wave: Lavender → Dark */}
      <WaveDivider variant="light-to-dark" />

      {/* ═══════════════════════════════════════════════════════
          SECTION 5: ACHIEVEMENTS — Dark Navy (zooms in)
         ═══════════════════════════════════════════════════════ */}
      <ZoomSection id="achievements" bg="dark">
        <SectionHeading
          title={achievements.pageHeading}
          subtitle={achievements.pageSubheading}
        />

        <ScrollSlide variant="slide-up" distance={80} duration={0.9}>
          <StatsStrip stats={achievements.stats} />
        </ScrollSlide>

        {/* News cards slide from right */}
        <ScrollSlide variant="slide-right" distance={120} duration={1}>
          <NewsFeed />
        </ScrollSlide>

        {/* Hall of fame rotates in */}
        <ScrollSlide variant="rotate-in" duration={1.1}>
          <HallOfFame />
        </ScrollSlide>

        {/* Awards zoom in */}
        <ScrollSlide variant="zoom-in" duration={1}>
          <AwardBadges />
        </ScrollSlide>
      </ZoomSection>

      {/* Transition wave to Contact */}
      <WaveDivider variant="dark-to-light" className="[&_rect]:!fill-[#1a1145] [&_path]:!fill-[#231560]" />

      {/* ═══════════════════════════════════════════════════════
          SECTION 6: CONTACT — Deep Purple (zooms in)
         ═══════════════════════════════════════════════════════ */}
      <ZoomSection id="contact" bg="deep">
        <SectionHeading
          title={contact.pageHeading}
          subtitle={contact.pageSubheading}
        />

        {/* Contact grid — left/right slide in */}
        <div className="px-6 pb-24 sm:pb-28">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
            <ScrollSlide variant="slide-left" distance={100} className="lg:col-span-5">
              <ContactInfo />
            </ScrollSlide>
            <ScrollSlide variant="slide-right" distance={100} delay={0.1} className="lg:col-span-7">
              <JoinForm />
            </ScrollSlide>
          </div>
        </div>

        {/* FAQ zooms in */}
        <ScrollSlide variant="zoom-in" duration={1}>
          <div className="bg-[var(--color-surface)]/30 px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-3xl">
              <FAQAccordion />
            </div>
          </div>
        </ScrollSlide>

        {/* Final CTA scales in dramatically */}
        <ScrollSlide variant="zoom-out" duration={1.2}>
          <FinalCta />
        </ScrollSlide>
      </ZoomSection>
    </>
  );
}
