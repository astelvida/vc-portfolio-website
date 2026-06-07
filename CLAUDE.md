# sevda-site

Next.js 16 portfolio site for Sevda Anefi — early-stage European AI investor-operator.

Brand: **Signals Over Stories** · Domain: anefi.vc · Substack: signalsoverstories.substack.com

This site is the owner's most important professional asset. It is read by VCs, LPs,
and founders — hold every change to a top-tier bar: factually exact, on-brand, and
visually disciplined. When in doubt, verify before you ship.

## Commands

```bash
npm run dev       # Dev server (Turbopack, http://localhost:3000)
npm run build     # Production build
npm run start     # Serve production build
```

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
| SSI v3.0 dual-rubric (GAO + VSRAI dimensions) | Static | `src/data/rubric.ts` (`RUBRICS`, `SSI_TIERS`) — used by `/engine` | Manual edit |
| EU edge pillars | Static | `src/data/edge.ts` (`EDGE_PILLARS`) — used by `/about`, home | Manual edit |
| Frameworks list + static writing titles | Static | `src/data/frameworks.ts` (`FRAMEWORKS`, `WRITING_LIST`) — used by home | Manual edit |
| Career arc | Static | `src/app/about/page.tsx` (`CAREER`) | Manual edit |
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

Never invent or extrapolate positioning, company facts, or figures. If it isn't in Notion or a
canonical source, it doesn't ship.

**Locked canon:** the house runs on exactly **two theses** — **GAO** (Governed Agentic Ops,
conviction 92) and **VSRAI** (Vertical System-of-Record AI, conviction 82). Do not add, rename,
or re-number theses without an explicit instruction.

## Design system: Grid Breach V2

- Fonts: Syne (display), DM Sans (body), JetBrains Mono (data/mono)
- Colors: warm off-white bg (#F7F5F0), vermillion accent (#E63312); dark hero sections use #0A0A0A ink
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

- **Always use Context7** (`context7` MCP) for any library/framework/API/CLI docs before writing
  code. Don't answer library questions from memory — versions move faster than training data.
- **Use WebSearch / WebFetch** to get the latest market data, company facts, regulatory dates, or
  to research anything investor-facing before adding or changing it. Confirm, then write.

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
