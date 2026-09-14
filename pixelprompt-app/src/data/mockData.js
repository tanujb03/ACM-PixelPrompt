// Single source of truth for chapter copy + data.
// Sourced from ACM_MITS_Page_Content.md (the locked content doc) — this is
// real, final copy, not placeholder text. Do not paraphrase or invent
// beyond what that doc specifies; where it left a gap, it's flagged inline.

export const site = {
  name: "ACM MITS Student Chapter",
  shortName: "ACM MITS",
  tagline:
    "Officially affiliated with the Association for Computing Machinery (ACM) and ACM India Council",
  founded: "2019",
};

export const nav = {
  links: [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Events", to: "events" },
    { label: "Team", to: "team" },
    { label: "Achievements", to: "achievements" },
    { label: "Contact", to: "contact" },
  ],
  cta: { label: "Join Us", to: "contact" },
};

// Only real handles we have. No LinkedIn — don't reference it anywhere.
// Facebook page name is an unconfirmed placeholder per the content doc.
export const social = [
  { id: "instagram", label: "Instagram", href: "https://instagram.com/acm.mits" },
  { id: "facebook", label: "Facebook", href: "https://facebook.com/ACMMITSStudentChapter" },
];

export const footer = {
  columns: [
    {
      id: "chapter",
      title: "Chapter",
      links: [
        { label: "About", to: "about" },
        { label: "Events", to: "events" },
        { label: "Team", to: "team" },
        { label: "Achievements", to: "achievements" },
      ],
    },
    {
      id: "get-involved",
      title: "Get Involved",
      links: [
        { label: "Join Us", to: "contact" },
        { label: "Contact", to: "contact" },
        { label: "FAQ", to: "contact" },
      ],
    },
  ],
  backLink: { label: "Part of MITS Gwalior", href: "https://mits.ac.in" },
  creditLine: "Built with ❤️ by the ACM MITS Web Team",
  copyrightLine: `© 2019–${new Date().getFullYear()} ACM MITS Student Chapter. All rights reserved.`,
};

export const hero = {
  eyebrow: "ACM Student Chapter · MITS Gwalior",
  headline: "Where Computing Minds Come Together.",
  subhead:
    "The official ACM Student Chapter of Madhav Institute of Technology and Science, Gwalior — where students learn, build, and compete beyond the classroom.",
  primaryCta: { label: "Become a Member", to: "contact" },
  secondaryCta: { label: "See Upcoming Events", to: "events" },
};

// Marquee/ticker banner, repeated on loop.
export const awards = [
  { id: "award-1", text: "🏆 Recognized Among Emerging Chapters — MP Region, 2026" },
  { id: "award-2", text: "500+ Students Engaged Since 2019" },
  { id: "award-3", text: "45+ Events Hosted" },
  { id: "award-4", text: "3 National Hackathon Wins" },
  { id: "award-5", text: "6 Years of Building Together" },
];

// Home "What We Do" section — 4 cards.
export const whatWeDo = {
  heading: "What We Do",
  subheading: "Four things, done consistently, since 2019.",
  items: [
    {
      id: "workshops-bootcamps",
      title: "Workshops & Bootcamps",
      description:
        "Hands-on sessions in AI/ML, web development, cybersecurity, and competitive programming — built for beginners and sharpened for regulars.",
    },
    {
      id: "hackathons-competitions",
      title: "Hackathons & Coding Competitions",
      description:
        "From internal contests to inter-college events, we run the events that make late-night debugging feel like a sport.",
    },
    {
      id: "guest-talks",
      title: "Guest Talks & Industry Sessions",
      description:
        "Engineers, founders, and researchers, in the room, answering the questions a syllabus doesn't.",
    },
    {
      id: "career-mentorship",
      title: "Career Guidance & Mentorship",
      description:
        "Resume reviews, mock interviews, and seniors who've already been through placements, one batch ahead of you.",
    },
  ],
};

// Home 3D sections — Event Tree and Team Globe. Neither 3D model is in the
// repo yet; these render as labeled placeholder blocks until they land.
export const eventTree = {
  heading: "Our Events, Growing",
  subheading: "Each leaf on the tree is a live event — click one to open it.",
};

export const teamGlobe = {
  heading: "Meet the People Building This",
  subheading: "Spin the globe — every point is a member of ACM MITS.",
};

export const finalCta = {
  headline: "Ready to build something?",
  subhead: "Membership is open all year. No prior experience required — just curiosity.",
  cta: { label: "Join ACM MITS", to: "contact" },
};

