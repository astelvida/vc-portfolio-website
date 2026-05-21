export type ThesisCode = "GAO" | "VSRAI";

export interface Signal {
  company: string;
  ssi: number;
  thesis: ThesisCode;
  hq: string;
  sector: string;
  stage: string;
  priority: "P0" | "P1" | "P2";
}

// Top of the live pipeline, sourced 21 May 2026 from the canonical
// Companies database under the Scouting Engine. SSI = Signal Strength Index
// under the SSI v3.0 dual-rubric. No score without a source.
export const SIGNALS: Signal[] = [
  { company: "Tandem Health", ssi: 86, thesis: "VSRAI", hq: "Sweden", sector: "Healthcare AI", stage: "Series A", priority: "P0" },
  { company: "TORTUS AI", ssi: 82, thesis: "VSRAI", hq: "United Kingdom", sector: "Healthcare AI", stage: "Seed", priority: "P0" },
  { company: "Deeploy", ssi: 80, thesis: "GAO", hq: "Netherlands", sector: "AI Governance", stage: "Seed", priority: "P0" },
  { company: "LatticeFlow AI", ssi: 76, thesis: "GAO", hq: "Switzerland", sector: "AI Governance", stage: "Series A", priority: "P0" },
  { company: "Tomorro", ssi: 76, thesis: "VSRAI", hq: "France", sector: "LegalTech AI", stage: "Series A", priority: "P1" },
  { company: "Flinn.ai", ssi: 76, thesis: "VSRAI", hq: "Austria", sector: "MedTech AI", stage: "Series A", priority: "P1" },
  { company: "Flank AI", ssi: 74, thesis: "VSRAI", hq: "Germany", sector: "LegalTech AI", stage: "Series A", priority: "P1" },
  { company: "Holistic AI", ssi: 74, thesis: "GAO", hq: "United Kingdom", sector: "AI Governance", stage: "Series A", priority: "P1" },
  { company: "Giskard", ssi: 72, thesis: "GAO", hq: "France", sector: "AI Governance", stage: "Seed", priority: "P1" },
  { company: "Baobab Insurance", ssi: 72, thesis: "VSRAI", hq: "Germany", sector: "InsurTech AI", stage: "Series A", priority: "P1" },
  { company: "QuantPi", ssi: 70, thesis: "GAO", hq: "Germany", sector: "AI Governance", stage: "Seed", priority: "P1" },
  { company: "Tibo Energy", ssi: 70, thesis: "VSRAI", hq: "Netherlands", sector: "Energy AI", stage: "Seed", priority: "P1" },
];
