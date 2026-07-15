# vc-portfolio-website

Next.js 16 portfolio site for Sevda Anefi — European AI investor-operator.

Brand: **Signals Over Stories**
Canonical URL: **https://vc-portfolio-website.vercel.app**
Substack: **signalsoverstories.substack.com**

This is a public professional asset. Hold every change to a high factual,
editorial, security, and visual standard. Run `npm run build` before committing.

## Public canon

- Exactly two active theses:
  - **GAO** — Governed Agentic Ops
  - **VSRAI** — Vertical System-of-Record AI
- Current method: **SSI v4.0**.
- Public language: evidence first; Fact / Inference / Uncertainty; one primary
  thesis; evidence confidence, risk overlays, falsifiers, decision, and next
  verification remain separate.
- 90-day focus: European AI political economy, AI and the European economy,
  venture formation in the UK/CEE/Romania, scouting-product development, and
  public investment credibility.

## Public / private boundary

Public: theses, methodology, research questions, approved source-backed
findings, writing, and selected proof of work.

Private: company scores, priority rankings, draft investment decisions,
confidential notes, and unapproved scouting records. Never compile these into a
public client bundle or expose them through a public route.

Never invent traction, funding, customers, partnerships, technical capability,
or regulatory certainty. Use current, dated evidence and label company claims.

## Architecture

`src/` App Router. Path alias `@/*` → `./src/*`.

- `src/app/` routes and metadata
- `src/components/` shared UI; Client Components only when required
- `src/data/` static public positioning
- `src/lib/` live public-source fetchers with fallbacks
- `src/fonts/` self-hosted fonts

Live writing comes from Substack RSS. Selected public repositories come from
the GitHub API. Investment positioning is static and updated deliberately.

## Code and design rules

- TypeScript strict; no `any`.
- Server Components by default.
- Tailwind styling; no component library.
- Preserve the Grid Breach system: Syne display, DM Sans body, JetBrains Mono
  data; warm off-white, ink, and one vermillion accent.
- Verify Next.js behaviour against `node_modules/next/dist/docs/` for the exact
  installed version.
- Visually inspect high-impact changes.
