export interface Project {
  title: string;
  description: string;
  stack: string;
  status: string;
}

export const PROJECTS: Project[] = [
  {
    title: "European AI Scouting OS",
    description:
      "A private evidence-to-decision workflow for signals, companies, scorecards, memos, falsifiers, and dated next actions.",
    stack: "Notion + Codex",
    status: "OPERATING",
  },
  {
    title: "SSI v4.0",
    description:
      "An evidence-led investment method that keeps thesis fit, confidence, risk overlays, falsifiers, and decisions distinct.",
    stack: "Research method",
    status: "CALIBRATING",
  },
  {
    title: "Signals Over Stories",
    description:
      "Public research on European AI political economy, venture formation, governed agents, and vertical systems of record.",
    stack: "Research + writing",
    status: "PUBLISHING",
  },
  {
    title: "Public Research Layer",
    description:
      "A publication and portfolio layer that converts selected, source-backed work into useful public artefacts without exposing private company decisions.",
    stack: "Research + product",
    status: "BUILDING",
  },
  {
    title: "Public Investment Portfolio",
    description:
      "This website: a deliberately public layer for theses, methodology, writing, and selected proof of work. Private company decisions stay private.",
    stack: "Next.js 16 + Vercel",
    status: "PUBLIC",
  },
  {
    title: "Research Automation",
    description:
      "Bounded monitoring and synthesis workflows for primary-source discovery, verification, and recurring research briefs.",
    stack: "Codex + connected sources",
    status: "BUILDING",
  },
];
