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

// Top of the live pipeline, reconciled 7 Jun 2026 against the canonical
// 🎯 Companies database under the Scouting Engine (scored set, ranked by Top
// Score). SSI = Signal Strength Index under the SSI v3.0 dual-rubric. No score
// without a source.
export const SIGNALS: Signal[] = [
  { company: "TORTUS AI", ssi: 81, thesis: "VSRAI", hq: "United Kingdom", sector: "Healthcare AI", stage: "Seed", priority: "P0" },
  { company: "Tandem Health", ssi: 80, thesis: "VSRAI", hq: "Sweden", sector: "Healthcare AI", stage: "Series A", priority: "P0" },
  { company: "Depowise", ssi: 79, thesis: "VSRAI", hq: "Estonia", sector: "FinServ AI", stage: "Seed", priority: "P1" },
  { company: "Raidium", ssi: 75.5, thesis: "VSRAI", hq: "France", sector: "Healthcare AI", stage: "Seed", priority: "P1" },
  { company: "Giskard", ssi: 74, thesis: "GAO", hq: "France", sector: "AI Governance", stage: "Seed", priority: "P1" },
  { company: "LatticeFlow AI", ssi: 72, thesis: "GAO", hq: "Switzerland", sector: "AI Governance", stage: "Series A", priority: "P1" },
  { company: "Tibo Energy", ssi: 70, thesis: "VSRAI", hq: "Netherlands", sector: "Energy AI", stage: "Seed", priority: "P1" },
  { company: "Deeploy", ssi: 68, thesis: "GAO", hq: "Netherlands", sector: "AI Governance", stage: "Seed", priority: "P1" },
  { company: "Modulos AG", ssi: 68, thesis: "GAO", hq: "Switzerland", sector: "AI Governance", stage: "Series A", priority: "P1" },
];
