# ACM MITS Student Chapter — Final Page Content

This is exact, final copy — not a description of what content should exist. Paste this
directly into components.

The **officer roster and events data are not templated in this doc** — both come from
image folders (`coreteam`, `seniorteam`, `events`) with names/roles visible in the images
themselves, which Claude Code should read directly rather than expect a written list here.

Several sections below also include **Build Notes** — these aren't copy, they're
implementation context for Claude Code, called out separately so they're never mistaken
for user-facing text. The 3D/video assets they describe (tree, globe, football-field
animation) are **not yet in the repo** — build the interaction logic against placeholder
geometry (a simple sphere, a basic branching mesh, a static line-up graphic) so swapping
in the real asset later doesn't require restructuring.

---

## Global — used on every page

**Chapter name:** ACM MITS Student Chapter
**Affiliation badge (footer + About):** "Officially affiliated with the Association for
Computing Machinery (ACM) and ACM India Council"
**Founded:** 2019

**Navbar links (in order):** Home · About · Events · Team · Achievements · Contact
**Navbar CTA button:** "Join Us"

**Footer columns:**
- **Chapter:** About · Events · Team · Achievements
- **Get Involved:** Join Us · Contact · FAQ
- **Connect:** Instagram · Facebook
- **Legal/back-link:** "Part of MITS Gwalior" → links to mits.ac.in

**Social handles (only real ones we have):**
- Instagram: `@acm.mits`
- Facebook: ACM MITS Student Chapter *(confirm exact page name/URL before linking — not
  yet given)*
- No LinkedIn — don't reference it anywhere.

**Footer credit line:** "Built with ❤️ by the ACM MITS Web Team"
**Footer copyright line:** "© 2019–2026 ACM MITS Student Chapter. All rights reserved."

---

## Home (`/`)

**Hero eyebrow (small label above headline):** "ACM Student Chapter · MITS Gwalior"

**Hero headline:** "Where Computing Minds Come Together."

**Hero subheadline:** "The official ACM Student Chapter of Madhav Institute of Technology
and Science, Gwalior — where students learn, build, and compete beyond the classroom."

**Hero primary CTA:** "Become a Member"
**Hero secondary CTA:** "See Upcoming Events"

**Awards ticker / marquee banner (scrolling strip right under hero — repeat this list on
loop):**
- 🏆 Recognized Among Emerging Chapters — MP Region, 2026
- 500+ Students Engaged Since 2019
- 45+ Events Hosted
- 3 National Hackathon Wins
- 6 Years of Building Together

**"What We Do" section — heading:** "What We Do"
**"What We Do" section — subheading:** "Four things, done consistently, since 2019."

**What We Do bullets (4 cards):**
1. **Workshops & Bootcamps** — Hands-on sessions in AI/ML, web development, cybersecurity,
   and competitive programming — built for beginners and sharpened for regulars.
2. **Hackathons & Coding Competitions** — From internal contests to inter-college events,
   we run the events that make late-night debugging feel like a sport.
3. **Guest Talks & Industry Sessions** — Engineers, founders, and researchers, in the room,
   answering the questions a syllabus doesn't.
4. **Career Guidance & Mentorship** — Resume reviews, mock interviews, and seniors who've
   already been through placements, one batch ahead of you.

### 3D Section — Event Tree

**Section heading:** "Our Events, Growing"
**Section subheading:** "Each leaf on the tree is a live event — click one to open it."

**Build Notes (not copy — implementation context):**
- 3D tree model, not yet added to repo — build against placeholder branching geometry
  until the real asset lands.
