# Sevda's VC Portfolio Website - **[sevda-vc-portfolio-website](https://vc-portfolio-website.vercel.app/)**.
## Signals Over Stories

![Signals Over Stories](docs/screenshots/home.png)

> Signals over stories. Filings over feelings. Buyers over vibes.

The portfolio site of **Sevda Anefi** — an early-stage European AI
investor-operator. Built around *Signals Over Stories*, a framework for
sourcing and scoring pre-seed to Series A AI companies in regulated European
markets.

Live at **[sevda-vc-portfolio-website](https://vc-portfolio-website.vercel.app/)**.

## What's inside

- **Home** — the house view: two theses and the SSI pipeline at a glance.
- **Theses** — Governed Agentic Ops (GAO) and Vertical System-of-Record AI
  (VSRAI), with conviction levels, control points, and kill criteria.
- **Methodology** — the Scout Methodology: the SSI scoring rubrics, the
  three-layer signal architecture, and the regulatory context table.
- **Signals** — the live deal pipeline.
- **Projects** — tools built for sourcing and scoring, plus open-source repos
  pulled live from the GitHub API.
- **Writing** — *Signals Over Stories* essays, synced from Substack via RSS.

## Tech stack

- **Next.js 16** — App Router, React 19, Turbopack; server components by default
- **TypeScript** — strict mode, no `any`
- **Tailwind CSS 4** — the *Grid Breach* design system
- **Motion** — scroll-triggered animation
- Content sources: **Substack RSS** and the **GitHub API**, both on 1-hour ISR
- Fonts: Syne (display), DM Sans (body), JetBrains Mono (data)

## Local development

The Next.js app lives in [`sevda-site/`](sevda-site).

```bash
cd sevda-site
npm install
npm run dev      # http://localhost:3000
```

Other commands:

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Screenshots

| Methodology | Projects |
| --- | --- |
| ![Methodology page](docs/screenshots/methodology.png) | ![Projects page](docs/screenshots/projects.png) |

---

Built by [Sevda Anefi](https://anefi.vc). Deployed on Vercel.
