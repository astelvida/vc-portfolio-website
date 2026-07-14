# sevda-site

Next.js 16 portfolio site for Sevda Anefi — early-stage European AI investor-operator.

Brand: **Signals Over Stories** · Live: vc-portfolio-website.vercel.app · Substack: signalsoverstories.substack.com

This site is the owner's most important professional asset. It is read by VCs, LPs,
and founders — hold every change to a top-tier bar: factually exact, on-brand, and
visually disciplined. When in doubt, verify before you ship.

## Commands

No lint or test scripts exist. `npm run build` is the gate — it must pass before any commit.

## Architecture

`src/`-based App Router. Path alias `@/*` → `./src/*`.

```text
src/
├── app/          # Routes. layout.tsx (nav, fonts, status bar), globals.css (design tokens)
├── components/   # Shared UI (kebab-case files; "use client" only where noted)
├── lib/          # Live data fetchers (substack.ts, github.ts)
├── data/         # Static positioning canon (theses, signals, projects, rubric, edge, frameworks, site)
├── types/        # Shared TS interfaces
└── fonts/        # Self-hosted woff2 (Syne, DM Sans, JetBrains Mono)
```

Routes: `/`, `/about`, `/theses`, `/methodology`, `/signals`, `/engine`, `/writing`
(+ `/writing/[slug]`), `/projects`. Plus `app/api/substack/route.ts`, `app/feed/route.ts`,
`app/robots.ts`, `app/sitemap.ts`. (`/engine` is the Scouting Engine page — Scout → Score → Memo.)

**Two-speed data model.** Content is either *live* (fetched at runtime, ISR 1-hour, with a
hardcoded fallback so the site never blanks) or *static* (compiled in, changes only on rebuild).
Know which tier you're editing — see the table below.

## Data sources — know where to edit

| Content | Tier | File(s) | How it updates |
| --- | --- | --- | --- |
| Essays / writing list | Live | `src/lib/substack.ts` (Substack RSS) | Auto, ISR 1-hour |
| Open-source repos (`/projects`) | Live | `src/lib/github.ts` (GitHub API, `astelvida/*`) | Auto, ISR 1-hour |
| Theses, signals, projects | Static | `src/data/theses.ts`, `src/data/signals.ts`, `src/data/projects.ts` | Manual edit + rebuild |
| Headline numbers + contact (single source) | Static | `src/data/site.ts` (`SITE`, `HERO_STATS`) — used by layout, home, about, signals, engine | Manual edit |
| SSI v3.0 dual-rubric (GAO + VSRAI dimensions) | Static | `src/data/rubric.ts` (`RUBRICS`, `SSI_TIERS`) — **single source**, used by `/methodology` (full table) and referenced from `/engine` | Manual edit |
| EU edge pillars | Static | `src/data/edge.ts` (`EDGE_PILLARS`) — used by `/about`, home | Manual edit |
| Frameworks list + static writing titles | Static | `src/data/frameworks.ts` (`FRAMEWORKS`, `WRITING_LIST`) — used by home | Manual edit |
| Career arc | Static | `src/data/edge.ts` (`CAREER_ARC`) — used by `/about` and home | Manual edit |
| Deep thesis content | Static | `src/components/thesis-page.tsx` | Manual edit |
| Hero ticker | Static | `src/components/ticker.tsx` | Manual edit |

Static positioning is duplicated in places (e.g. conviction numbers live in both
`src/data/theses.ts` and `src/components/thesis-page.tsx`). When you change a figure, grep for
it and update every occurrence so the site stays internally consistent.

## Source of truth — Notion sync

Notion (canonical CV + Investor Profile pages) is authoritative for all investment positioning,
career facts, and the writing list. There is **no live Notion integration** — sync is manual.
When updating positioning content:

1. Pull the relevant Notion page via the **Notion MCP** (`notion-search` / `notion-fetch`).
2. Verify the current site copy against it — note every drift.
3. Hand-edit the matching file from the data table above (`src/data/*.ts` or the named component).
4. Rebuild and confirm.

