"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { AsciiDivider } from "./ascii-divider";
import { RUBRICS, SSI_TIERS, type RubricDimension } from "@/data/rubric";
import type { ThesisCode } from "@/data/signals";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Presentation only. The dimensions, weights and tier bands live in
// src/data/rubric.ts and are shared with /engine — never re-declare them here.
const RUBRIC_META: Record<ThesisCode, { thesisLabel: string; colorVar: string }> = {
  GAO: { thesisLabel: "THESIS A", colorVar: "var(--thesis-gao)" },
  VSRAI: { thesisLabel: "THESIS B", colorVar: "var(--thesis-vsrai)" },
};

const SIGNAL_LAYERS = [
  {
    n: "01",
    name: "Regulatory Proximity",
    summary: "Highest alpha, lowest noise. Sits outside the standard VC information surface.",
    sources: [
      "EU AI Act sandboxes · national competent authorities",
      "CEN-CENELEC JTC 21 · ISO/IEC AI standards",
      "Sector regulator innovation hubs: EBA, EIOPA, ESMA, EMA, MHRA, FCA",
      "TED procurement · national portals",
      "DORA, NIS2, EHDS, MDR/IVDR, AMLA enforcement triggers",
    ],
    color: "#E63312",
  },
  {
    n: "02",
    name: "Technical Architecture",
    summary: "Separates real products from confident landing pages.",
    sources: [
      "GitHub repos · GH Archive · OSS Insight · deps.dev",
      "Docs, API references, SDKs, changelogs",
      "Security and compliance documentation",
      "Product videos that show workflow behaviour, not UI tours",
      "Architecture clues: runtime controls, write-back, FHIR/HL7/ISO 20022 modelling",
    ],
    color: "#6366F1",
  },
  {
    n: "03",
    name: "Market Timing & Momentum",
    summary: "Confirmatory. Never the lead signal unless source quality is exceptional.",
    sources: [
      "Hiring velocity: founding engineers, ex-regulator hires, domain operators",
      "EIC / CORDIS / Innovate UK / national grants",
      "Named customer references with workflow detail",
      "Conference anomalies: unknown company at sector or standards event",
      "Company filings: incorporation, director changes, patents",
    ],
    color: "#10B981",
  },
];

const REGULATORY = [
  {
    name: "EU AI Act",
    cite: "Reg (EU) 2024/1689",
    timeline: "In force 1 Aug 2024 · Prohibitions 2 Feb 2025 · GPAI + governance 2 Aug 2025 · Annex III 2 Aug 2026 (proposed deferral to 2 Dec 2027 under Digital Omnibus political agreement of 7 May 2026)",
    status: "🟩 Live · Annex III enforcement is the dominant timing pressure",
    implication: "Lead catalyst for GAO. Penalties up to €35M or 7% of global turnover.",
  },
  {
    name: "Digital Omnibus",
    cite: "AI Act simplification",
    timeline: "Political agreement 7 May 2026 · Annex III high-risk up to 2 Dec 2027 · Annex I product-embedded high-risk up to 2 Aug 2028",
    status: "🟩 Agreed · Official Journal publication pending",
    implication: "Do not treat delay as bearish. Uncertainty raises demand for readiness tooling.",
  },
  {
    name: "DORA",
    cite: "Reg (EU) 2022/2554",
    timeline: "In force 16 Jan 2023 · Applies 17 Jan 2025 (financial entities + ICT third-party risk)",
    status: "🟩 Live since 17 Jan 2025",
    implication: "Lead catalyst for finserv GAO and VSRAI. Operational resilience, third-party AI risk.",
  },
  {
    name: "NIS2",
    cite: "Dir (EU) 2022/2555",
    timeline: "Transposition 17 Oct 2024 · 22/27 member states transposed by May 2026",
    status: "🟧 Patchy national transposition",
    implication: "Demand signal for AI governance in critical infra, cloud, managed services.",
  },
  {
    name: "EHDS",
    cite: "Reg (EU) 2025/327",
    timeline: "In force 26 Mar 2025 · General application 26 Mar 2027 · Primary-use go-live 26 Mar 2029",
    status: "🟩 Live · Phased application",
    implication: "VSRAI healthcare: EHR write-back, data-authority access, clinical workflow gravity.",
  },
  {
    name: "AMLA",
    cite: "AMLR + AMLAR package",
    timeline: "Mandate handover 1 Jan 2026 · Selection of up to 40 entities Jul–Dec 2027 · Direct supervision begins 2028",
    status: "🟩 Operational · Direct supervision 2028",
    implication: "AML/KYC/fraud AI: regulated data, explainability, FIU/compliance buyer clarity.",
  },
  {
    name: "MDR / IVDR",
    cite: "Reg (EU) 2017/745 · 2017/746",
    timeline: "In force · Staged transitional periods through 2027–2028",
    status: "🟧 Live · Notified-body capacity bottlenecks",
    implication: "VSRAI MedTech: regulatory affairs, clinical evidence, post-market surveillance.",
  },
];

