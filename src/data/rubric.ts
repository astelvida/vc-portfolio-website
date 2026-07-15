export interface PublicMethodStep {
  code: string;
  name: string;
  description: string;
  test: string;
}

export const SSI_PUBLIC_METHOD: PublicMethodStep[] = [
  {
    code: "01",
    name: "Evidence",
    description: "Capture the source, publication date, verification date, and exact claim before interpretation.",
    test: "Is this a primary source, a company claim, or independent corroboration?",
  },
  {
    code: "02",
    name: "Signal",
    description: "Promote only material changes that alter timing, quality, access, or thesis fit.",
    test: "What changed, why does it matter now, and what would make it noise?",
  },
  {
    code: "03",
    name: "Thesis fit",
    description: "Assign exactly one primary thesis before scoring: GAO or VSRAI.",
    test: "Which control point does the company own, and who pays for it?",
  },
  {
    code: "04",
    name: "Risk + falsifier",
    description: "Keep commercial, technical, regulatory, and execution risk separate from the score.",
    test: "What evidence would overturn the thesis or block promotion?",
  },
  {
    code: "05",
    name: "Decision",
    description: "Route to a dated next action: verify, monitor, memo, engage, or pass.",
    test: "What is the cheapest next fact that could change the decision?",
  },
];

export const EVIDENCE_LABELS = [
  {
    label: "FACT",
    description: "Directly supported by a dated source.",
    color: "#10B981",
  },
  {
    label: "INFERENCE",
    description: "A reasoned conclusion derived from stated evidence.",
    color: "#F59E0B",
  },
  {
    label: "UNCERTAINTY",
    description: "Material information that remains unresolved.",
    color: "#9CA3AF",
  },
] as const;

export const SIGNAL_LAYERS = [
  {
    code: "L1",
    name: "Institutional proximity",
    description: "Regulatory records, standards work, procurement, grants, and public filings.",
  },
  {
    code: "L2",
    name: "Technical architecture",
    description: "Repositories, documentation, integrations, security posture, and observable product artefacts.",
  },
  {
    code: "L3",
    name: "Commercial confirmation",
    description: "Buyer evidence, implementation repeatability, hiring, partnerships, and credible financing signals.",
  },
] as const;
