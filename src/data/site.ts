export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vc-portfolio-website.vercel.app",
  thesisCount: 2,
  researchLenses: 4,
  focusDays: 90,
  ssiVersion: "v4.0",
  locations: "LDN / BUH",
  email: "sevda.m.anefi@gmail.com",
  substack: "signalsoverstories.substack.com",
  linkedin: "linkedin.com/in/sevda-anefi",
} as const;

export interface HeroStat {
  label: string;
  value: string;
  detail: string;
}

export const HERO_STATS: HeroStat[] = [
  { label: "ACTIVE THESES", value: "02", detail: "GAO + VSRAI" },
  { label: "RESEARCH LENSES", value: "04", detail: "Political economy to product" },
  { label: "FOCUS WINDOW", value: "90D", detail: "Public proof of work" },
  { label: "METHOD", value: "SSI 4", detail: "Evidence before score" },
];