- Leaf nodes = individual events. Each leaf is clickable and routes to that event's page
  on the Events section (mirrors "leaf nodes act as events, clicking opens the specific
  event page").
- Hover state on a leaf: show the event name as a label/tooltip before click.
- Data source: the same event list + images Tanuj is handing to Claude Code directly —
  wire leaf count/labels/links to that data structure once it's in the repo. Don't invent
  placeholder event names here; leave the tree empty/generic-labeled until real data
  arrives.

### 3D Section — Team Globe

**Section heading:** "Meet the People Building This"
**Section subheading:** "Spin the globe — every point is a member of ACM MITS."

**Build Notes (not copy — implementation context):**
- 3D globe model, not yet added to repo — build against a placeholder sphere until the
  real asset lands.
- Each node on the globe surface = one team member's photo.
- Clicking a node **only zooms into that member's photo** — no navigation, no link to the
  Team page or anywhere else. This is intentionally different from the tree's
  click-through behavior.
- Full names, designations, and Core/Senior grouping live on the Team page, not here.

**Join CTA band (bottom of page) — heading:** "Ready to build something?"
**Join CTA band — subheading:** "Membership is open all year. No prior experience
required — just curiosity."
**Join CTA band — button:** "Join ACM MITS"

---

## About (`/about`)

**Page heading:** "About ACM MITS"

**Mission statement:** "ACM MITS Student Chapter exists to give students at MITS Gwalior
a hands-on path into computing — through workshops, competitions, mentorship, and a
community that treats curiosity as a habit, not an event."

**History / founding line:** "Chartered in 2019 as the official ACM Student Chapter of
MITS Gwalior, under the global umbrella of the Association for Computing Machinery."

**Our Journey — milestone timeline:**
- **2019** — Chapter chartered under ACM India; 40 founding members.
- **2021** — First flagship hackathon launched.
- **2022** — SIG-AI and SIG-Sec formed as dedicated verticals.
- **2024** — Crossed 500 cumulative members; hosted our first inter-college hackathon.
- **2026** — Recognized among the top emerging ACM chapters in the MP region.

**Named verticals (SIGs) — section heading:** "Our Special Interest Groups"
**SIG cards:**
1. **SIG-AI** — Artificial Intelligence & Machine Learning. Model-building, applied ML
   projects, and paper reading sessions.
2. **SIG-Sec** — Cybersecurity & Ethical Hacking. CTFs, network security basics, and
   responsible-disclosure practice.
3. **SIG-CP** — Competitive Programming. Weekly problem sets, contest upsolving, and
   interview-style DSA drills.
4. **SIG-Web** — Web & App Development. Full-stack projects, open-source contributions,
   and the team behind chapter tooling like this site.

**Faculty Advisor section — heading:** "Faculty Advisor"
**Faculty Advisor content (mocked — no real data exists yet):**
> "ACM MITS gives students room to learn by building, not just by studying — that's
> exactly the gap it fills."
> — **Dr. Ramesh Iyer**, Professor, Dept. of Computer Science & Engineering, Faculty
> Advisor, ACM MITS

**Why Join — section heading:** "Why Join ACM MITS"
**Why Join list:**
- Hands-on workshops & bootcamps across AI, web dev, cybersecurity, and competitive
  programming
- Hackathons & coding competitions with real prizes and recognition
- Industry networking through guest sessions and mentor connects
- Research opportunities and paper-writing guidance for interested members
- Exclusive access to ACM Digital Library resources and publications
- Mentorship & guidance from seniors and faculty advisors
- Career support — resume reviews, interview prep, referral opportunities
- A community that keeps you building even outside the classroom

**Why Join — closing line:** "One membership. Four SIGs. A year of things worth showing
up for."

---

## Events (`/events`)

**Page heading:** "Events & Activities"
**Page subheading:** "Workshops, hackathons, talks — filter by what you're looking for."

**Filter tabs:** All · Workshop · Hackathon · Talk

**Build Notes (not copy — implementation context):**
- Layout: use the reference site's **Cases page style** (crency.agency/cases — the
  case-study carousel/card presentation) for the events list + filter specifically.
  Claude Code should visit that page and adapt its card/carousel pattern, not the rest of
  the site's layout, for this section.
- **Actual events + images are being provided directly to Claude Code by Tanuj**,
  separately from this document. Don't invent placeholder events here — the reference
  schema below is just for whoever loads that data in, so the shape is agreed on ahead of
  time.

**Reference schema for each event (for whoever wires up the real data):**
```
- Name: [Event Name]
- Date: [DD Month YYYY]
- Type: [Workshop / Hackathon / Talk]
- One-line description: [what it is, in one sentence]
- Footfall (if past event): [number] attendees
- Image: [filename or asset reference]
```

**Flagship event spotlight — heading:** "Our Flagship: AlgoRush"
**Flagship event description (mocked/invented — not a real event; keep as an
illustrative placeholder unless you'd rather cut this section entirely once real events
are in):** "AlgoRush is ACM MITS's annual competitive-programming showdown — three
formats, one leaderboard, and a room that gets very quiet in the last ten minutes."
**AlgoRush formats:**
- **Blind Coding** — Write the solution without running it once.
- **Relay Coding** — One team, one keyboard, passed down the line.
- **Bug Hunt** — Find and fix the break before the clock does.

**Footfall stats strip (Events page, near the list):**
- 400–500+ average turnout at flagship hackathons
- 80–150 average turnout at workshops
- 12+ institutions represented across past events

---

## Team (`/team`)

**Page heading:** "The People Behind ACM MITS"
**Page subheading:** "Two squads, one chapter."

**Build Notes (not copy — implementation context):**
- Layout: two separate vertical "football field" sections stacked on the page — one for
  **Core Team**, one for **Senior Team**.
- Video/animation asset not yet in repo — build against a static placeholder line-up
  graphic until the real football-field video is added.
- Member photos are already pre-cropped into icon/badge shape (provided separately).
  They should animate onto the field the way an EPL starting-lineup graphic reveals
  players.
- Click behavior: clicking a member's icon **zooms into their photo and overlays their
  name + designation** — no other navigation, no linking elsewhere.
- Each member needs: photo (icon-shaped), name, designation, and a Core/Senior tag to
  determine which field they render on.

**Roster source (not a template to fill in — a note on where the data actually is):**
Team photos live in two image folders already organized by field: `images/coreteam/` and
`images/seniorteam/` (a third, `images/events/`, holds event photos for the Events page).
Each member's name and role are visible on/in their image — Claude Code should read the
images in each folder directly to derive the roster (name, role, which field they belong
to) rather than expect a separate names/roles list in this doc. No manual roster template
needed here.