export const about = {
  pageHeading: "About ACM MITS",
  missionHeadline: "Our Mission",
  missionBody: [
    "ACM MITS Student Chapter exists to give students at MITS Gwalior a hands-on path into computing — through workshops, competitions, mentorship, and a community that treats curiosity as a habit, not an event.",
    "Chartered in 2019 as the official ACM Student Chapter of MITS Gwalior, under the global umbrella of the Association for Computing Machinery.",
  ],
  timeline: [
    {
      id: "milestone-2019",
      dateLabel: "2019",
      title: "Chapter Chartered",
      description: "Chapter chartered under ACM India; 40 founding members.",
    },
    {
      id: "milestone-2021",
      dateLabel: "2021",
      title: "First Flagship Hackathon",
      description: "First flagship hackathon launched.",
    },
    {
      id: "milestone-2022",
      dateLabel: "2022",
      title: "SIG-AI and SIG-Sec Formed",
      description: "SIG-AI and SIG-Sec formed as dedicated verticals.",
    },
    {
      id: "milestone-2024",
      dateLabel: "2024",
      title: "500 Cumulative Members",
      description: "Crossed 500 cumulative members; hosted our first inter-college hackathon.",
    },
    {
      id: "milestone-2026",
      dateLabel: "2026",
      title: "Emerging Chapter Recognition",
      description: "Recognized among the top emerging ACM chapters in the MP region.",
    },
  ],
  sigsHeading: "Our Special Interest Groups",
  sigs: [
    {
      id: "sig-ai",
      name: "SIG-AI",
      description:
        "Artificial Intelligence & Machine Learning. Model-building, applied ML projects, and paper reading sessions.",
    },
    {
      id: "sig-sec",
      name: "SIG-Sec",
      description:
        "Cybersecurity & Ethical Hacking. CTFs, network security basics, and responsible-disclosure practice.",
    },
    {
      id: "sig-cp",
      name: "SIG-CP",
      description:
        "Competitive Programming. Weekly problem sets, contest upsolving, and interview-style DSA drills.",
    },
    {
      id: "sig-web",
      name: "SIG-Web",
      description:
        "Web & App Development. Full-stack projects, open-source contributions, and the team behind chapter tooling like this site.",
    },
  ],
  facultyAdvisorHeading: "Faculty Advisor",
  facultyAdvisor: {
    name: "Neha Bharadwaj",
    role: "Professor, Dept. of Computer Science & Engineering, Faculty Advisor, ACM MITS",
    // Mocked — no real photo exists yet. Consistent with the placeholder
    // convention used across the rest of the site for people cards.
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    quote:
      "ACM MITS gives students room to learn by building, not just by studying — that's exactly the gap it fills.",
  },
  whyJoinHeading: "Why Join ACM MITS",
  whyJoin: [
    { id: "why-1", text: "Hands-on workshops & bootcamps across AI, web dev, cybersecurity, and competitive programming" },
    { id: "why-2", text: "Hackathons & coding competitions with real prizes and recognition" },
    { id: "why-3", text: "Industry networking through guest sessions and mentor connects" },
    { id: "why-4", text: "Research opportunities and paper-writing guidance for interested members" },
    { id: "why-5", text: "Exclusive access to ACM Digital Library resources and publications" },
    { id: "why-6", text: "Mentorship & guidance from seniors and faculty advisors" },
    { id: "why-7", text: "Career support — resume reviews, interview prep, referral opportunities" },
    { id: "why-8", text: "A community that keeps you building even outside the classroom" },
  ],
  whyJoinClosingLine: "One membership. Four SIGs. A year of things worth showing up for.",
};

// Flagship event spotlight — explicitly mocked/invented by the content doc
// itself as an illustrative placeholder, not a real event. Kept as labeled
// fiction rather than cut, per the doc's own instruction.
export const flagshipEvent = {
  name: "AlgoRush",
  heading: "Our Flagship: AlgoRush",
  description:
    "AlgoRush is ACM MITS's annual competitive-programming showdown — three formats, one leaderboard, and a room that gets very quiet in the last ten minutes.",
  isIllustrative: true,
  formats: [
    { id: "blind-coding", name: "Blind Coding", description: "Write the solution without running it once." },
    { id: "relay-coding", name: "Relay Coding", description: "One team, one keyboard, passed down the line." },
    { id: "bug-hunt", name: "Bug Hunt", description: "Find and fix the break before the clock does." },
  ],
};

export const team = {
  facultyMentors: [
    {
      id: "faculty-1",
      name: "Neha Bharadwaj",
      role: "Professor, Dept. of Computer Science & Engineering",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      quote:
        "ACM MITS gives students room to learn by building, not just by studying — that's exactly the gap it fills.",
    },
  ],
};

