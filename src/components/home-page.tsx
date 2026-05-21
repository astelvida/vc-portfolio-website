"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { AnimatedNumber } from "./animated-number";
import { Ticker } from "./ticker";
import { ConvictionBar } from "./conviction-bar";
import { ScrambleText } from "./scramble-text";
import { TerminalFrame } from "./terminal-frame";
import { AsciiDivider } from "./ascii-divider";
import { THESES } from "@/data/theses";
import { SIGNALS } from "@/data/signals";
import { SITE, HERO_STATS } from "@/data/site";
import { EDGE_PILLARS, CAREER_ARC } from "@/data/edge";
import { FRAMEWORKS, WRITING_LIST } from "@/data/frameworks";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// EU AI Act Annex III (high-risk) enforcement: deferred to Dec 2, 2027 by the
// Digital Omnibus political agreement of 7 May 2026.
const ANNEX_III_ENFORCEMENT = new Date("2027-12-02T00:00:00Z");

function daysUntilEnforcement(): number {
  const diffMs = ANNEX_III_ENFORCEMENT.getTime() - Date.now();
  return Math.max(0, Math.ceil(diffMs / 86_400_000));
}

const HEADLINE = ["SIGNALS", "OVER", "STORIES."];

const ENGINE_STAGES = [
  {
    step: "01",
    label: "SCOUT",
    head: "regscan · ghscan · procscan · talentscan",
    body: "Atomic signals logged from regulators, repositories, procurement portals, and hiring moves.",
  },
  {
    step: "02",
    label: "SCORE",
    head: "SSI v3.0 · dual-rubric",
    body: "Eight GAO and eight VSRAI dimensions, scored on a 100-point scale. No score without a source.",
  },
  {
    step: "03",
    label: "MEMO",
    head: "IC-style investment memo",
    body: "Falsifier register, kill criteria, and a dated next action — drafted by the agent loop.",
  },
];

function thesisColor(code: string): string {
  return THESES.find((t) => t.code === code)?.color ?? "var(--text-muted)";
}

function Eyebrow({ children, ink = false }: { children: string; ink?: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className={`mb-6 block font-mono text-[10px] font-semibold tracking-[0.22em] ${
        ink ? "text-white/45" : "text-text-muted"
      }`}
    >
      [ {children} ]
    </motion.span>
  );
}

