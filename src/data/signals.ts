export interface ResearchLens {
  code: string;
  title: string;
  question: string;
  outputs: string;
}

// Public research agenda only. Company-level sourcing, scores, priorities, and
// decisions stay in the private investment operating system.
export const RESEARCH_LENSES: ResearchLens[] = [
  {
    code: "POL",
    title: "European AI political economy",
    question:
      "How do industrial policy, sovereignty, regulation, procurement, and state capacity shape where European AI companies can win?",
    outputs: "Dated policy notes · market maps · capital-allocation implications",
  },
  {
    code: "ECO",
    title: "AI and the European economy",
    question:
      "Where does AI change productivity, labour, firm formation, and institutional capacity rather than merely software spend?",
    outputs: "Economic briefs · sector comparisons · falsifiable theses",
  },
  {
    code: "VC",
    title: "Venture formation and incentives",
    question:
      "Which fund structures, ownership patterns, and information advantages matter across the UK, CEE, and Romania?",
    outputs: "Fund maps · non-obvious signals · investment decision criteria",
  },
  {
    code: "BLD",
    title: "Scouting product + public credibility",
    question:
      "How can a private investment operating system generate useful, source-backed public work without exposing company decisions?",
    outputs: "Product iterations · public methodology · selected research artefacts",
  },
];

export const TICKER_ITEMS = [
  "EUROPEAN AI POLITICAL ECONOMY",
  "GOVERNED AGENTIC OPS",
  "VERTICAL SYSTEM-OF-RECORD AI",
  "VENTURE FORMATION",
  "SCOUTING PRODUCT",
  "FACT · INFERENCE · UNCERTAINTY",
];