> The Notion MCP is a **user-level dependency**, not provisioned by this repo — there is no
> `.mcp.json` entry for it. A fresh clone will not have it wired up; it must be configured in the
> user's Claude Code setup. If `notion-search` / `notion-fetch` are unavailable, stop and say so
> rather than editing positioning from memory.

Never invent or extrapolate positioning, company facts, or figures. If it isn't in Notion or a
canonical source, it doesn't ship.

**Locked canon:** the house runs on exactly **two theses** — **GAO** (Governed Agentic Ops,
conviction 92) and **VSRAI** (Vertical System-of-Record AI, conviction 82). Do not add, rename,
or re-number theses without an explicit instruction.

## Design system: Grid Breach V2

- Fonts: Syne (display), DM Sans (body), JetBrains Mono (data/mono)
- Colors: warm off-white bg (#FAFAF7), vermillion accent (#E63312); dark hero sections use #0A0A0A ink
- All animations use `cubic-bezier(0.16, 1, 0.3, 1)`
- One accent color — restraint signals discipline

## Code rules

- TypeScript strict, no `any`
- Server Components by default. `"use client"` only for interactive components (motion, hooks)
- Tailwind for all styling — no inline styles, no component libraries
- NEVER use Inter, Roboto, Space Grotesk, or system fonts
- Substack content via `lib/substack.ts` RSS fetch with 1-hour ISR
- File conventions (match the existing repo): kebab-case filenames; colocate route-specific
  components in a `_components/` folder; static data in `src/data`; shared types in `src/types`

## Research & tooling

**Prefer live sources over memory.** This repo runs bleeding-edge versions (Next.js 16, React 19,
Tailwind 4) whose behavior post-dates most training data. For anything version-sensitive, verify
before you write — do not answer from recall.

- **Library / framework / API / CLI docs → Context7** (`context7` MCP), before writing code. For
  Next.js specifically, the vendored docs in `node_modules/next/dist/docs/` are the exact version
  this project ships — read them (see the Next.js version notice below).
- **Market data, company facts, regulatory dates, anything investor-facing → WebSearch / WebFetch.**
  Confirm against a primary source, then write. This is doubly load-bearing here: positioning must
  trace to Notion or a canonical source (see Source of truth above).
- **Visual verification → Playwright.** This is the owner's most important professional asset and
  the bar is "visually disciplined" — verify UI changes by looking, not by assuming.
  - Default to the **Playwright MCP** (`mcp__plugin_playwright_playwright__*`, provided by the
    playwright plugin) for interactive checks: navigate, snapshot, screenshot, read console.
    These tools are allow-listed in `.claude/settings.json`.
  - Use the **`playwright-cli` skill** for batch work the MCP can't do in one shot — full-page
    capture across many routes, or light/dark rendering via `emulateMedia`. Note: pages have a
    live ticking clock, so wait on `load`, not `networkidle`.
  - Scratch output (`.playwright-mcp/`, `.playwright-cli/`, root `*.png`) is gitignored — clean up
    stray screenshots before finishing.

## Brand mantras (for copy)

- Signals over stories. Filings over feelings. Buyers over vibes.
- Models commoditize. Workflows compound.
- Infrastructure compounds.
- Regulation is distribution by other means.
- In regulated markets, the compliance surface area is the product.
- You cannot audit what you cannot test.

**Voice:** evidence-led, terse, declarative. No hype, no filler adjectives, no emoji in prose.
Copy must not drift from the canonical Notion positioning.

## Next.js version notice

<!-- BEGIN:nextjs-agent-rules -->

**This is NOT the Next.js you know.** This version has breaking changes — APIs,
conventions, and file structure may all differ from your training data. Read the
relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed
deprecation notices.

<!-- END:nextjs-agent-rules -->
