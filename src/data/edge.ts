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
    body: "Securitised-products origination at J.P. Morgan and a sales-and-trading summer analyst placement at Morgan Stanley. Financial modelling, pitches, market analysis and transaction coordination.",
    glyph: "↗",
  },
  {
    label: "TECHNICAL DILIGENCE",
    org: "DAZN · Funding Circle · Duffel",
    body: "Production software engineering across streaming, lending and travel technology. I use that experience to examine architecture, implementation risk and technical claims.",
    glyph: "⌘",
  },
  {
    label: "EUROPEAN AI SOURCING",
    org: "Europe-wide · developing CEE lens",
    body: "Independent research using filings, procurement, product artefacts and buyer evidence. Romania and CEE are a developing sourcing lens; proprietary access and investment outcomes remain unproven.",
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
  { period: "SELECTED EXPERIENCE", phase: "FOUNDER / OPERATOR", detail: "Zemedy · Fluento / Antler · Khaleea Jewelry · Sevda Jewellery ERP" },
];
