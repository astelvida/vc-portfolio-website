export interface Thesis {
  code: string;
  name: string;
  conviction: number;
  color: string;
  tagline: string;
  description: string;
  controlPoint: string;
  buyerPain: string;
  proofSignal: string;
}

export const THESES: Thesis[] = [
  {
    code: "GAO",
    name: "Governed Agentic Ops",
    conviction: 92,
    color: "#E63312",
    tagline: "Deployment permission compounds.",
    description:
      "Runtime governance, observability, evaluation, audit evidence, and policy enforcement for the agents regulated enterprises are about to deploy. The next durable AI infrastructure layer is not a model. It is the deployment gateway.",
    controlPoint: "Runtime governance + audit evidence",
    buyerPain: "Deploy AI without regulatory blowback",
    proofSignal: "Sandbox participation, runtime controls, named regulated buyer",
  },
  {
    code: "VSRAI",
    name: "Vertical System-of-Record AI",
    conviction: 82,
    color: "#6366F1",
    tagline: "Workflow gravity beats model novelty.",
    description:
      "AI that becomes, extends, or controls the system of record in regulated industries. Horizontal copilots compress on every model release. Vertical SoR products compound by writing into the workflow that produces the legal, clinical, or financial record.",
    controlPoint: "System of record write-back",
    buyerPain: "Reduce labour, latency, documentation load",
    proofSignal: "Bidirectional SoR integration, domain data flywheel",
  },
];