const WEEKLY_STEPS = [
  { n: "01", name: "regscan + grantscan + spinoutscan", body: "EU AI Office, CEN-CENELEC, national sandboxes (CNIL, BfDI, AESIA, ICO, Garante), sector regulator innovation hubs, EIC / CORDIS / Innovate UK." },
  { n: "02", name: "ghscan", body: "GitHub repos with EU AI Act, conformity, agent, guardrails keywords. Created in last 90 days, EU contributors only. Architecture quality over star count." },
  { n: "03", name: "procscan", body: "TED portal AI procurement in high-risk domains. Contractors and subcontractors logged with named buyer." },
  { n: "04", name: "talentscan", body: "Senior regulatory, compliance, and domain hires moving to <100-person AI startups in the last 6 months. Company + role, not personal handles." },
  { n: "05", name: "eventscan", body: "Industry event speaker and exhibitor lists: InsurTech Connect, EBA innovation, HIMSS Europe, ESMA fintech, RegTech. Companies presenting AI at non-AI events." },
  { n: "06", name: "Stack reverse-engineering", body: "For every seed company with SSI ≥ 65, map customers, competitors, tech partners. Add surfaced candidates as Stack RE rows. Validated seeds produce ≈3 new candidates each." },
];

function Eyebrow({ children, ink = false }: { children: string; ink?: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`mb-6 block font-mono text-[10px] font-semibold tracking-[0.22em] ${
        ink ? "text-white/45" : "text-text-muted"
      }`}
    >
      [ {children} ]
    </motion.span>
  );
}

