"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { AnimatedNumber } from "./animated-number";
import { Ticker } from "./ticker";
import { ConvictionBar } from "./conviction-bar";
import { THESES } from "@/data/theses";
import { SIGNALS } from "@/data/signals";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// EU AI Act high-risk (Annex III) enforcement begins Aug 2, 2026.
const EU_AI_ACT_ENFORCEMENT = new Date("2026-08-02T00:00:00Z");

function daysUntilEnforcement(): number {
  const now = new Date();
  const diffMs = EU_AI_ACT_ENFORCEMENT.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diffMs / 86_400_000));
}

const HERO_STATS = [
  { label: "PIPELINE", value: 78 },
  { label: "SCORED", value: 24 },
  { label: "IC MEMOS", value: 8 },
  { label: "THESES", value: 3 },
];

const EDGE_PILLARS = [
  {
    label: "FINANCE RIGOR",
    org: "JPMorgan SPG \u00b7 Morgan Stanley",
    body: "Structured products, rating agency coordination, institutional analytical discipline. I see operational leverage \u2014 reconciliation agents, compliance orchestration, close automation \u2014 as the next durable compounding edge.",
    color: "var(--thesis-vai)",
    icon: "\u2197",
  },
  {
    label: "TECHNICAL DILIGENCE",
    org: "DAZN \u00b7 Duffel \u00b7 Funding Circle",
    body: "Production engineering at scale. I read code, audit LLM integration patterns, evaluate infra claims \u2014 latency budgets, vector search benchmarks, edge compute tradeoffs. I distinguish real technical moats from GPT wrappers.",
    color: "var(--thesis-inf)",
    icon: "\u2318",
  },
  {
    label: "EUROPEAN AI SOURCING",
    org: "CEE Corridor \u00b7 4 Languages",
    body: "Under-indexed markets, first-mover access. Romania, Poland, Czechia, the Baltics, Bulgaria \u2014 markets where strong technical teams are often missed early. I know the filings, networks, and signals that precede raises.",
    color: "var(--thesis-cai)",
    icon: "\u25ce",
  },
];

const CAREER_ARC = [
  { period: "2013\u201314", phase: "FINANCE", detail: "Morgan Stanley \u00b7 JPMorgan SPG", color: "var(--thesis-vai)" },
  { period: "2017\u201322", phase: "ENGINEERING", detail: "DAZN \u00b7 Funding Circle \u00b7 Duffel", color: "var(--thesis-inf)" },
  { period: "2023\u2013NOW", phase: "VENTURE", detail: "Independent \u00b7 anefi.vc", color: "var(--thesis-cai)" },
];

const FRAMEWORKS = [
  "SSI v2.0 \u2014 unified 8-signal scoring framework for early-stage European AI",
  "8-layer Alpha Signal Framework \u2014 research velocity, hiring surges, regulatory tailwinds, product artifacts",
  "3 automated agents (Scout \u2192 Score \u2192 Memo) \u2014 sourcing-to-memo pipeline",
  "Live dealflow tracker \u2014 pipeline, priority, signal timeline, act-now, scoring matrix",
];

const WRITING_LIST = [
  "Signals Over Stories: AI, Capital, and Constraints",
  "The Compliance-First AI Thesis",
  "Beyond ChatBots: Why Romania Can Own AgentOps & Compliance-First AI",
  "I Look at GitHub Before I Read the Deck",
  "The MCP Primitive Wars",
];

function thesisColor(code: string): string {
  return THESES.find((t) => t.code === code)?.color ?? "var(--text-muted)";
}

