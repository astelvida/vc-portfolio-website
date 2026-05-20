"use client";

import { motion } from "motion/react";
import Link from "next/link";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const GAO_RUBRIC = [
  { dim: "Regulatory Embeddedness", pts: 20, note: "Sandbox, standards body, regulator consultation, notified-body tooling" },
  { dim: "Runtime Governance Architecture", pts: 18, note: "Audit trails, observability, HITL, policy enforcement at execution" },
  { dim: "Regulatory-Technical Team Fit", pts: 15, note: "Senior hires from regulated buyers, ex-regulator, credible security" },
  { dim: "Governance Build Velocity", pts: 12, note: "Sustained governance commits, not a pre-raise compliance sprint" },
  { dim: "Enterprise Buyer Traction", pts: 12, note: "Named regulated buyer, identifiable budget owner, real procurement" },
  { dim: "Technical Moat", pts: 10, note: "Differentiated evals, runtime, model-agnostic control plane" },
  { dim: "Capital Efficiency", pts: 8, note: "Buyer-paid pilots, focused wedge, revenue vs. burn" },
  { dim: "Investor Signal Quality", pts: 5, note: "EIC, strategic, specialist regtech vs. tourist AI capital" },
];

const VSRAI_RUBRIC = [
  { dim: "System-of-Record Integration Depth", pts: 20, note: "Bidirectional write into EHR / QMS / PLM / core banking / claims" },
  { dim: "Domain Data Advantage", pts: 18, note: "Regulated workflow data, authority access, proprietary ontology" },
  { dim: "Team Domain Pedigree", pts: 15, note: "Clinician-founder, ex-regulator, head-of-ops buyer, vertical operator" },
  { dim: "Workflow Lock-In Evidence", pts: 12, note: "Multi-user, multi-department, task routing, approvals, exceptions" },
  { dim: "Regulatory Alignment", pts: 12, note: "EHDS, DORA, AMLA, MDR/IVDR, Solvency II — sector-specific mapping" },
  { dim: "Switching Cost Architecture", pts: 10, note: "Longitudinal records, templates, integrations, feedback history" },
  { dim: "Market Timing", pts: 8, note: "Regulatory deadline, labour shortage, margin compression" },
  { dim: "Capital Efficiency", pts: 5, note: "Narrow wedge, repeatable buyer, data reuse, implementation playbook" },
];

const TIERS = [
  { code: "P0", range: "80+", label: "Highest Conviction", action: "Act within 48 hours: founder call, source validation, memo stub", color: "#E63312", dot: "🔴" },
  { code: "P1", range: "65–79", label: "Strong", action: "Deep dive this week: validate buyer, traction, signal freshness", color: "#F59E0B", dot: "🟠" },
  { code: "P2", range: "50–64", label: "Emerging", action: "Monitor for strengthening signal; add targeted alerts", color: "#EAB308", dot: "🟡" },
  { code: "P3", range: "<50", label: "Watchlist", action: "Track quarterly or archive unless a new catalyst appears", color: "#9CA3AF", dot: "⚪" },
];

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
    timeline: "Political agreement 7 May 2026 · Annex III up to 2 Dec 2027 · Annex II up to 2 Aug 2028 if tools not ready",
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

