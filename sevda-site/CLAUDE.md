# sevda-site

> **Superseded by [`sevda-website`](../../sevda-website).** This was the initial scaffold. Active development is in `~/projects/sevda-website`.

Next.js 15 portfolio site for Sevda Anefi — early-stage European AI investor.

## Commands

```bash
npm run dev       # Dev server
npm run build     # Production build
npm run start     # Serve production build
```

## Design System: Grid Breach V2

- Fonts: Syne (display), DM Sans (body), JetBrains Mono (data/mono)
- Colors: warm off-white bg (#F7F5F0), vermillion accent (#E63312)
- All animations use cubic-bezier(0.16, 1, 0.3, 1)

## Rules

- TypeScript strict, no `any`
- Server Components by default. "use client" only for interactive components
- Tailwind for all styling — no inline styles, no component libraries
- NEVER use Inter, Roboto, Space Grotesk, or system fonts
