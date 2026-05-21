export interface Project {
  title: string;
  description: string;
  stack: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Signal Tracker Dashboard",
    description:
      "Live SSI pipeline tracker with 78 European AI companies.",
    stack: "Next.js + Notion",
  },
  {
    title: "SSI Scoring Model",
    description:
      "Proprietary 11-dimension signal scoring framework (v2.0).",
    stack: "Python + data pipeline",
  },
  {
    title: "Deal Sourcing OS",
    description:
      "8-agent pipeline architecture for automated deal sourcing.",
    stack: "Claude Code + MCP",
  },
  {
    title: "Signals Over Stories",
    description: "Bi-weekly newsletter on European AI investing.",
    stack: "Substack",
  },
  {
    title: "Portfolio Site",
    description:
      "This site. Next.js 15 + Notion CMS + Substack RSS. Grid Breach design system.",
    stack: "Next.js 15 + Substack RSS",
  },
  {
    title: "Fund Outreach Engine",
    description:
      "Automated personalized outreach to 13 target funds.",
    stack: "React + Notion MCP",
  },
];
