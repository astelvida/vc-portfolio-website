import type { ThesisCode } from "./signals";

export interface RubricDimension {
  code: string;
  name: string;
  max: number;
  // What the scorer looks for. Rendered on /methodology; /engine shows the bar only.
  note: string;
}

export interface Rubric {
  thesis: ThesisCode;
  name: string;
  dimensions: RubricDimension[];
}

// SSI v3.0 dual-rubric. Dimension set reconciled against the canonical Notion
// "AI VC Investor Profile" (v1.2, verified 28 May 2026). Each rubric totals 100 points.
//
// SINGLE SOURCE. Both /engine and /methodology render from this array. Do not
// re-declare these dimensions in a component — that is how G2 came to be called
// two different things on two pages.
export const RUBRICS: Rubric[] = [
  {
    thesis: "GAO",
    name: "Governed Agentic Ops",
    dimensions: [
      { code: "G1", name: "Regulatory Embeddedness", max: 20, note: "Sandbox, standards body, regulator consultation, notified-body tooling" },
      { code: "G2", name: "Runtime Governance", max: 18, note: "Audit trails, observability, HITL, policy enforcement at execution" },
      { code: "G3", name: "Regulatory-Technical Team Fit", max: 15, note: "Senior hires from regulated buyers, ex-regulator, credible security" },
      { code: "G4", name: "Governance Build Velocity", max: 12, note: "Sustained governance commits, not a pre-raise compliance sprint" },
      { code: "G5", name: "Enterprise Buyer Traction", max: 12, note: "Named regulated buyer, identifiable budget owner, real procurement" },
      { code: "G6", name: "Technical Moat", max: 10, note: "Differentiated evals, runtime, model-agnostic control plane" },
      { code: "G7", name: "Capital Efficiency", max: 8, note: "Buyer-paid pilots, focused wedge, revenue vs. burn" },
      { code: "G8", name: "Investor Signal Quality", max: 5, note: "EIC, strategic, specialist regtech vs. tourist AI capital" },
    ],
  },
  {
    thesis: "VSRAI",
    name: "Vertical System-of-Record AI",
    dimensions: [
      { code: "V1", name: "System-of-Record Integration Depth", max: 20, note: "Bidirectional write into EHR / QMS / PLM / core banking / claims" },
      { code: "V2", name: "Domain Data Advantage", max: 18, note: "Regulated workflow data, authority access, proprietary ontology" },
      { code: "V3", name: "Team Domain Pedigree", max: 15, note: "Clinician-founder, ex-regulator, head-of-ops buyer, vertical operator" },
      { code: "V4", name: "Workflow Lock-In Evidence", max: 12, note: "Multi-user, multi-department, task routing, approvals, exceptions" },
      { code: "V5", name: "Regulatory Alignment", max: 12, note: "EHDS, DORA, AMLA, MDR/IVDR, Solvency II — sector-specific mapping" },
      { code: "V6", name: "Switching Cost Architecture", max: 10, note: "Longitudinal records, templates, integrations, feedback history" },
      { code: "V7", name: "Market Timing", max: 8, note: "Regulatory deadline, labour shortage, margin compression" },
      { code: "V8", name: "Capital Efficiency", max: 5, note: "Narrow wedge, repeatable buyer, data reuse, implementation playbook" },
    ],
  },
];

export interface SsiTier {
  band: string;
  range: string;
  priority: string;
  // Short form, used where space is tight (/engine tier cards).
  action: string;
  // Long form, used on /methodology where the tier table is the point.
  detail: string;
  color: string;
}

// SINGLE SOURCE — rendered by both /engine and /methodology.
export const SSI_TIERS: SsiTier[] = [
  {
    band: "Highest Conviction",
    range: "80+",
    priority: "P0",
    action: "Act within 48 hours",
    detail: "Act within 48 hours: founder call, source validation, memo stub",
    color: "#E63312",
  },
  {
    band: "Strong",
    range: "65–79",
    priority: "P1",
    action: "Deep dive this week",
    detail: "Deep dive this week: validate buyer, traction, signal freshness",
    color: "#F59E0B",
  },
  {
    band: "Emerging",
    range: "50–64",
    priority: "P2",
    action: "Monitor for signal strengthening",
    detail: "Monitor for strengthening signal; add targeted alerts",
    color: "#EAB308",
  },
  {
    band: "Watchlist",
    range: "<50",
    priority: "P3",
    action: "Track quarterly or archive",
    detail: "Track quarterly or archive unless a new catalyst appears",
    color: "#9CA3AF",
  },
];
