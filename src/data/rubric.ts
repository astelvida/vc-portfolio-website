import type { ThesisCode } from "./signals";

export interface RubricDimension {
  code: string;
  name: string;
  max: number;
}

export interface Rubric {
  thesis: ThesisCode;
  name: string;
  dimensions: RubricDimension[];
}

// SSI v3.0 dual-rubric, sourced from the canonical Notion Methodology page
// (Scouting Engine v5.0, verified 18 May 2026). Each rubric totals 100 points.
export const RUBRICS: Rubric[] = [
  {
    thesis: "GAO",
    name: "Governed Agentic Ops",
    dimensions: [
      { code: "G1", name: "Regulatory Embeddedness", max: 20 },
      { code: "G2", name: "Runtime Governance", max: 18 },
      { code: "G3", name: "Regulatory-Technical Team Fit", max: 15 },
      { code: "G4", name: "Governance Build Velocity", max: 12 },
      { code: "G5", name: "Enterprise Buyer Traction", max: 12 },
      { code: "G6", name: "Technical Moat", max: 10 },
      { code: "G7", name: "Capital Efficiency", max: 8 },
      { code: "G8", name: "Investor Signal Quality", max: 5 },
    ],
  },
  {
    thesis: "VSRAI",
    name: "Vertical System-of-Record AI",
    dimensions: [
      { code: "V1", name: "System-of-Record Integration Depth", max: 20 },
      { code: "V2", name: "Domain Data Advantage", max: 18 },
      { code: "V3", name: "Team Domain Pedigree", max: 15 },
      { code: "V4", name: "Workflow Lock-In Evidence", max: 12 },
      { code: "V5", name: "Regulatory Alignment", max: 12 },
      { code: "V6", name: "Switching Cost Architecture", max: 10 },
      { code: "V7", name: "Market Timing", max: 8 },
      { code: "V8", name: "Capital Efficiency", max: 5 },
    ],
  },
];

export interface SsiTier {
  band: string;
  range: string;
  priority: string;
  action: string;
}

export const SSI_TIERS: SsiTier[] = [
  { band: "Highest Conviction", range: "80+", priority: "P0", action: "Act within 48 hours" },
  { band: "Strong", range: "65–79", priority: "P1", action: "Deep dive this week" },
  { band: "Emerging", range: "50–64", priority: "P2", action: "Monitor for signal strengthening" },
  { band: "Watchlist", range: "<50", priority: "P3", action: "Track quarterly or archive" },
];
