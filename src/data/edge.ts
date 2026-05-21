export interface EdgePillar {
  label: string;
  org: string;
  body: string;
  glyph: string;
}

export const EDGE_PILLARS: EdgePillar[] = [
  {
    label: "FINANCE RIGOR",
    org: "J.P. Morgan SPG · Morgan Stanley",
    body: "Securitised credit, rating-agency coordination, institutional analytical discipline. Trained to think in downside, structure, incentives, and what actually compounds.",
    glyph: "↗",
  },
  {
    label: "TECHNICAL DILIGENCE",
    org: "DAZN · Funding Circle · Duffel",
    body: "Production engineering at scale. I read code, audit LLM integration patterns, evaluate infra claims, and separate real technical moats from GPT wrappers.",
    glyph: "⌘",
  },
  {
    label: "EUROPEAN AI SOURCING",
    org: "CEE corridor · 4 languages",
    body: "Europe mapped as its own market structure — regulation, procurement, and CEE talent as primary signals. I know the filings and networks that precede raises.",
    glyph: "◎",
  },
];

export interface CareerEra {
  period: string;
  phase: string;
  detail: string;
}

export const CAREER_ARC: CareerEra[] = [
  { period: "2013–14", phase: "FINANCE", detail: "Morgan Stanley · J.P. Morgan SPG" },
  { period: "2017–22", phase: "ENGINEERING", detail: "DAZN · Funding Circle · Duffel" },
  { period: "2023–NOW", phase: "VENTURE", detail: "Independent · anefi.vc" },
];