function Rubric({
  thesisLabel,
  code,
  name,
  colorVar,
  rows,
  delay,
}: {
  thesisLabel: string;
  code: string;
  name: string;
  colorVar: string;
  rows: readonly RubricDimension[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      className="overflow-hidden border border-border bg-surface"
    >
      <div className="h-[3px]" style={{ backgroundColor: colorVar }} />
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <span
            className="mb-1 block font-mono text-[10px] font-semibold tracking-[0.08em]"
            style={{ color: colorVar }}
          >
            {thesisLabel} · {code}
          </span>
          <span className="font-display text-[16px] font-extrabold tracking-[-0.03em] text-text">
            {name}
          </span>
        </div>
        <span className="font-mono text-[11px] font-semibold tracking-[0.04em] text-text-faint">
          100 PTS
        </span>
      </div>
      <ul>
        {rows.map((d) => (
          <li
            key={d.code}
            className="flex items-start gap-4 border-b border-border-subtle px-5 py-3.5 last:border-0"
          >
            <span
              className="w-7 shrink-0 font-mono text-[10px] font-semibold"
              style={{ color: colorVar }}
            >
              {d.code}
            </span>
            <div className="min-w-0 flex-1">
              <span className="mb-0.5 block font-display text-[13px] font-bold tracking-[-0.02em] text-text">
                {d.name}
              </span>
              <span className="block font-body text-[12px] font-light leading-[1.55] text-text-muted">
                {d.note}
              </span>
            </div>
            <span className="w-6 shrink-0 text-right font-mono text-[11px] font-semibold tabular-nums text-text-muted">
              {d.max}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function MethodologyPage() {
  return (
    <div className="-mt-6 md:-mt-9">
      {/* ===== HERO ===== */}
      <section className="full-bleed relative overflow-hidden bg-ink">
        <div className="absolute inset-0 hero-grid opacity-[0.04]" />

        <div className="relative mx-auto max-w-[1100px] px-4 py-16 md:px-9 md:py-24">
          <Eyebrow ink>SCOUT METHODOLOGY · v6.1.1 · VERIFIED 07 JUN 2026</Eyebrow>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="mb-6 font-display text-[36px] font-extrabold leading-[1.0] tracking-[-0.045em] text-white sm:text-[48px] md:text-[64px]"
          >
            Two theses. Two rubrics.
            <br />
            <span className="text-accent">One regulatory truth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
            className="mb-10 max-w-[600px] font-body text-[15px] font-light leading-[1.7] text-white/55 md:text-[17px]"
          >
            How the engine works. Six weekly steps. Three signal layers. SSI
            v3.0 scored. Every claim sourced. Every score dated. No company
            enters the top 10 without three independent signal channels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="inline-flex flex-wrap items-center gap-3 border border-ink-border bg-white/[0.03] px-4 py-2.5"
          >
            <span className="font-mono text-[10px] font-semibold tracking-[0.1em] text-accent">
              GROUND RULE
            </span>
            <span className="font-display text-[13px] font-bold tracking-[-0.02em] text-white">
              No score without a source. No source without a date.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ===== HOUSE VIEW ===== */}
      <section className="py-20 md:py-28">
        <Eyebrow>THE HOUSE VIEW</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-6 max-w-[760px] font-display text-[24px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text sm:text-[32px] md:text-[40px]"
        >
          Most AI capital still chases model superiority.{" "}
          <span className="text-accent">That is the wrong altitude.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="mb-10 flex max-w-[660px] flex-col gap-4"
        >
          <p className="font-body text-[15px] font-light leading-[1.7] text-text-muted">
            Models improve quickly. Prices fall. Generic capability gets
            absorbed by incumbents on every release cycle. The durable value is
            forming around two control points: the trust layer that makes AI
            legally and operationally deployable, and the workflow layer where
            AI becomes embedded inside regulated systems of record.
          </p>
          <p className="font-body text-[15px] font-light leading-[1.7] text-text-muted">
            In regulated markets, the winning question is not <em>can the model
            do the task?</em> The better question is whether the organisation
            can prove the AI system did the right thing, under the right
            controls, with enough evidence for risk, regulators, procurement,
            and audit.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-[15px] font-bold tracking-[-0.02em] text-text"
        >
          That is where this engine focuses.
        </motion.p>
      </section>

      {/* ===== SSI v3.0 RUBRICS ===== */}
      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>SSI v3.0 · TWO RUBRICS · 100 POINTS EACH</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-4 font-display text-[28px] font-extrabold leading-[1.05] tracking-[-0.04em] text-text sm:text-[36px] md:text-[44px]"
        >
          Score the thesis, <span className="text-accent">not the company.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 max-w-[640px] font-body text-[15px] font-light leading-[1.7] text-text-muted md:mb-14"
        >
          A startup can be excellent and still irrelevant to the thesis. Two
          rubrics, one 100-point scale, evidence notes on every score. Dual-fit
          companies receive both scores; the higher tier drives the action.
        </motion.p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {RUBRICS.map((rubric, i) => (
            <Rubric
              key={rubric.thesis}
              thesisLabel={RUBRIC_META[rubric.thesis].thesisLabel}
              code={rubric.thesis}
              name={rubric.name}
              colorVar={RUBRIC_META[rubric.thesis].colorVar}
              rows={rubric.dimensions}
              delay={i * 0.1}
            />
          ))}
        </div>
      </section>

      {/* ===== TIER CLASSIFICATION ===== */}
      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>TIER CLASSIFICATION</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10 font-display text-[24px] font-extrabold tracking-[-0.04em] text-text sm:text-[32px]"
        >
          One score. One action.
        </motion.h2>

        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SSI_TIERS.map((t, i) => (
            <motion.div
              key={t.priority}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="flex flex-col gap-3 bg-surface p-5"
              style={{ borderTop: `3px solid ${t.color}` }}
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="font-mono text-[11px] font-semibold tracking-[0.06em]"
                  style={{ color: t.color }}
                >
                  {t.priority}
                </span>
                <span className="font-display text-[22px] font-extrabold tabular-nums tracking-[-0.04em] text-text">
                  {t.range}
                </span>
              </div>
              <span className="font-mono text-[11px] font-semibold tracking-[0.04em] text-text">
                {t.band}
              </span>
              <p className="font-body text-[12.5px] font-light leading-[1.55] text-text-muted">
                {t.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== THREE-LAYER SIGNAL ARCHITECTURE ===== */}
      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>THREE-LAYER SIGNAL ARCHITECTURE</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-4 max-w-[640px] font-display text-[24px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text sm:text-[32px] md:text-[40px]"
        >
          The edge is not more data.{" "}
          <span className="text-accent">It is layered signal.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 max-w-[600px] font-body text-[15px] font-light leading-[1.7] text-text-muted md:mb-14"
        >
          At least three independent signal channels before a company enters the
          top 10. Unless one signal is exceptionally strong: named public
          procurement award, regulator-backed deployment.
        </motion.p>

        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {SIGNAL_LAYERS.map((l, i) => (
            <motion.div
              key={l.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
              className="flex flex-col bg-surface p-6"
            >
              <div className="mb-3 flex items-baseline gap-3">
                <span
                  className="font-display text-[28px] font-extrabold tabular-nums tracking-[-0.04em]"
                  style={{ color: l.color }}
                >
                  {l.n}
                </span>
                <span className="font-mono text-[10px] font-semibold tracking-[0.08em] text-text-muted">
                  LAYER {l.n}
                </span>
              </div>
              <h3 className="mb-2 font-display text-[18px] font-extrabold tracking-[-0.03em] text-text">
                {l.name}
              </h3>
              <p className="mb-5 font-body text-[13px] font-light leading-[1.65] text-text-muted">
                {l.summary}
              </p>
              <ul className="flex flex-col gap-2 border-t border-border-subtle pt-4">
                {l.sources.map((src) => (
                  <li
                    key={src}
                    className="flex items-start gap-2 font-body text-[12.5px] font-light leading-[1.55] text-text"
                  >
                    <span
                      className="mt-[7px] h-1 w-1 shrink-0"
                      style={{ backgroundColor: l.color }}
                    />
                    <span>{src}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== REGULATORY CONTEXT ===== */}
      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>REGULATORY CONTEXT · VERIFIED 07 JUN 2026</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-4 max-w-[640px] font-display text-[24px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text sm:text-[32px] md:text-[40px]"
        >
          The single source of truth.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 max-w-[620px] font-body text-[15px] font-light leading-[1.7] text-text-muted"
        >
          Every regulatory claim above lives here, dated and sourced. Any row
          older than 90 days is treated as refresh-due until a primary source
          confirms it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="border border-border"
        >
          {REGULATORY.map((r) => (
            <div
              key={r.name}
              className="grid grid-cols-1 gap-2 border-b border-border-subtle px-5 py-5 transition-colors last:border-0 hover:bg-accent-bg md:grid-cols-[180px_1fr_280px] md:gap-6 md:px-6"
            >
              <div>
                <span className="block font-display text-[14px] font-extrabold tracking-[-0.03em] text-text">
                  {r.name}
                </span>
                <span className="font-mono text-[10px] tracking-[0.04em] text-text-faint">
                  {r.cite}
                </span>
                <span className="mt-1.5 block font-mono text-[10px] tracking-[0.04em] text-text-muted">
                  {r.status}
                </span>
              </div>
              <p className="font-body text-[12.5px] font-light leading-[1.6] text-text-muted">
                {r.timeline}
              </p>
              <p className="font-body text-[12.5px] font-light leading-[1.6] text-text">
                {r.implication}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ===== WEEKLY PLAYBOOK ===== */}
      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>WEEKLY SOURCING PLAYBOOK</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-4 max-w-[640px] font-display text-[24px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text sm:text-[32px] md:text-[40px]"
        >
          Six steps. Every week.{" "}
          <span className="text-accent">One ranked top 10.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 max-w-[600px] font-body text-[15px] font-light leading-[1.7] text-text-muted"
        >
          Not the biggest list. Ten companies with the strongest thesis fit,
          freshest signal stack, and clearest next action.
        </motion.p>

        <div className="grid grid-cols-1 gap-px border border-border bg-border">
          {WEEKLY_STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
              className="flex items-start gap-5 bg-surface p-5"
            >
              <span className="shrink-0 font-display text-[28px] font-extrabold leading-none tracking-[-0.04em] text-accent md:text-[34px]">
                {s.n}
              </span>
              <div className="flex-1">
                <span className="mb-1.5 block font-mono text-[11px] font-semibold tracking-[0.06em] text-text">
                  {s.name}
                </span>
                <p className="font-body text-[13.5px] font-light leading-[1.65] text-text-muted">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CLOSING ===== */}
      <section className="border-t border-border py-20 md:py-28">
        <AsciiDivider label="SIGNALS OVER STORIES" className="mb-10" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="mb-2 font-display text-[18px] font-bold tracking-[-0.04em] text-text md:text-[22px]">
            Signals over stories. Filings over feelings. Buyers over vibes.
          </p>
          <p className="mb-10 font-display text-[24px] font-extrabold tracking-[-0.04em] text-accent md:text-[32px]">
            No score without a source. No source without a date.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/theses"
              className="inline-flex items-center gap-2 bg-ink px-6 py-3 font-mono text-[11px] font-semibold tracking-[0.06em] text-white transition-colors hover:bg-ink-raised"
            >
              READ THE THESES &rarr;
            </Link>
            <Link
              href="/signals"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] font-semibold tracking-[0.06em] text-text transition-colors hover:border-accent hover:text-accent"
            >
              SEE THE PIPELINE &rarr;
            </Link>
          </div>

          <p className="mt-10 font-mono text-[10px] tracking-[0.04em] text-text-faint">
            Scout Methodology v6.1.1 · Last verified 7 Jun 2026 · Next review 7
            Sep 2026
          </p>
        </motion.div>
      </section>
    </div>
  );
}
