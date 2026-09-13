// Shared icon-by-key lookup so social links can live as plain data in
// mockData.js (label/href/id) instead of hardcoded JSX per page.
const icons = {
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" stroke="none">
      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
    </svg>
  ),
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" stroke="none">
      <path d="M232,128a104,104,0,1,0-120.3,102.7V156.3H84.6V128h27.1V106.4c0-26.8,16-41.6,40.4-41.6,11.7,0,24,2.1,24,2.1V93.1H162.7c-13.3,0-17.4,8.2-17.4,16.7V128h29.6l-4.7,28.3H145.3v74.4A104.1,104.1,0,0,0,232,128Z" />
    </svg>
  ),
};

export default function SocialIcon({ id }) {
  return icons[id] ?? null;
}