export function HomePage() {
  return (
    <div className="-mt-6 md:-mt-9">
      {/* ===== HERO ===== */}
      <section className="full-bleed relative overflow-hidden bg-ink">
        <div className="absolute inset-0 hero-grid opacity-[0.04]" />

        <div className="relative mx-auto max-w-[1100px] px-4 pt-14 md:px-9 md:pt-24">
          {/* Boot sequence */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            className="mb-10 flex flex-col gap-1 font-mono text-[10px] leading-[1.7] tracking-[0.04em] text-white/35 md:mb-14"
          >
            <span className="text-white/55">
              <span className="text-accent">&gt;</span> ./scouting-engine --run weekly
            </span>
            <span>
              <span className="text-success">[ok]</span> SSI {SITE.ssiVersion} · dual-rubric loaded
            </span>
            <span suppressHydrationWarning>
              <span className="text-success">[ok]</span> {SITE.pipelineCount} companies
              on pipeline · {SITE.thesisCount} theses live · EU AI Act Annex III in{" "}
              {daysUntilEnforcement()} days
              <span className="ml-1 inline-block animate-[caret-blink_1s_step-end_infinite] text-accent">
                █
              </span>
            </span>
          </motion.div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 border border-emerald-500/25 bg-emerald-500/10 px-3 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-emerald-400">
                ACTIVELY SOURCING
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
            className="mb-8 md:mb-10"
          >
            {HEADLINE.map((word, i) => (
              <ScrambleText
                key={word}
                text={word}
                delay={350 + i * 140}
                duration={620}
                className={`block font-display text-[clamp(3.25rem,12vw,8rem)] font-extrabold leading-[0.9] tracking-[-0.045em] ${
                  word === "STORIES." ? "text-accent" : "text-white"
                }`}
              />
            ))}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
            className="mb-12 max-w-[560px] font-body text-[15px] font-light leading-[1.7] text-white/55 md:mb-16 md:text-[17px]"
          >
            Ex-J.P. Morgan and Morgan Stanley analyst turned software engineer
            and European AI investor-operator. Compliance-first thesis,
            technical diligence depth, and on-the-ground access to the CEE
            corridor.
          </motion.p>

          {/* Stat grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1, ease: EASE }}
            className="grid grid-cols-2 gap-px border border-ink-border bg-ink-border md:grid-cols-4"
          >
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 bg-ink px-5 py-6 md:py-8"
              >
                <span className="font-mono text-[9px] tracking-[0.16em] text-white/30">
                  0{i + 1}
                </span>
                <span className="font-display text-[34px] font-extrabold leading-none tracking-[-0.04em] text-white tabular-nums md:text-[44px]">
                  <AnimatedNumber target={stat.value} duration={1400} />
                </span>
                <span className="font-mono text-[9px] font-medium tracking-[0.14em] text-white/40 md:text-[10px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] md:mt-16">
          <Ticker variant="dark" />
        </div>
      </section>

      {/* ===== HOUSE VIEW ===== */}
      <section className="py-20 md:py-28">
        <Eyebrow>THE HOUSE VIEW</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-6 max-w-[760px] font-display text-[26px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text sm:text-[34px] md:text-[42px]"
        >
          Most AI capital chases model superiority.{" "}
          <span className="text-accent">That is the wrong frame.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="mb-12 max-w-[620px] font-body text-[15px] font-light leading-[1.7] text-text-muted md:mb-14"
        >
          Models commoditize on every release cycle. What compounds is the
          infrastructure around them — runtime governance that earns deployment
          permission, and vertical AI that owns the system of record where
          regulated work is created, verified, and acted on.
        </motion.p>

        <div className="mb-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {THESES.map((thesis, i) => (
            <motion.div
              key={thesis.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
              className="group relative flex flex-col bg-surface"
            >
              <div
                className="h-[3px] w-full"
                style={{ backgroundColor: thesis.color }}
              />
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <span
                  className="font-mono text-[10px] font-semibold tracking-[0.1em]"
                  style={{ color: thesis.color }}
                >
                  THESIS {String.fromCharCode(65 + i)} · {thesis.code}
                </span>
                <span
                  className="font-mono text-[11px] font-semibold tabular-nums"
                  style={{ color: thesis.color }}
                >
                  {thesis.conviction}% CONVICTION
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="mb-1.5 font-display text-[19px] font-extrabold tracking-[-0.04em] text-text md:text-[21px]">
                    {thesis.name}
                  </h3>
                  <p
                    className="font-display text-[13px] font-bold tracking-[-0.02em]"
                    style={{ color: thesis.color }}
                  >
                    {thesis.tagline}
                  </p>
                </div>
                <p className="font-body text-[13.5px] font-light leading-[1.65] text-text-muted">
                  {thesis.description}
                </p>
                <ConvictionBar
                  percentage={thesis.conviction}
                  color={thesis.color}
                  delay={200 + i * 150}
                />
              </div>
              <Link
                href="/theses"
                className="flex items-center justify-between border-t border-border px-5 py-3 font-mono text-[10px] font-semibold tracking-[0.06em] text-text-muted transition-colors hover:text-accent"
              >
                <span>READ THE THESIS &rarr;</span>
                <span className="tracking-[0.1em] text-text-faint">
                  {thesis.controlPoint}
                </span>
              </Link>
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
          Regulation is distribution. Workflow is gravity. Together they
          underwrite the boring layer the next decade is built on.
        </motion.p>
      </section>

      {/* ===== THE EDGE ===== */}
      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>THE EDGE</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-4 font-display text-[28px] font-extrabold leading-[1.05] tracking-[-0.04em] text-text sm:text-[36px] md:text-[44px]"
        >
          CAPITAL, CODE, AND <span className="text-accent">CONVICTION.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="mb-12 max-w-[540px] font-body text-[15px] font-light leading-[1.7] text-text-muted md:mb-16"
        >
          Three strengths that rarely sit in one profile: institutional finance,
          software engineering, and European AI market mapping. That mix moves
          fluently between capital, code, and conviction.
        </motion.p>

        <div className="mb-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {EDGE_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="flex flex-col gap-4 bg-surface p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center border border-border text-base text-accent">
                  {pillar.glyph}
                </span>
                <span className="font-mono text-[9px] tracking-[0.16em] text-text-faint">
                  0{i + 1} / 03
                </span>
              </div>
              <div>
                <span className="block font-mono text-[11px] font-semibold tracking-[0.08em] text-accent">
                  {pillar.label}
                </span>
                <span className="font-display text-xs font-bold tracking-[-0.02em] text-text">
                  {pillar.org}
                </span>
              </div>
              <p className="font-body text-[13px] font-light leading-[1.7] text-text-muted">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3"
        >
          {CAREER_ARC.map((era) => (
            <div
              key={era.phase}
              className="flex items-center gap-3 bg-surface px-5 py-4"
            >
              <div className="h-8 w-[3px] shrink-0 bg-accent" />
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[9px] tracking-[0.1em] text-text-faint">
                  {era.period}
                </span>
                <span className="font-mono text-[11px] font-semibold tracking-[0.04em] text-text">
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

      {/* ===== SCOUTING ENGINE ===== */}
      <section className="full-bleed relative overflow-hidden bg-ink">
        <div className="absolute inset-0 hero-grid opacity-[0.04]" />
        <div className="relative mx-auto max-w-[1100px] px-4 py-20 md:px-9 md:py-28">
          <Eyebrow ink>THE SCOUTING ENGINE</Eyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-4 font-display text-[28px] font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-[36px] md:text-[44px]"
          >
            SCOUT. SCORE. <span className="text-accent">MEMO.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="mb-12 max-w-[620px] font-body text-[15px] font-light leading-[1.7] text-white/55"
          >
            A three-agent loop running on Claude and the Notion MCP. It surfaces
            pre-consensus European AI from regulatory and technical signal, scores
            each company against the thesis it fits, and drafts the memo — so
            conviction is built from filings, not feelings.
          </motion.p>

          <div className="mb-10 grid grid-cols-1 items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {ENGINE_STAGES.map((stage, i) => (
              <div key={stage.label} className="contents">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: EASE }}
                >
                  <TerminalFrame
                    variant="ink"
                    title={`${stage.step} · ${stage.label}`}
                    className="h-full"
                  >
                    <div className="flex flex-col gap-2 p-5">
                      <span className="font-mono text-[11px] font-semibold tracking-[0.04em] text-accent">
                        {stage.head}
                      </span>
                      <p className="font-body text-[13px] font-light leading-[1.65] text-white/55">
                        {stage.body}
                      </p>
                    </div>
                  </TerminalFrame>
                </motion.div>
                {i < ENGINE_STAGES.length - 1 ? (
                  <div className="flex items-center justify-center font-mono text-base text-accent">
                    <span className="hidden md:inline">──▶</span>
                    <span className="md:hidden">▼</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 border-t border-ink-border pt-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.06em] text-white/45">
              <span>
                <span className="text-white">{SITE.rubricDimensions}</span> SSI
                DIMENSIONS
              </span>
              <span>
                <span className="text-white">{SITE.thesisCount}</span> RUBRICS
              </span>
              <span>
                <span className="text-white">{SITE.signalLayers}</span> SIGNAL
                LAYERS
              </span>
            </div>
            <Link
              href="/engine"
              className="inline-flex w-fit items-center gap-2 bg-accent px-6 py-3 font-mono text-[11px] font-semibold tracking-[0.08em] text-white transition-colors hover:bg-[#c92a0e]"
            >
              OPEN THE ENGINE &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== SIGNAL PIPELINE ===== */}
      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>SIGNAL PIPELINE</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10 font-display text-[26px] font-extrabold tracking-[-0.04em] text-text sm:text-[32px]"
        >
          Top of the live pipeline, by SSI score.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-8"
        >
          <TerminalFrame title="PIPELINE — TOP 12" meta="SSI v3.0">
            <div className="overflow-x-auto">
              <div className="min-w-[560px]">
                <div className="grid grid-cols-[40px_1fr_88px_64px_120px_56px] border-b border-border bg-bg px-4 py-2.5 md:px-6">
                  {["#", "COMPANY", "SECTOR", "SSI", "HQ", "FIT"].map((h) => (
                    <span
                      key={h}
                      className="font-mono text-[9px] font-semibold tracking-[0.1em] text-text-faint"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                {SIGNALS.map((s, i) => (
                  <motion.div
                    key={s.company}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04, ease: EASE }}
                    className="grid grid-cols-[40px_1fr_88px_64px_120px_56px] items-center border-b border-border-subtle px-4 py-3 transition-colors last:border-0 hover:bg-accent-bg md:px-6"
                  >
                    <span className="font-mono text-[10px] tabular-nums text-text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[13px] font-bold tracking-[-0.02em] text-text">
                      {s.company}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted">
                      {s.sector}
                    </span>
                    <span
                      className={`font-mono text-[12px] font-semibold tabular-nums ${
                        s.ssi >= 80 ? "text-accent" : "text-text"
                      }`}
                    >
                      {s.ssi}
                    </span>
                    <span className="font-body text-[12px] text-text-muted">
                      {s.hq}
                    </span>
                    <span
                      className="font-mono text-[10px] font-semibold tracking-[0.04em]"
                      style={{ color: thesisColor(s.thesis) }}
                    >
                      {s.thesis}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </TerminalFrame>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <p className="font-mono text-[11px] tracking-[0.04em] text-text-muted">
            {SITE.pipelineCount} companies tracked · scored on the SSI{" "}
            {SITE.ssiVersion} dual-rubric.
          </p>
          <Link
            href="/signals"
            className="font-mono text-[11px] font-semibold tracking-[0.06em] text-text-muted transition-colors hover:text-accent"
          >
            VIEW THE FULL PIPELINE &rarr;
          </Link>
        </motion.div>
      </section>

      {/* ===== PROOF OF WORK ===== */}
      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>PROOF OF WORK</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 font-display text-[28px] font-extrabold leading-[1.05] tracking-[-0.04em] text-text sm:text-[36px] md:text-[44px]"
        >
          THE RECEIPTS.
        </motion.h2>

        <AsciiDivider label="FRAMEWORKS & SYSTEMS" className="mb-8" />
        <ul className="mb-14 flex flex-col gap-3">
          {FRAMEWORKS.map((f, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
              className="flex items-start gap-3"
            >
              <span className="mt-1 font-mono text-[12px] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-body text-[14px] font-light leading-[1.6] text-text">
                {f}
              </span>
            </motion.li>
          ))}
        </ul>

        <AsciiDivider label="PUBLISHED WRITING" className="mb-8" />
        <ul className="mb-16 flex flex-col">
          {WRITING_LIST.map((w, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
            >
              <Link
                href="/writing"
                className="flex items-baseline gap-3 border-b border-border-subtle py-3 transition-colors hover:text-accent"
              >
                <span className="font-mono text-[11px] text-text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-body text-[14px] font-light leading-[1.5] text-text-muted">
                  {w}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="border-t border-border pt-10 md:pt-14"
        >
          <p className="mb-2 font-display text-[18px] font-bold tracking-[-0.04em] text-text md:text-[22px]">
            Signals over stories. Filings over feelings. Buyers over vibes.
          </p>
          <p className="mb-10 font-display text-[24px] font-extrabold tracking-[-0.04em] text-accent md:text-[32px]">
            Infrastructure compounds.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/theses"
              className="inline-flex items-center gap-2 bg-ink px-6 py-3 font-mono text-[11px] font-semibold tracking-[0.06em] text-white transition-colors hover:bg-ink-raised"
            >
              READ THE THESES &rarr;
            </Link>
            <Link
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] font-semibold tracking-[0.06em] text-text transition-colors hover:border-accent hover:text-accent"
            >
              GET IN TOUCH &rarr;
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