export function HomePage() {
  return (
    <div className="-mt-6 md:-mt-9">
      {/* ===== SECTION 1: HERO ===== */}
      <section className="full-bleed relative overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 hero-grid opacity-[0.035]" />

        <div className="relative mx-auto max-w-[1100px] px-4 md:px-9 pt-14 md:pt-24">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            className="flex flex-wrap items-center gap-3 md:gap-4 mb-10 md:mb-14"
          >
            <span className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[10px] font-semibold tracking-[0.08em] text-emerald-400">
                ACTIVELY SOURCING
              </span>
            </span>
            <span
              className="font-mono text-[10px] tracking-[0.06em] text-white/30"
              suppressHydrationWarning
            >
              EU AI ACT ENFORCEMENT &mdash; {daysUntilEnforcement()} DAYS
            </span>
          </motion.div>

          {/* Heading */}
          <div className="mb-8 md:mb-10">
            {["SIGNALS", "OVER", "STORIES."].map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: EASE }}
                className="overflow-hidden"
              >
                <span
                  className={`block font-display text-[52px] sm:text-[76px] md:text-[100px] font-extrabold leading-[0.92] tracking-[-0.04em] ${
                    word === "STORIES." ? "text-accent" : "text-white"
                  }`}
                >
                  {word}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
            className="max-w-[540px] font-body text-[15px] md:text-[17px] font-light leading-[1.7] text-white/50 mb-12 md:mb-16"
          >
            Ex-JPMorgan and Morgan Stanley analyst turned software engineer and
            European AI investor-operator. Compliance-first thesis, technical
            diligence depth, and on-the-ground access to the CEE corridor.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05, ease: EASE }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-lg overflow-hidden border border-white/[0.08]"
          >
            {HERO_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.15 + i * 0.08 }}
                className="flex flex-col items-center gap-1.5 bg-white/[0.03] py-5 md:py-7 px-4 backdrop-blur-sm"
              >
                <span className="font-display text-[28px] md:text-[36px] font-bold tracking-[-0.04em] text-white">
                  <AnimatedNumber target={stat.value} duration={1400} />
                </span>
                <span className="font-mono text-[9px] md:text-[10px] font-medium tracking-[0.1em] text-white/35">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hero Ticker */}
        <div className="mt-10 md:mt-14 border-t border-white/[0.06]">
          <Ticker variant="dark" />
        </div>
      </section>

      {/* ===== SECTION 2: THE HOUSE VIEW ===== */}
      <section className="py-20 md:py-28">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="font-mono text-[10px] font-semibold tracking-[0.1em] text-text-muted mb-6 block"
        >
          THE HOUSE VIEW
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-display text-[24px] sm:text-[32px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text max-w-[700px] mb-6"
        >
          Most AI capital chases model superiority.{" "}
          <span className="text-accent">That is the wrong frame.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="max-w-[600px] font-body text-[15px] font-light leading-[1.7] text-text-muted mb-12 md:mb-16"
        >
          Models commoditize on every release cycle. What compounds is the
          infrastructure around them &mdash; the compliance layer that gates
          deployment, the vertical system of record that accumulates domain data,
          the evaluation tooling that proves the system works.
        </motion.p>

        {/* Thesis Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
          {THESES.map((thesis, i) => (
            <motion.div
              key={thesis.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="group relative rounded-[10px] border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-xl"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[10px]"
                style={{ backgroundColor: thesis.color }}
              />
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                      style={{ backgroundColor: thesis.color }}
                    />
                    <span
                      className="relative inline-flex h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: thesis.color }}
                    />
                  </span>
                  <span className="font-mono text-[10px] font-semibold tracking-[0.06em] text-text-muted">
                    {thesis.code}
                  </span>
                </div>
                <span
                  className="font-mono text-[11px] font-semibold tracking-[0.04em]"
                  style={{ color: thesis.color }}
                >
                  {thesis.conviction}%
                </span>
              </div>
              <div className="flex flex-col gap-3 p-5">
                <h3 className="font-display text-[15px] font-bold tracking-[-0.04em] text-text">
                  {thesis.name}
                </h3>
                <p className="font-body text-[13px] font-light leading-[1.6] text-text-muted">
                  {thesis.description}
                </p>
                <ConvictionBar
                  percentage={thesis.conviction}
                  color={thesis.color}
                  delay={200 + i * 150}
                />
              </div>
              <div className="border-t border-border px-5 py-3">
                <Link
                  href="/theses"
                  className="font-mono text-[10px] font-semibold tracking-[0.06em] text-text-muted transition-colors hover:text-accent"
                >
                  Read thesis &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-[14px] font-light italic text-text-muted"
        >
          Regulation creates markets. Workflow creates lock-in. Evaluation
          creates trust.
        </motion.p>
      </section>

      {/* ===== SECTION 3: THE EDGE ===== */}
      <section className="py-20 md:py-28 border-t border-border">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-semibold tracking-[0.1em] text-text-muted mb-6 block"
        >
          THE EDGE
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-display text-[28px] sm:text-[36px] md:text-[44px] font-extrabold leading-[1.05] tracking-[-0.04em] text-text mb-4"
        >
          CAPITAL, CODE, AND <span className="text-accent">CONVICTION.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="max-w-[520px] font-body text-[15px] font-light leading-[1.7] text-text-muted mb-12 md:mb-16"
        >
          I combine three strengths that rarely sit in one profile: institutional
          finance, software engineering, and European AI market mapping. That mix
          lets me move fluently between capital, code, and conviction.
        </motion.p>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-14 md:mb-20">
          {EDGE_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="flex flex-col gap-4 rounded-[10px] border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-hover hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-md text-sm"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${pillar.color} 12%, transparent)`,
                    color: pillar.color,
                  }}
                >
                  {pillar.icon}
                </span>
                <span
                  className="font-mono text-[11px] font-semibold tracking-[0.06em]"
                  style={{ color: pillar.color }}
                >
                  {pillar.label}
                </span>
              </div>
              <span className="font-display text-xs font-bold tracking-[-0.02em] text-text">
                {pillar.org}
              </span>
              <p className="font-body text-[13px] font-light leading-[1.7] text-text-muted">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Career Arc */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col md:flex-row gap-0 rounded-lg border border-border overflow-hidden"
        >
          {CAREER_ARC.map((era) => (
            <div
              key={era.phase}
              className="flex-1 flex items-center gap-3 border-b md:border-b-0 md:border-r last:border-0 border-border px-5 py-4 bg-surface"
            >
              <div
                className="h-8 w-[3px] rounded-full shrink-0"
                style={{ backgroundColor: era.color }}
              />
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[9px] tracking-[0.1em] text-text-faint">
                  {era.period}
                </span>
                <span
                  className="font-mono text-[11px] font-semibold tracking-[0.04em]"
                  style={{ color: era.color }}
                >
                  {era.phase}
                </span>
                <span className="font-body text-[12px] text-text-muted">
                  {era.detail}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ===== SECTION 4: SIGNAL PIPELINE ===== */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] font-semibold tracking-[0.1em] text-text-muted"
          >
            SIGNAL PIPELINE
          </motion.span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-display text-[24px] sm:text-[32px] font-extrabold tracking-[-0.04em] text-text mb-10"
        >
          Top signals by SSI score.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="rounded-[10px] border border-border bg-surface overflow-hidden mb-8"
        >
          <div className="overflow-x-auto">
            <div className="min-w-[520px]">
              {/* Header */}
              <div className="grid grid-cols-[1fr_64px_48px_64px_88px_64px] gap-0 border-b border-border bg-bg px-4 md:px-6 py-2.5">
                {["COMPANY", "SSI", "\u0394", "THESIS", "HQ", "HEAT"].map(
                  (h) => (
                    <span
                      key={h}
                      className="font-mono text-[9px] font-semibold tracking-[0.1em] text-text-faint"
                    >
                      {h}
                    </span>
                  )
                )}
              </div>

              {/* Rows */}
              {SIGNALS.map((s, i) => (
                <motion.div
                  key={s.company}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                  className="grid grid-cols-[1fr_64px_48px_64px_88px_64px] gap-0 border-b last:border-0 border-border-subtle px-4 md:px-6 py-3 transition-colors hover:bg-accent-bg/30"
                >
                  <span className="font-display text-[13px] font-bold tracking-[-0.02em] text-text">
                    {s.company}
                  </span>
                  <span
                    className={`font-mono text-[12px] font-semibold ${s.ssi >= 80 ? "text-accent" : "text-text"}`}
                  >
                    {s.ssi}
                  </span>
                  <span
                    className={`font-mono text-[11px] ${s.delta > 0 ? "text-success" : s.delta < 0 ? "text-accent" : "text-text-faint"}`}
                  >
                    {s.delta > 0 ? `+${s.delta}` : s.delta}
                  </span>
                  <span
                    className="font-mono text-[10px] font-semibold tracking-[0.04em]"
                    style={{ color: thesisColor(s.thesis) }}
                  >
                    {s.thesis}
                  </span>
                  <span className="font-body text-[12px] text-text-muted">
                    {s.hq}
                  </span>
                  <span className="flex items-center gap-1.5">
                    {s.heat === "HOT" && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                      </span>
                    )}
                    <span
                      className={`font-mono text-[10px] font-semibold ${s.heat === "HOT" ? "text-accent" : "text-text-muted"}`}
                    >
                      {s.heat}
                    </span>
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-mono text-[11px] tracking-[0.04em] text-text-muted"
        >
          78 companies tracked &middot; 24 scored &middot; 8 IC-style memos
          written
        </motion.p>
      </section>

      {/* ===== SECTION 5: PROOF OF WORK ===== */}
      <section className="py-20 md:py-28 border-t border-border">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-semibold tracking-[0.1em] text-text-muted mb-6 block"
        >
          PROOF OF WORK
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-display text-[28px] sm:text-[36px] md:text-[44px] font-extrabold leading-[1.05] tracking-[-0.04em] text-text mb-12 md:mb-16"
        >
          THE RECEIPTS.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-14 md:mb-20">
          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.08em] text-accent mb-5">
              FRAMEWORKS &amp; SYSTEMS
            </h3>
            <ul className="flex flex-col gap-3">
              {FRAMEWORKS.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span className="font-body text-[14px] font-light leading-[1.6] text-text">
                    {f}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Writing */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          >
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.08em] text-text-muted mb-5">
              PUBLISHED WRITING
            </h3>
            <ul className="flex flex-col gap-3">
              {WRITING_LIST.map((w, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + i * 0.06,
                    ease: EASE,
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-border shrink-0" />
                  <span className="font-body text-[14px] font-light leading-[1.6] text-text-muted">
                    {w}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="border-t border-border pt-10 md:pt-14"
        >
          <p className="font-display text-[18px] md:text-[22px] font-bold tracking-[-0.04em] text-text mb-2">
            Signals over stories. Filings over feelings. Buyers over vibes.
          </p>
          <p className="font-display text-[24px] md:text-[32px] font-extrabold tracking-[-0.04em] text-accent mb-10">
            Infrastructure compounds.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/theses"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0A0A0A] px-6 py-3 font-mono text-[11px] font-semibold tracking-[0.06em] text-white transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-lg"
            >
              READ THE THESES &rarr;
            </Link>
            <Link
              href="mailto:sevda@anefi.vc"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-mono text-[11px] font-semibold tracking-[0.06em] text-text transition-all duration-300 hover:border-accent hover:text-accent"
            >
              GET IN TOUCH &rarr;
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