**Mentor cards — section heading:** "Faculty Mentors"
**Mentor card content (mocked — no real data exists yet):**
> "ACM MITS gives students room to learn by building, not just by studying — that's
> exactly the gap it fills."
> — **Dr. Ramesh Iyer**, Professor, Dept. of Computer Science & Engineering

---

## Achievements (`/achievements`)

**Page heading:** "Achievements"
**Page subheading:** "Numbers, and the moments behind them."

**Build Notes (not copy — implementation context):**
- Layout: open. Claude Code can pick whatever pattern from the reference site best fits
  a stats + timeline + recognition page — no specific page style mandated here.

**Multi-metric stat counters (animate on scroll):**
- 500+ Members
- 45+ Events Hosted
- 6 Years Active
- 3,000+ Participants Reached
- 12 Institutions Collaborated With
- 8 Workshops Conducted This Year

**Chronological achievement feed — heading:** "Recent Wins"
**Feed entries (dated cards, newest first):**
- **September 2026** — Team CodeCrafters places 2nd at the internal round of Smart India
  Hackathon.
- **August 2026** — ACM MITS hosts an AI/ML Bootcamp with 120+ participants.
- **March 2026** — Our annual coding competition draws 300+ competitive programmers.
- **November 2025** — SIG-Sec runs the chapter's first campus-wide Capture The Flag (CTF).
- **February 2025** — Chapter partners with three industry mentors for a Career Guidance
  Series.

**Hall of Fame — heading:** "Hall of Fame"
**Hall of Fame subheading:** "Founding members and contributors who built what we're
standing on."
**Hall of Fame entries (mocked — no real founding-member data exists yet; replace if
you get real names later):**
- **Aditya Rathore** — Founding President, 2019
- **Meera Shenoy** — Founding Vice President, 2019
- **Kabir Desai** — First Flagship-Event Organizer, 2021

**Awards/recognition badges:**
- "Emerging Chapter — MP Region, 2026"
- "3× National Hackathon Winner"
- "500+ Member Milestone, 2024"

---

## Contact (`/contact`)

**Page heading:** "Get In Touch"
**Page subheading:** "Questions, collaborations, or you're just ready to join — start
here."

**Build Notes (not copy — implementation context):**
- Layout: open. Claude Code can pick whatever pattern from the reference site best fits a
  contact + join-form + FAQ page — no specific page style mandated here.

**Contact info:**
- Email: acm.mits@mitsgwalior.ac.in *(placeholder — swap for the real chapter email if
  different)*
- Location: MITS Gwalior Campus, Gola Ka Mandir, Gwalior, Madhya Pradesh
- Socials: Instagram `@acm.mits` · Facebook (ACM MITS Student Chapter — confirm exact
  page link)

**Join form — heading:** "Join ACM MITS"
**Join form fields:** Name · Email · Year of Study · Branch · SIG(s) of interest
(checkboxes: SIG-AI / SIG-Sec / SIG-CP / SIG-Web) · Why do you want to join? (short text)
**Join form submit button:** "Submit Application"
**Join form confirmation message:** "You're in the queue — a SIG lead will reach out
within a few days."

**FAQ — heading:** "Frequently Asked Questions"
**FAQ entries:**

**Q: Do I need to already know how to code to join?**
A: No. ACM MITS welcomes complete beginners as well as experienced coders — our
workshops are structured so anyone can start from zero.

**Q: Is there a membership fee?**
A: A one-time fee of ₹150 for the academic year, collected during onboarding — it covers
workshop materials and chapter merch. *(mocked — replace with the real figure if you have
one)*

**Q: How often does the chapter host events?**
A: We run events almost every month — from hands-on workshops to hackathons, guest
talks, and coding contests.

**Q: Can first-year students join?**
A: Yes — in fact, most of our SIGs specifically welcome first- and second-year students
to get started early.

**Q: How do I join a specific SIG, like SIG-AI or SIG-Sec?**
A: Fill out the Join form above and select your SIG(s) of interest — the respective SIG
lead will reach out with onboarding details.

---

## Summary of what still needs your input

1. **Facebook page name/URL** — currently a guessed placeholder ("ACM MITS Student
   Chapter"), confirm the real one.
2. **Events + images** — you're handing these to Claude Code directly, so nothing needed
   from you here; just make sure whoever wires them in follows the reference schema above.
3. **3D/video assets** (tree, globe, football-field animation) — not yet in the repo.
   Claude Code should build the interaction logic now against placeholders and swap in
   the real assets when you add them.

Officer roster and event data are no longer content-doc items — both are handled by
Claude Code reading the `coreteam` / `seniorteam` / `events` image folders and whatever
event data you provide directly.

Everything else — faculty advisor, mentor quote, Hall of Fame, membership fee, mission
statement, journey timeline, stats, FAQ, all headline/CTA copy — is mocked and final,
hand it to Claude Code as-is.