export const achievements = {
  pageHeading: "Achievements",
  pageSubheading: "Numbers, and the moments behind them.",
  stats: [
    { id: "stat-members", end: 500, decimals: 0, prefix: "", suffix: "+", label: "Members" },
    { id: "stat-events", end: 45, decimals: 0, prefix: "", suffix: "+", label: "Events Hosted" },
    { id: "stat-years", end: 6, decimals: 0, prefix: "", suffix: "", label: "Years Active" },
    { id: "stat-participants", end: 3000, decimals: 0, prefix: "", suffix: "+", label: "Participants Reached" },
    { id: "stat-institutions", end: 12, decimals: 0, prefix: "", suffix: "", label: "Institutions Collaborated With" },
    { id: "stat-workshops-year", end: 8, decimals: 0, prefix: "", suffix: "", label: "Workshops Conducted This Year" },
  ],
  newsFeedHeading: "Recent Wins",
  newsFeed: [
    {
      id: "news-1",
      dateLabel: "September 2026",
      title: "Team CodeCrafters places 2nd at the internal round of Smart India Hackathon.",
    },
    {
      id: "news-2",
      dateLabel: "August 2026",
      title: "ACM MITS hosts an AI/ML Bootcamp with 120+ participants.",
    },
    {
      id: "news-3",
      dateLabel: "March 2026",
      title: "Our annual coding competition draws 300+ competitive programmers.",
    },
    {
      id: "news-4",
      dateLabel: "November 2025",
      title: "SIG-Sec runs the chapter's first campus-wide Capture The Flag (CTF).",
    },
    {
      id: "news-5",
      dateLabel: "February 2025",
      title: "Chapter partners with three industry mentors for a Career Guidance Series.",
    },
  ],
  hallOfFameHeading: "Hall of Fame",
  hallOfFameSubheading: "Founding members and contributors who built what we're standing on.",
  // Mocked — no real founding-member data exists yet, per the content doc.
  // Photos are placeholder avatars (pravatar), same convention used for
  // team officers/mentors elsewhere on the site.
  hallOfFame: [
    { id: "hof-1", name: "Aditya Rathore", role: "Founding President, 2019", photo: "https://i.pravatar.cc/300?img=33" },
    { id: "hof-2", name: "Meera Shenoy", role: "Founding Vice President, 2019", photo: "https://i.pravatar.cc/300?img=45" },
    { id: "hof-3", name: "Kabir Desai", role: "First Flagship-Event Organizer, 2021", photo: "https://i.pravatar.cc/300?img=52" },
  ],
  awards: [
    { id: "badge-1", title: "Emerging Chapter — MP Region, 2026" },
    { id: "badge-2", title: "3× National Hackathon Winner" },
    { id: "badge-3", title: "500+ Member Milestone, 2024" },
  ],
};

export const contact = {
  pageHeading: "Get In Touch",
  pageSubheading: "Questions, collaborations, or you're just ready to join — start here.",
  info: {
    // Placeholder per the content doc — swap for the real chapter email if different.
    email: "acm.mits@mitsgwalior.ac.in",
    location: "MITS Gwalior Campus, Gola Ka Mandir, Gwalior, Madhya Pradesh",
  },
  joinForm: {
    heading: "Join ACM MITS",
    sigOptions: ["SIG-AI", "SIG-Sec", "SIG-CP", "SIG-Web"],
    submitLabel: "Submit Application",
    confirmationMessage: "You're in the queue — a SIG lead will reach out within a few days.",
  },
  faqHeading: "Frequently Asked Questions",
  faq: [
    {
      id: "faq-1",
      q: "Do I need to already know how to code to join?",
      a: "No. ACM MITS welcomes complete beginners as well as experienced coders — our workshops are structured so anyone can start from zero.",
    },
    {
      id: "faq-2",
      q: "Is there a membership fee?",
      a: "A one-time fee of ₹150 for the academic year, collected during onboarding — it covers workshop materials and chapter merch.",
    },
    {
      id: "faq-3",
      q: "How often does the chapter host events?",
      a: "We run events almost every month — from hands-on workshops to hackathons, guest talks, and coding contests.",
    },
    {
      id: "faq-4",
      q: "Can first-year students join?",
      a: "Yes — in fact, most of our SIGs specifically welcome first- and second-year students to get started early.",
    },
    {
      id: "faq-5",
      q: "How do I join a specific SIG, like SIG-AI or SIG-Sec?",
      a: "Fill out the Join form above and select your SIG(s) of interest — the respective SIG lead will reach out with onboarding details.",
    },
  ],
};
