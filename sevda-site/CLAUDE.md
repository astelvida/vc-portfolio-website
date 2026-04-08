# sevda-site

Next.js 15 portfolio site for Sevda Anefi — early-stage European AI investor.

## Design System: Grid Breach V2

- Fonts: Syne (display), DM Sans (body), JetBrains Mono (data/mono)
- Colors: warm off-white bg (#F7F5F0), vermillion accent (#E63312)
- All animations use cubic-bezier(0.16, 1, 0.3, 1)

## Rules

- TypeScript strict, no `any`
- Server Components by default. "use client" only for interactive components
- Tailwind for all styling — no inline styles, no component libraries
- NEVER use Inter, Roboto, Space Grotesk, or system fonts
