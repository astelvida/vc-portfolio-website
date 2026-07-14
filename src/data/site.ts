// Cross-cutting facts — single source so headline numbers cannot drift.
// Reconciled 21 May 2026 against the canonical Notion "AI VC Investor Profile"
// and the live Companies database under the Scouting Engine.

export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vc-portfolio-website.vercel.app",
  pipelineCount: 24,
  thesisCount: 2,
  rubricDimensions: 16,
  signalLayers: 8,
  ssiVersion: "v3.0",
  locations: "LDN / BUH",
  email: "sevda@anefi.vc",
  substack: "signalsoverstories.substack.com",
  linkedin: "linkedin.com/in/sevda-anefi",
} as const;

export interface HeroStat {
  label: string;
  value: number;
  suffix?: string;
}

export const HERO_STATS: HeroStat[] = [
  { label: "PIPELINE", value: SITE.pipelineCount },
  { label: "THESES", value: SITE.thesisCount },
  { label: "SSI DIMENSIONS", value: SITE.rubricDimensions },
  { label: "SIGNAL LAYERS", value: SITE.signalLayers },
];