export function MethodologyPage() {
  return (
    <div className="-mt-6 md:-mt-9">
      {/* ===== HERO ===== */}
      <section className="full-bleed relative overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 hero-grid opacity-[0.035]" />

        <div className="relative mx-auto max-w-[1100px] px-4 md:px-9 py-16 md:py-24">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
            className="font-mono text-[10px] font-semibold tracking-[0.1em] text-white/30 mb-6 block"
          >
            SCOUT METHODOLOGY · v5.0 · VERIFIED 18 MAY 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="font-display text-[36px] sm:text-[48px] md:text-[64px] font-extrabold leading-[1.0] tracking-[-0.04em] text-white mb-6"
          >
            Two theses. Two rubrics.
            <br />
            <span className="text-accent">One regulatory truth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
            className="max-w-[600px] font-body text-[15px] md:text-[17px] font-light leading-[1.7] text-white/55 mb-10"
          >
            How the engine works. Six weekly steps. Three signal layers.
            SSI v3.0 scored. Every claim sourced. Every score dated. No
            company enters the top 10 without three independent signal
            channels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="inline-flex flex-wrap items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2.5"
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
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-semibold tracking-[0.1em] text-text-muted mb-6 block"
        >
          THE HOUSE VIEW
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-display text-[24px] sm:text-[32px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text max-w-[760px] mb-6"
        >
          Most AI capital still chases model superiority.{" "}
          <span className="text-accent">That is the wrong altitude.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="max-w-[660px] flex flex-col gap-4 mb-10"
        >
          <p className="font-body text-[15px] font-light leading-[1.7] text-text-muted">
            Models improve quickly. Prices fall. Generic capability gets
            absorbed by incumbents on every release cycle. The durable
            value is forming around two control points: the trust layer that
            makes AI legally and operationally deployable, and the workflow
            layer where AI becomes embedded inside regulated systems of
            record.
          </p>
          <p className="font-body text-[15px] font-light leading-[1.7] text-text-muted">
            In regulated markets, the winning question is not <em>can the
            model do the task?</em> The better question is whether the
            organisation can prove the AI system did the right thing, under
            the right controls, with enough evidence for risk, regulators,
            procurement, and audit.
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
      <section className="py-20 md:py-28 border-t border-border">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-semibold tracking-[0.1em] text-text-muted mb-6 block"
        >
          SSI v3.0 · TWO RUBRICS · 100 POINTS EACH
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-display text-[28px] sm:text-[36px] md:text-[44px] font-extrabold leading-[1.05] tracking-[-0.04em] text-text mb-4"
        >
          Score the thesis,{" "}
          <span className="text-accent">not the company.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-[640px] font-body text-[15px] font-light leading-[1.7] text-text-muted mb-12 md:mb-16"
        >
          A startup can be excellent and still irrelevant to the thesis. Two
          rubrics, one 100-point scale, evidence notes on every score.
          Dual-fit companies receive both scores; the higher tier drives
          the action.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GAO rubric */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="rounded-[12px] border border-border bg-surface overflow-hidden"
          >
            <div className="h-[3px] bg-thesis-gao" />
            <div className="border-b border-border px-5 py-4 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] font-semibold tracking-[0.08em] text-thesis-gao block mb-1">
                  THESIS A · GAO
                </span>
                <span className="font-display text-[16px] font-extrabold tracking-[-0.03em] text-text">
                  Governed Agentic Ops
                </span>
              </div>
              <span className="font-mono text-[11px] font-semibold tracking-[0.04em] text-text-faint">
                100 PTS
              </span>
            </div>
            <ul className="divide-y divide-border-subtle">
              {GAO_RUBRIC.map((d, i) => (
                <motion.li
                  key={d.dim}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: EASE }}
                  className="flex items-start gap-4 px-5 py-3.5"
                >
                  <span className="font-mono text-[12px] font-semibold tracking-[0.04em] text-thesis-gao w-8 shrink-0 mt-0.5">
                    {d.pts}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="block font-display text-[13px] font-bold tracking-[-0.02em] text-text mb-0.5">
                      {d.dim}
                    </span>
                    <span className="block font-body text-[12px] font-light leading-[1.55] text-text-muted">
                      {d.note}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* VSRAI rubric */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
            className="rounded-[12px] border border-border bg-surface overflow-hidden"
          >
            <div className="h-[3px] bg-thesis-vsrai" />
            <div className="border-b border-border px-5 py-4 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] font-semibold tracking-[0.08em] text-thesis-vsrai block mb-1">
                  THESIS B · VSRAI
                </span>
                <span className="font-display text-[16px] font-extrabold tracking-[-0.03em] text-text">
                  Vertical System-of-Record AI
                </span>
              </div>
              <span className="font-mono text-[11px] font-semibold tracking-[0.04em] text-text-faint">
                100 PTS
              </span>
            </div>
            <ul className="divide-y divide-border-subtle">
              {VSRAI_RUBRIC.map((d, i) => (
                <motion.li
                  key={d.dim}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: EASE }}
                  className="flex items-start gap-4 px-5 py-3.5"
                >
                  <span className="font-mono text-[12px] font-semibold tracking-[0.04em] text-thesis-vsrai w-8 shrink-0 mt-0.5">
                    {d.pts}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="block font-display text-[13px] font-bold tracking-[-0.02em] text-text mb-0.5">
                      {d.dim}
                    </span>
                    <span className="block font-body text-[12px] font-light leading-[1.55] text-text-muted">
                      {d.note}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ===== TIER CLASSIFICATION ===== */}
      <section className="py-20 md:py-28 border-t border-border">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-semibold tracking-[0.1em] text-text-muted mb-6 block"
        >
          TIER CLASSIFICATION
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-display text-[24px] sm:text-[32px] font-extrabold tracking-[-0.04em] text-text mb-10"
        >
          One score. One action.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="rounded-[10px] border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-hover hover:shadow-lg"
              style={{ borderTop: `3px solid ${t.color}` }}
            >
              <div className="flex items-baseline justify-between mb-3">
                <span
                  className="font-mono text-[11px] font-semibold tracking-[0.06em]"
                  style={{ color: t.color }}
                >
                  {t.code}
                </span>
                <span className="font-display text-[20px] font-extrabold tracking-[-0.04em] text-text">
                  {t.range}
                </span>
              </div>
              <span className="block font-display text-[14px] font-bold tracking-[-0.02em] text-text mb-2">
                {t.label}
              </span>
              <p className="font-body text-[12px] font-light leading-[1.6] text-text-muted">
                {t.action}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== THREE-LAYER SIGNAL ARCHITECTURE ===== */}
      <section className="py-20 md:py-28 border-t border-border">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-semibold tracking-[0.1em] text-text-muted mb-6 block"
        >
          THREE-LAYER SIGNAL ARCHITECTURE
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-display text-[24px] sm:text-[32px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text max-w-[640px] mb-4"
        >
          The edge is not more data.{" "}
          <span className="text-accent">It is layered signal.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-[600px] font-body text-[15px] font-light leading-[1.7] text-text-muted mb-12 md:mb-16"
        >
          At least three independent signal channels before a company
          enters the top 10. Unless one signal is exceptionally strong:
          named public procurement award, regulator-backed deployment.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SIGNAL_LAYERS.map((l, i) => (
            <motion.div
              key={l.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
              className="rounded-[10px] border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-hover hover:shadow-lg"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span
                  className="font-display text-[28px] font-extrabold tracking-[-0.04em]"
                  style={{ color: l.color }}
                >
                  {l.n}
                </span>
                <span className="font-mono text-[10px] font-semibold tracking-[0.08em] text-text-muted">
                  LAYER {l.n}
                </span>
              </div>
              <h3 className="font-display text-[18px] font-extrabold tracking-[-0.03em] text-text mb-2">
                {l.name}
              </h3>
              <p className="font-body text-[13px] font-light leading-[1.65] text-text-muted mb-5">
                {l.summary}
              </p>
              <ul className="flex flex-col gap-2 border-t border-border-subtle pt-4">
                {l.sources.map((src) => (
                  <li
                    key={src}
                    className="flex items-start gap-2 font-body text-[12.5px] font-light leading-[1.55] text-text"
                  >
                    <span
                      className="mt-[7px] h-1 w-1 rounded-full shrink-0"
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
      <section className="py-20 md:py-28 border-t border-border">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-semibold tracking-[0.1em] text-text-muted mb-6 block"
        >
          REGULATORY CONTEXT · VERIFIED 12 MAY 2026
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-display text-[24px] sm:text-[32px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text max-w-[640px] mb-4"
        >
          The single source of truth.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-[620px] font-body text-[15px] font-light leading-[1.7] text-text-muted mb-12"
        >
          Every regulatory claim above lives here, dated and sourced. Any
          row older than 90 days is treated as refresh-due until a primary
          source confirms it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="rounded-[10px] border border-border bg-surface overflow-hidden"
        >
          {REGULATORY.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr_280px] gap-2 md:gap-6 border-b last:border-0 border-border-subtle px-5 md:px-6 py-5 transition-colors hover:bg-accent-bg/40"
            >
              <div>
                <span className="font-display text-[14px] font-extrabold tracking-[-0.03em] text-text block">
                  {r.name}
                </span>
                <span className="font-mono text-[10px] tracking-[0.04em] text-text-faint">
                  {r.cite}
                </span>
                <span className="font-mono text-[10px] tracking-[0.04em] text-text-muted block mt-1.5">
                  {r.status}
                </span>
              </div>
              <p className="font-body text-[12.5px] font-light leading-[1.6] text-text-muted">
                {r.timeline}
              </p>
              <p className="font-body text-[12.5px] font-light leading-[1.6] text-text">
                {r.implication}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== WEEKLY PLAYBOOK ===== */}
      <section className="py-20 md:py-28 border-t border-border">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-semibold tracking-[0.1em] text-text-muted mb-6 block"
        >
          WEEKLY SOURCING PLAYBOOK
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-display text-[24px] sm:text-[32px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text max-w-[640px] mb-4"
        >
          Six steps. Every week.{" "}
          <span className="text-accent">One ranked top 10.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-[600px] font-body text-[15px] font-light leading-[1.7] text-text-muted mb-12"
        >
          Not the biggest list. Ten companies with the strongest thesis
          fit, freshest signal stack, and clearest next action.
        </motion.p>

        <div className="flex flex-col gap-3">
          {WEEKLY_STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
              className="flex items-start gap-5 rounded-[10px] border border-border bg-surface p-5 transition-all duration-300 hover:border-border-hover"
            >
              <span className="font-display text-[28px] md:text-[34px] font-extrabold tracking-[-0.04em] text-accent shrink-0 leading-none">
                {s.n}
              </span>
              <div className="flex-1">
                <span className="block font-mono text-[11px] font-semibold tracking-[0.06em] text-text mb-1.5">
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
      <section className="py-20 md:py-28 border-t border-border">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="font-display text-[18px] md:text-[22px] font-bold tracking-[-0.04em] text-text mb-2">
            Signals over stories. Filings over feelings. Buyers over vibes.
          </p>
          <p className="font-display text-[24px] md:text-[32px] font-extrabold tracking-[-0.04em] text-accent mb-10">
            No score without a source. No source without a date.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/theses"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0A0A0A] px-6 py-3 font-mono text-[11px] font-semibold tracking-[0.06em] text-white transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-lg"
            >
              READ THE THESES &rarr;
            </Link>
            <Link
              href="/signals"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-mono text-[11px] font-semibold tracking-[0.06em] text-text transition-all duration-300 hover:border-accent hover:text-accent"
            >
              SEE THE PIPELINE &rarr;
            </Link>
          </div>

          <p className="font-mono text-[10px] tracking-[0.04em] text-text-faint mt-10">
            Scout Methodology v5.0 · Last verified 18 May 2026 · Next review
            18 Aug 2026
          </p>
        </motion.div>
      </section>
    </div>
  );
}
