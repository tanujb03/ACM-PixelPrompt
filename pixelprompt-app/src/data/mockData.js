// Single source of truth for all placeholder copy + fake data.
// Swap real chapter info in here once Parth's content lands — every
// page reads from this file, nothing is hardcoded inline per page.

export const site = {
  name: "ACM Nova Chapter",
  shortName: "ACM Nova",
  tagline: "The student chapter of the ACM, building the next generation of computing leaders.",
  founded: "2018-08-15",
};

export const nav = {
  links: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Events", to: "/events" },
    { label: "Team", to: "/team" },
    { label: "Achievements", to: "/achievements" },
    { label: "Contact", to: "/contact" },
  ],
  cta: { label: "Join", to: "/contact" },
};

export const social = [
  { id: "instagram", label: "Instagram", href: "https://instagram.com/acmnovachapter" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/company/acm-nova-chapter" },
  { id: "github", label: "GitHub", href: "https://github.com/acm-nova-chapter" },
  { id: "discord", label: "Discord", href: "https://discord.gg/acmnova" },
];

export const hero = {
  eyebrow: "ACM Student Chapter",
  headline: "Where Curious Minds Build the Future of Computing",
  subhead:
    "We're a community of builders, researchers, and problem-solvers running workshops, hackathons, and research circles for students who want to go further than the syllabus.",
  primaryCta: { label: "Join Us", to: "/contact" },
  secondaryCta: { label: "See Upcoming Events", to: "/events" },
  stat: {
    end: 450,
    decimals: 0,
    prefix: "",
    suffix: "+",
    label: "Active Members",
  },
};

export const awards = [
  { id: "award-1", text: "“Best Student Chapter” — ACM India Regional Awards, 2025" },
  { id: "award-2", text: "Champions, ACM-ICPC Regional Onsite Round, 2024" },
  { id: "award-3", text: "Featured Chapter, ACM CHI Student Volunteer Program, 2025" },
  { id: "award-4", text: "1,000+ students trained across 6 years of flagship workshops" },
];

// Verticals / SIGs — shared between the Home "What We Do" teaser and the
// full grid on /about.
export const verticals = [
  {
    id: "acm-w",
    name: "ACM-W",
    description: "Championing women in computing through mentorship circles, panels, and outreach programs.",
  },
  {
    id: "sig-ai",
    name: "SIG-AI",
    description: "Machine learning and applied AI projects, reading groups, and Kaggle study jams.",
  },
  {
    id: "cp-cell",
    name: "Competitive Programming Cell",
    description: "Weekly problem-solving sessions and ICPC/Codeforces contest prep for all skill levels.",
  },
  {
    id: "sig-web-cloud",
    name: "SIG-Web & Cloud",
    description: "Full-stack, cloud-native, and DevOps projects for students who want to ship real products.",
  },
];

export const finalCta = {
  headline: "Ready to Build With Us?",
  subhead: "Membership is free and open to every student, regardless of major or experience level.",
  cta: { label: "Join the Chapter", to: "/contact" },
};

export const about = {
  missionHeadline: "Our Mission",
  missionBody: [
    "ACM Nova Chapter exists to give students a hands-on path into computing that goes beyond the classroom — through workshops, hackathons, research circles, and a community that pushes each other to build.",
    "Since our founding, we've grown from a handful of students meeting in a lab after hours into one of the most active student chapters in our region, partnering with faculty, alumni, and industry mentors along the way.",
  ],
  timeline: [
    {
      id: "milestone-1",
      date: "2018-08-15",
      title: "Chapter Founded",
      description: "A group of 12 students formally chartered the chapter with the ACM and held their first meeting.",
    },
    {
      id: "milestone-2",
      date: "2020-11-02",
      title: "First Flagship Hackathon",
      description: "Launched CodeIgnite, our signature 24-hour hackathon, with just under 150 participants.",
    },
    {
      id: "milestone-3",
      date: "2022-03-19",
      title: "ACM India Recognition",
      description: "Recognized as a Distinguished Student Chapter by ACM India for outreach and technical programming.",
    },
    {
      id: "milestone-4",
      date: "2024-09-05",
      title: "500th Member Milestone",
      description: "Crossed 500 cumulative members and expanded into four active special interest groups.",
    },
    {
      id: "milestone-5",
      date: "2025-10-11",
      title: "Best Student Chapter Award",
      description: "Won “Best Student Chapter” at the ACM India Regional Awards.",
    },
  ],
  facultyAdvisor: {
    name: "Dr. Meera Kulkarni",
    role: "Faculty Advisor, Dept. of Computer Science",
    photo: "https://i.pravatar.cc/300?img=47",
    quote:
      "This chapter runs on student initiative — my job is mostly to get out of the way and open doors when they need one opened.",
  },
  mentorQuotes: [
    {
      id: "mentor-1",
      name: "Arjun Rao",
      role: "Alumnus, Class of 2021 — SDE II at a cloud infra company",
      photo: "https://i.pravatar.cc/300?img=12",
      quote: "Everything I know about shipping real software, I learned running SIG-Web sessions here on weeknights.",
    },
    {
      id: "mentor-2",
      name: "Priya Deshmukh",
      role: "Alumna, Class of 2022 — ML Research Engineer",
      photo: "https://i.pravatar.cc/300?img=32",
      quote: "SIG-AI's reading group is what got me into research in the first place. I still come back to guest-mentor every semester.",
    },
  ],
  whyJoin: [
    { id: "why-1", title: "Hands-on Workshops", description: "Weekly sessions on tools and topics the classroom doesn't cover — from Docker to distributed systems." },
    { id: "why-2", title: "Hackathons", description: "Team up for our flagship CodeIgnite hackathon plus regular smaller build sprints all year." },
    { id: "why-3", title: "Industry Networking", description: "Direct access to alumni and partner-company engineers through talks, panels, and mixers." },
    { id: "why-4", title: "Research Opportunities", description: "Get paired with faculty-led research projects through SIG-AI and our research circle." },
    { id: "why-5", title: "Exclusive Events", description: "Member-only socials, speaker dinners, and early registration for flagship events." },
    { id: "why-6", title: "Mentorship", description: "Get matched with a senior member or alumnus for 1:1 guidance on projects and career paths." },
    { id: "why-7", title: "Resources & Publications", description: "Access our internal wiki, past contest archives, and chapter newsletter." },
    { id: "why-8", title: "Career Support", description: "Resume reviews, mock interviews, and referrals into our alumni network." },
  ],
};

export const events = {
  flagship: {
    name: "CodeIgnite",
    tagline: "Our flagship 24-hour hackathon",
    description:
      "CodeIgnite is our signature annual hackathon — 24 hours, open themes, and a judging panel of alumni and industry engineers. Since 2020 it's grown from 150 to over 800 participants across three campuses.",
    date: "2027-02-14",
    location: "Main Auditorium & Innovation Lab",
    image: "https://picsum.photos/seed/codeignite/1200/675",
  },
  upcoming: [
    {
      id: "event-1",
      name: "Intro to Docker & Containers",
      type: "workshop",
      date: "2026-09-20",
      time: "5:00 PM",
      location: "Lab 204",
      description: "A hands-on primer on containerizing your first application.",
    },
    {
      id: "event-2",
      name: "CodeIgnite 2027",
      type: "hackathon",
      date: "2027-02-14",
      time: "9:00 AM",
      location: "Main Auditorium",
      description: "Our flagship 24-hour hackathon returns — registrations open soon.",
    },
    {
      id: "event-3",
      name: "Careers in Distributed Systems",
      type: "talk",
      date: "2026-10-02",
      time: "6:00 PM",
      location: "Seminar Hall B",
      description: "An alum-led talk on breaking into infra and platform engineering roles.",
    },
    {
      id: "event-4",
      name: "Git & GitHub Deep Dive",
      type: "workshop",
      date: "2026-10-10",
      time: "5:30 PM",
      location: "Lab 204",
      description: "Branching strategies, rebasing without fear, and real PR workflows.",
    },
    {
      id: "event-5",
      name: "24-Hour Build Sprint: Campus Tools",
      type: "hackathon",
      date: "2026-11-08",
      time: "10:00 AM",
      location: "Innovation Lab",
      description: "A smaller-scale hackathon focused on tools that solve real campus problems.",
    },
    {
      id: "event-6",
      name: "Life After ICPC: A Panel",
      type: "talk",
      date: "2026-11-21",
      time: "6:00 PM",
      location: "Seminar Hall A",
      description: "Former ICPC regionalists talk about what came next in their careers.",
    },
  ],
  past: [
    { id: "past-1", name: "CodeIgnite 2026", image: "https://picsum.photos/seed/past1/600/400" },
    { id: "past-2", name: "SIG-AI Reading Circle Finale", image: "https://picsum.photos/seed/past2/600/400" },
    { id: "past-3", name: "ACM-W Mentorship Mixer", image: "https://picsum.photos/seed/past3/600/400" },
    { id: "past-4", name: "Cloud & DevOps Bootcamp", image: "https://picsum.photos/seed/past4/600/400" },
    { id: "past-5", name: "Competitive Programming Bootcamp", image: "https://picsum.photos/seed/past5/600/400" },
    { id: "past-6", name: "Alumni Homecoming Talk Series", image: "https://picsum.photos/seed/past6/600/400" },
  ],
  footfall: [
    { id: "footfall-workshop", type: "workshop", label: "Workshops", count: 1200 },
    { id: "footfall-hackathon", type: "hackathon", label: "Hackathons", count: 3500 },
    { id: "footfall-talk", type: "talk", label: "Talks", count: 900 },
  ],
};

export const team = {
  officers: [
    { id: "officer-1", name: "Ananya Iyer", role: "President", photo: "https://i.pravatar.cc/300?img=5" },
    { id: "officer-2", name: "Rohan Verma", role: "Vice President", photo: "https://i.pravatar.cc/300?img=13" },
    { id: "officer-3", name: "Sana Sheikh", role: "Secretary", photo: "https://i.pravatar.cc/300?img=25" },
    { id: "officer-4", name: "Karthik Nair", role: "Treasurer", photo: "https://i.pravatar.cc/300?img=8" },
    { id: "officer-5", name: "Divya Menon", role: "Technical Head", photo: "https://i.pravatar.cc/300?img=44" },
    { id: "officer-6", name: "Ishaan Gupta", role: "Design Head", photo: "https://i.pravatar.cc/300?img=15" },
    { id: "officer-7", name: "Fatima Ansari", role: "Membership Chair", photo: "https://i.pravatar.cc/300?img=29" },
    { id: "officer-8", name: "Nikhil Joshi", role: "Webmaster", photo: "https://i.pravatar.cc/300?img=51" },
    { id: "officer-9", name: "Riya Kapoor", role: "PR Chair", photo: "https://i.pravatar.cc/300?img=36" },
    { id: "officer-10", name: "Aditya Pillai", role: "Events Coordinator", photo: "https://i.pravatar.cc/300?img=60" },
    { id: "officer-11", name: "Meher Chawla", role: "Outreach Coordinator", photo: "https://i.pravatar.cc/300?img=41" },
  ],
  facultyMentors: [
    {
      id: "faculty-1",
      name: "Dr. Meera Kulkarni",
      role: "Faculty Advisor, Dept. of Computer Science",
      photo: "https://i.pravatar.cc/300?img=47",
      bio: "Oversees chapter operations and connects student leads with faculty research opportunities.",
    },
    {
      id: "faculty-2",
      name: "Dr. Sameer Bhat",
      role: "Co-Advisor, Dept. of Information Technology",
      photo: "https://i.pravatar.cc/300?img=53",
      bio: "Supports SIG-AI's research circle and judges the CodeIgnite finals panel every year.",
    },
  ],
};

export const achievements = {
  stats: [
    { id: "stat-events", end: 120, decimals: 0, prefix: "", suffix: "+", label: "Events Hosted" },
    { id: "stat-members", end: 500, decimals: 0, prefix: "", suffix: "+", label: "Members" },
    { id: "stat-participants", end: 8500, decimals: 0, prefix: "", suffix: "+", label: "Participants Reached" },
    { id: "stat-institutions", end: 25, decimals: 0, prefix: "", suffix: "+", label: "Institutions Reached" },
    { id: "stat-years", end: 8, decimals: 0, prefix: "", suffix: "", label: "Years Active" },
  ],
  newsFeed: [
    {
      id: "news-1",
      date: "2025-10-11",
      title: "ACM Nova wins “Best Student Chapter”",
      description: "Recognized at the ACM India Regional Awards for outreach and technical programming.",
      image: "https://picsum.photos/seed/news1/600/400",
    },
    {
      id: "news-2",
      date: "2025-06-03",
      title: "CodeIgnite 2025 draws 800+ participants",
      description: "Our largest flagship hackathon yet, spanning three partner campuses.",
      image: "https://picsum.photos/seed/news2/600/400",
    },
    {
      id: "news-3",
      date: "2025-02-18",
      title: "SIG-AI publishes first research pre-print",
      description: "A student-led research circle project was accepted to a regional AI workshop.",
      image: "https://picsum.photos/seed/news3/600/400",
    },
    {
      id: "news-4",
      date: "2024-11-27",
      title: "Chapter crosses 500 cumulative members",
      description: "Four active special interest groups now run alongside the core chapter.",
      image: "https://picsum.photos/seed/news4/600/400",
    },
    {
      id: "news-5",
      date: "2024-05-09",
      title: "ACM-W mentorship circle launches",
      description: "A new peer-mentorship track pairing first-years with senior women in computing.",
      image: "https://picsum.photos/seed/news5/600/400",
    },
    {
      id: "news-6",
      date: "2023-09-22",
      title: "Chapter team advances at ACM-ICPC Regionals",
      description: "Two chapter teams advanced to the regional onsite round for the first time.",
      image: "https://picsum.photos/seed/news6/600/400",
    },
  ],
  hallOfFame: [
    { id: "hof-1", name: "Dr. Meera Kulkarni", role: "Faculty Advisor since 2018", photo: "https://i.pravatar.cc/300?img=47", contribution: "Guided the chapter from founding to Distinguished Student Chapter status." },
    { id: "hof-2", name: "Arjun Rao", role: "Founding Member, Class of 2021", photo: "https://i.pravatar.cc/300?img=12", contribution: "Built the chapter's first website and SIG-Web curriculum." },
    { id: "hof-3", name: "Priya Deshmukh", role: "Alumna, Class of 2022", photo: "https://i.pravatar.cc/300?img=32", contribution: "Founded SIG-AI's reading circle, now in its 5th year." },
    { id: "hof-4", name: "Vikram Singh", role: "Alumnus, Class of 2020", photo: "https://i.pravatar.cc/300?img=18", contribution: "Led the chapter's first CodeIgnite hackathon in 2020." },
  ],
  awards: [
    { id: "badge-1", title: "Best Student Chapter", year: "2025", issuer: "ACM India Regional Awards" },
    { id: "badge-2", title: "Distinguished Student Chapter", year: "2022", issuer: "ACM India" },
    { id: "badge-3", title: "Featured Chapter", year: "2025", issuer: "ACM CHI Student Volunteer Program" },
  ],
};

export const contact = {
  info: {
    email: "hello@acmnovachapter.org",
    phone: "+91 98765 43210",
    address: "Innovation Lab, Block C, Main Campus",
    meetingTime: "Every Thursday, 5:30 PM — Innovation Lab",
  },
  faq: [
    { id: "faq-1", q: "Do I need to know how to code already?", a: "No — we welcome complete beginners. Our workshops start from fundamentals, and mentors are around to help." },
    { id: "faq-2", q: "Is there a membership fee?", a: "Membership is completely free for all students." },
    { id: "faq-3", q: "Can I join more than one SIG?", a: "Yes, members are welcome to participate in as many special interest groups as they like." },
    { id: "faq-4", q: "Do I have to be a Computer Science major to join?", a: "Not at all — we have members from every department. Curiosity is the only requirement." },
    { id: "faq-5", q: "How do I sign up for events?", a: "Fill out the form below or watch our Discord and Instagram for registration links closer to each event." },
  ],
};
