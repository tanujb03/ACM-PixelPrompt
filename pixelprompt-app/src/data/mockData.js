// Single source of truth for all placeholder copy + fake data.
// Once the real theme drops at 4:30 PM, reskin the whole site by editing this file.

export const site = {
  name: "[Product Name]",
  tagline: "[Value Prop]",
};

export const nav = {
  links: [
    { label: "Home", to: "/" },
    { label: "Product", to: "/product" },
    { label: "About", to: "/about" },
  ],
  cta: { label: "[Nav CTA]", to: "/product" },
};

export const hero = {
  eyebrow: "[Eyebrow / Badge Text]",
  headline: "[Headline Goes Here — Big Bold Promise]",
  subhead:
    "[Subhead: one or two sentences expanding on the headline and explaining what this product actually does for the user.]",
  primaryCta: { label: "[Primary CTA]", to: "/product" },
  secondaryCta: { label: "[Secondary CTA]", to: "/about" },
};

export const features = [
  {
    id: "feature-1",
    icon: "sparkles",
    title: "[Feature One Title]",
    description:
      "[Feature one description — explain the benefit in one or two short sentences.]",
  },
  {
    id: "feature-2",
    icon: "shield",
    title: "[Feature Two Title]",
    description:
      "[Feature two description — explain the benefit in one or two short sentences.]",
  },
];

// `end`/`decimals`/`prefix`/`suffix` feed CountUp — swap these numbers once
// real stats land, the bracket styling is just placeholder decoration.
export const stats = [
  { id: "stat-1", prefix: "[", end: 50, decimals: 0, suffix: "K+]", label: "[Stat Label One]" },
  { id: "stat-2", prefix: "[", end: 99.9, decimals: 1, suffix: "%]", label: "[Stat Label Two]" },
  { id: "stat-3", prefix: "[", end: 500, decimals: 0, suffix: "+]", label: "[Stat Label Three]" },
  { id: "stat-4", prefix: "[#", end: 1, decimals: 0, suffix: "]", label: "[Stat Label Four]" },
];

export const finalCta = {
  headline: "[Final CTA Headline]",
  subhead: "[One line nudging the user to take action right now.]",
  cta: { label: "[Final CTA Button]", to: "/product" },
};

export const products = [
  {
    id: "item-1",
    name: "[Item One Name]",
    category: "[Category]",
    price: "[$00]",
    blurb: "[Short one-line description of item one.]",
  },
  {
    id: "item-2",
    name: "[Item Two Name]",
    category: "[Category]",
    price: "[$00]",
    blurb: "[Short one-line description of item two.]",
  },
  {
    id: "item-3",
    name: "[Item Three Name]",
    category: "[Category]",
    price: "[$00]",
    blurb: "[Short one-line description of item three.]",
  },
  {
    id: "item-4",
    name: "[Item Four Name]",
    category: "[Category]",
    price: "[$00]",
    blurb: "[Short one-line description of item four.]",
  },
  {
    id: "item-5",
    name: "[Item Five Name]",
    category: "[Category]",
    price: "[$00]",
    blurb: "[Short one-line description of item five.]",
  },
  {
    id: "item-6",
    name: "[Item Six Name]",
    category: "[Category]",
    price: "[$00]",
    blurb: "[Short one-line description of item six.]",
  },
];

export const about = {
  headline: "[About Headline]",
  body: [
    "[About paragraph one — placeholder body copy describing the team, mission, or story behind the product.]",
    "[About paragraph two — placeholder body copy, replace once the theme is locked in.]",
  ],
  values: [
    { id: "value-1", title: "[Value One]", description: "[One line on value one.]" },
    { id: "value-2", title: "[Value Two]", description: "[One line on value two.]" },
    { id: "value-3", title: "[Value Three]", description: "[One line on value three.]" },
  ],
};
