export interface Thesis {
  code: string;
  name: string;
  conviction: number;
  color: string;
  description: string;
}

export const THESES: Thesis[] = [
  {
    code: "CAI",
    name: "Compliance-First AI",
    conviction: 92,
    color: "#E63312",
    description:
      "EU AI Act creates mandatory software procurement. The audit trail, risk register, conformity assessment — three new software categories.",
  },
  {
    code: "INF",
    name: "LLMOps / Eval Infra",
    conviction: 78,
    color: "#10B981",
    description:
      "The eval gap is the primary enterprise AI deployment bottleneck. Pre-consolidation, growing fast.",
  },
  {
    code: "VAI",
    name: "Vertical AI / Regulated",
    conviction: 74,
    color: "#6366F1",
    description:
      "Generic LLMs fail compliance, workflow, liability. The moat is regulatory + relational.",
  },
];
