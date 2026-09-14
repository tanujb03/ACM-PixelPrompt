// Extracted directly from the name+role text visible in each photo under
// `images/coreteam/` and `images/seniorteam/`. Wired into the football-field
// lineup on the Team page (see FootballFieldLineup / PlayerCard).
//
// `photo` is a bare filename resolved against
// `src/assets/images/team/{core,senior}/` by FootballFieldLineup's
// import.meta.glob lookup — same pattern as `events.js` + EventTree3D.
//
// `formation` lists row sizes top-to-bottom (attacking third → nearest the
// viewer), mirroring the two AI-reference lineup images in
// `images/Football Field/`. Row order must match array order exactly.

export const coreTeam = [
  { id: "tanishq-mishra", name: "Tanishq Mishra", role: "Chair", field: "core", photo: "tanishq-mishra.png" },
  { id: "harshal-gandhi", name: "Harshal Gandhi", role: "Vice-Chair", field: "core", photo: "harshal-gandhi.png" },
  { id: "anshika-rajput", name: "Anshika Rajput", role: "Treasurer", field: "core", photo: "anshika-rajput.png" },
  { id: "akshay-singh", name: "Akshay Singh", role: "Secretary", field: "core", photo: "akshay-singh.png" },
  { id: "satwik-dubey", name: "Satwik Dubey", role: "Joint-Secretary", field: "core", photo: "satwik-dubey.png" },
  { id: "harshit-tiwari", name: "Harshit Tiwari", role: "Web Master", field: "core", photo: "harshit-tiwari.png" },
];

// 1-2-3: Chair alone up top, Vice-Chair/Treasurer in the middle, the three
// secretarial/web roles closest to the viewer.
export const coreFormation = [1, 2, 3];

export const seniorTeam = [
  { id: "rishi-dangi", name: "Rishi Dangi", role: "Operations Head", field: "senior", photo: "rishi-dangi.png" },
  // Photo text reads "OPERATIONS C0-HEAD" — almost certainly a typo for "Co-Head"; kept as printed, flagged here.
  { id: "achal-singhal", name: "Achal Singhal", role: "Operations Co-Head", roleAsPrinted: "Operations C0-Head", field: "senior", photo: "achal-singhal.png" },
  { id: "swastika-rajak", name: "Swastika Rajak", role: "Tech-Lead", field: "senior", photo: "swastika-rajak.png" },
  { id: "chitransh-chocksey", name: "Chitransh Chocksey", role: "Tech Co-Lead", field: "senior", photo: "chitransh-chocksey.png" },
  { id: "vivek-singh-sisodiya", name: "Vivek Singh Sisodiya", role: "Management Head", field: "senior", photo: "vivek-singh-sisodiya.png" },
  { id: "pragya", name: "Pragya", role: "Management Co-Head", field: "senior", photo: "pragya.png" },
  { id: "priyansh-namdeo", name: "Priyansh Namdeo", role: "Video Editing Head", field: "senior", photo: "priyansh-namdeo.png" },
  { id: "prabhanshu-katra", name: "Prabhanshu Katra", role: "Video Editing Co-Head", field: "senior", photo: "prabhanshu-katra.png" },
  { id: "shruti-gupta", name: "Shruti Gupta", role: "Graphics Co-Lead", field: "senior", photo: "shruti-gupta.png" },
  { id: "nitya-jain", name: "Nitya Jain", role: "Content Head", field: "senior", photo: "nitya-jain.png" },
  { id: "tanu-goyal", name: "Tanu Goyal", role: "Content Co-Head", field: "senior", photo: "tanu-goyal.png" },
  { id: "gaurav-pandey", name: "Gaurav Pandey", role: "Social Media & PR Head", field: "senior", photo: "gaurav-pandey.png" },
  { id: "mitali-gautam", name: "Mitali Gautam", role: "Social Media & PR Co-Head", field: "senior", photo: "mitali-gautam.png" },
];

// 1-4-3-5: Operations Head alone up top, then the four department heads,
// then the three video-editing/management co-heads, then the five-wide
// content/graphics/social row closest to the viewer.
export const seniorFormation = [1, 4, 3, 5];

// Note: no "Graphics Head" (Lead) photo exists in images/coreteam or
// images/seniorteam — only "Shruti Gupta — Graphics Co-Lead". Flagged, not
// invented: if a Graphics Lead exists, their photo isn't in the provided
// folders.

export const teamRoster = [...coreTeam, ...seniorTeam];
