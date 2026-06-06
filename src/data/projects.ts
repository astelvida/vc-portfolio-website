export interface Project {
  title: string;
  description: string;
  stack: string;
}

export const PROJECTS: Project[] = [
  {
    title: "SoR Matrix Tracker",
    description:
      "Live SSI pipeline tracker for the European AI infrastructure shortlist — 24 companies tracked publicly.",
    stack: "Next.js + Notion ISR",
  },
  {
    title: "SSI v3.0 Scoring Model",
    description:
      "Dual-rubric scoring framework — 8 Governed Agentic Ops dimensions and 8 Vertical SoR AI dimensions, separation enforced at the data layer.",
    stack: "Python + data pipeline",
  },
  {
    title: "Scout → Score → Memo Engine",
    description:
      "Three-agent sourcing-to-memo loop: scout signals, score against the rubric, draft the IC-style memo.",
    stack: "Claude Code + MCP",
  },
  {
    title: "Signals Over Stories",
    description: "Investment publication on Governed Agentic Ops and Vertical System-of-Record AI.",
    stack: "Substack",
  },
  {
    title: "Portfolio Site",
    description:
      "This site. Next.js 16 + Notion CMS + Substack RSS. Brutalist-editorial terminal design system.",
    stack: "Next.js 16 + Substack RSS",
  },
  {
    title: "VC Research Skill Suite",
    description:
      "Proprietary Claude skills for filings parsing, procurement signal extraction, and marketplace co-sell detection.",
    stack: "Claude Skills + MCP",
  },
];
