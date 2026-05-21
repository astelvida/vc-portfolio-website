# sevda-site

Next.js 16 portfolio site for Sevda Anefi — early-stage European AI investor-operator.

Brand: **Signals Over Stories** · Domain: anefi.vc · Substack: signalsoverstories.substack.com

## Commands

```bash
npm run dev       # Dev server
npm run build     # Production build
npm run start     # Serve production build
```

## Design system: Grid Breach V2

- Fonts: Syne (display), DM Sans (body), JetBrains Mono (data/mono)
- Colors: warm off-white bg (#F7F5F0), vermillion accent (#E63312); dark hero sections use #0A0A0A ink
- All animations use cubic-bezier(0.16, 1, 0.3, 1)
- One accent color — restraint signals discipline

## Code rules

- TypeScript strict, no `any`
- Server Components by default. `"use client"` only for interactive components (motion, hooks)
- Tailwind for all styling — no inline styles, no component libraries
- NEVER use Inter, Roboto, Space Grotesk, or system fonts
- Substack content via `lib/substack.ts` RSS fetch with 1-hour ISR

## Brand mantras (for copy)

- Signals over stories. Filings over feelings. Buyers over vibes.
- Models commoditize. Workflows compound.
- Infrastructure compounds.
- Regulation is distribution by other means.
- In regulated markets, the compliance surface area is the product.
- You cannot audit what you cannot test.

## Source of truth

Investment positioning, career facts, and writing list are sourced from Notion
(canonical CV + Investor Profile pages). When updating site content, verify
against those before editing — the site should not drift from the canonical
investor positioning.

## Next.js version notice

<!-- BEGIN:nextjs-agent-rules -->
**This is NOT the Next.js you know.** This version has breaking changes — APIs,
conventions, and file structure may all differ from your training data. Read the
relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed
deprecation notices.
<!-- END:nextjs-agent-rules -->
