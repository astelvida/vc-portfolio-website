---
name: frontend-design
description: Brutalist-editorial terminal design system for the anefi.vc portfolio site (Next.js 16). Use when creating or restyling any page, section, component, or UI in this repo — covers design tokens, fonts, layout primitives, motion, and the reusable component library.
---

# Frontend Design — anefi.vc

The site is **brutalist-editorial × terminal**: hard edges, hairline rules,
oversized Syne display type, monospace instrumentation, one accent colour.
Restraint signals discipline — the absence of decoration is the decoration.

## Tokens (defined in `src/app/globals.css` — never hardcode hex in JSX)

Light surface:
- `bg-bg` #FAFAF7 · `bg-surface` #FFFFFF · `text-text` #1A1A1A
- `text-text-muted` #6B6B6B · `text-text-faint` #A8A39A
- `border-border` #D6D2C4 (hairline) · `border-border-subtle` · `border-border-hover`
- `text-accent` / `bg-accent` #E63312 — the only accent; never more than one
  accent element competing on a surface

Dark slabs (`ink`):
- `bg-ink` #0A0A0A · `bg-ink-raised` · `border-ink-border`
- `text-white`, `text-white/55` for body copy, `text-white/45` for muted

Thesis colours (data only): GAO #E63312, VSRAI #6366F1.

## Fonts
- `font-display` — Syne (700/800). Headlines, oversized, `tracking-[-0.04em]`,
  tight `leading-[0.9–1.1]`. Hierarchy through scale, not weight.
- `font-body` — DM Sans (300/400/500). Prose, `font-light` default.
- `font-mono` — JetBrains Mono. Labels, data, eyebrows, every number
  (always `tabular-nums`).

## Rules
- NO border-radius. NO drop shadows. NO gradients or glow. Hard edges only.
- NO Inter / Roboto / system fonts.
- Hairline grids: a `gap-px bg-border` container with `bg-surface` cells.
- Eyebrows: `[ LABEL ]` in mono, `tracking-[0.22em]`, `text-text-muted`.
- Section rhythm: `py-20 md:py-28`, `border-t border-border` between sections.
- Full-bleed dark slabs: `full-bleed bg-ink` with inner
  `mx-auto max-w-[1100px] px-4 md:px-9`. Add `.hero-grid` for the instrument grid.
- Motion: easing `cubic-bezier(0.16, 1, 0.3, 1)`; `whileInView` reveals use
  `viewport={{ once: true }}`; always honour `prefers-reduced-motion`.

## Component library (`src/components`)
- `TerminalFrame` — box-framed panel with a terminal title bar (`variant="paper"|"ink"`)
- `AsciiDivider` — box-drawing rule with an optional centred label
- `ScrambleText` — decode-on-mount headline (SSR-safe, sets `aria-label`)
- `ScrollProgress` — accent scroll-progress bar
- `SiteNav` — navigation with active-route marker + full-screen mobile menu
- `ConvictionBar`, `AnimatedNumber`, `Ticker`, `SectionWrapper`

## Data (`src/data` — canonical, reconciled with Notion)
`site.ts` (cross-cutting counts), `theses.ts`, `signals.ts`, `rubric.ts`,
`edge.ts`, `frameworks.ts`, `projects.ts`. Headline numbers (pipeline count,
thesis count, SSI version) come from `site.ts` — never hardcode them in JSX.

## Verify
Run `npm run dev`, then drive the Playwright MCP to screenshot at 1440px and
390px viewports. Note: `whileInView` sections render empty in a full-page
screenshot — scroll the page and capture the viewport instead.
