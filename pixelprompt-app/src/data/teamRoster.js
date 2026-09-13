// Prep data only — NOT wired into any UI yet.
//
// Extracted directly from the name+role text visible in each photo under
// `images/coreteam/` and `images/seniorteam/`. This exists so the roster is
// ready to plug into the "football field" lineup component once that's
// built (per the content doc's Team page build notes) — do not build Team
// page display UI against this yet; the current /team page stays untouched
// until the football-field mechanism exists.
//
// `photo` paths point at the original screenshot files in
// `images/coreteam/` / `images/seniorteam/` (pre-cropped icon-shaped photos
// per the content doc) — re-point these once the football-field component
// defines its own asset pipeline.

export const coreTeam = [
  { id: "tanishq-mishra", name: "Tanishq Mishra", role: "Chair", field: "core", photo: "images/coreteam/Screenshot 2026-09-13 202016.png" },
  { id: "harshal-gandhi", name: "Harshal Gandhi", role: "Vice-Chair", field: "core", photo: "images/coreteam/Screenshot 2026-09-13 202023.png" },
  { id: "anshika-rajput", name: "Anshika Rajput", role: "Treasurer", field: "core", photo: "images/coreteam/Screenshot 2026-09-13 202035.png" },
  { id: "akshay-singh", name: "Akshay Singh", role: "Secretary", field: "core", photo: "images/coreteam/Screenshot 2026-09-13 202041.png" },
  { id: "satwik-dubey", name: "Satwik Dubey", role: "Joint-Secretary", field: "core", photo: "images/coreteam/Screenshot 2026-09-13 202046.png" },
  { id: "harshit-tiwari", name: "Harshit Tiwari", role: "Web Master", field: "core", photo: "images/coreteam/Screenshot 2026-09-13 202052.png" },
];

export const seniorTeam = [
  { id: "rishi-dangi", name: "Rishi Dangi", role: "Operations Head", field: "senior", photo: "images/seniorteam/Screenshot 2026-09-13 202204.png" },
  // Photo text reads "OPERATIONS C0-HEAD" — almost certainly a typo for "Co-Head"; kept as printed, flagged here.
  { id: "achal-singhal", name: "Achal Singhal", role: "Operations Co-Head", roleAsPrinted: "Operations C0-Head", field: "senior", photo: "images/seniorteam/Screenshot 2026-09-13 202210.png" },
  { id: "swastika-rajak", name: "Swastika Rajak", role: "Tech-Lead", field: "senior", photo: "images/seniorteam/Screenshot 2026-09-13 202216.png" },
  { id: "chitransh-chocksey", name: "Chitransh Chocksey", role: "Tech Co-Lead", field: "senior", photo: "images/seniorteam/Screenshot 2026-09-13 202223.png" },
  { id: "vivek-singh-sisodiya", name: "Vivek Singh Sisodiya", role: "Management Head", field: "senior", photo: "images/seniorteam/Screenshot 2026-09-13 202229.png" },
  { id: "pragya", name: "Pragya", role: "Management Co-Head", field: "senior", photo: "images/seniorteam/Screenshot 2026-09-13 202235.png" },
  { id: "priyansh-namdeo", name: "Priyansh Namdeo", role: "Video Editing Head", field: "senior", photo: "images/seniorteam/Screenshot 2026-09-13 202240.png" },
  { id: "prabhanshu-katra", name: "Prabhanshu Katra", role: "Video Editing Co-Head", field: "senior", photo: "images/seniorteam/Screenshot 2026-09-13 202245.png" },
  { id: "shruti-gupta", name: "Shruti Gupta", role: "Graphics Co-Lead", field: "senior", photo: "images/seniorteam/Screenshot 2026-09-13 202251.png" },
  { id: "nitya-jain", name: "Nitya Jain", role: "Content Head", field: "senior", photo: "images/seniorteam/Screenshot 2026-09-13 202256.png" },
  { id: "tanu-goyal", name: "Tanu Goyal", role: "Content Co-Head", field: "senior", photo: "images/seniorteam/Screenshot 2026-09-13 202302.png" },
  { id: "gaurav-pandey", name: "Gaurav Pandey", role: "Social Media & PR Head", field: "senior", photo: "images/seniorteam/Screenshot 2026-09-13 202307.png" },
  { id: "mitali-gautam", name: "Mitali Gautam", role: "Social Media & PR Co-Head", field: "senior", photo: "images/seniorteam/Screenshot 2026-09-13 202313.png" },
];

// Note: no "Graphics Head" (Lead) photo exists in images/coreteam or
// images/seniorteam — only "Shruti Gupta — Graphics Co-Lead". Flagged, not
// invented: if a Graphics Lead exists, their photo isn't in the provided
// folders.

export const teamRoster = [...coreTeam, ...seniorTeam];
