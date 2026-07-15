export interface Thesis {
  code: "GAO" | "VSRAI";
  name: string;
  color: string;
  tagline: string;
  description: string;
  controlPoint: string;
  buyerPain: string;
  proofSignal: string;
  falsifier: string;
}

export const THESES: Thesis[] = [
  {
    code: "GAO",
    name: "Governed Agentic Ops",
    color: "#E63312",
    tagline: "Deployment permission compounds.",
    description:
      "The control plane for agentic systems in regulated organisations: identity, permissions, runtime policy, intervention, evaluation, and audit evidence. The durable layer is not another model. It is the infrastructure that lets an enterprise deploy agents with accountable control.",
    controlPoint: "Runtime control + audit evidence",
    buyerPain: "Deploy agents without losing operational accountability",
    proofSignal: "Controls used in a real regulated workflow by a named buyer",
    falsifier: "Governance remains a feature of incumbent platforms rather than a durable buying category",
  },
  {
    code: "VSRAI",
    name: "Vertical System-of-Record AI",
    color: "#6366F1",
    tagline: "Workflow gravity beats model novelty.",
    description:
      "AI that becomes, extends, or controls the authoritative record in a regulated workflow. Durable products do more than assist beside the work: they write back, route decisions, preserve evidence, and become difficult to remove without rebuilding the operating process.",
    controlPoint: "Authoritative write-back + workflow ownership",
    buyerPain: "Reduce labour and latency without fragmenting the record",
    proofSignal: "Bidirectional integration, repeatable implementation, and defensible data rights",
    falsifier: "The product remains a copilot with no write-back, ownership, or switching cost",
  },
];
