"use client";

import { motion } from "motion/react";
import { ConvictionBar } from "./conviction-bar";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const THESES_DEEP = [
  {
    code: "CAI",
    name: "The Compliance AI Moat",
    conviction: 92,
    color: "#E63312",
    tagline: "No compliance layer, no deployment.",
    description:
      "Every AI system deployed in Europe needs a compliance layer to reach production \u2014 governance, audit, and monitoring tooling that becomes the deployment gateway. The EU AI Act creates mandatory demand. The startups that build this layer own the gate.",
    controlPoint: "Governance & audit layer",
    buyerPain: "Deploy AI without regulatory blowback",
    proofSignal: "Buyers asking compliance questions in procurement",
    icon: "\u{1f6e1}\ufe0f",
  },
  {
    code: "VAI",
    name: "Vertical AI in Regulated Industries",
    conviction: 74,
    color: "#6366F1",
    tagline: "The model is not the moat. The workflow is.",
    description:
      "Healthcare, fintech, legal, MedTech. Products that write into or become the system of record \u2014 where switching means rebuilding the compliance infrastructure. Certification requirements create time moats that horizontal players cannot bridge.",
    controlPoint: "System of record",
    buyerPain: "Reduce labor, latency, documentation load",
    proofSignal: "Workflow insertion & rising switching cost",
    icon: "\u{1f3d7}\ufe0f",
  },
  {
    code: "INF",
    name: "AI Evaluation & Production Infrastructure",
    conviction: 78,
    color: "#10B981",
    tagline: "The production truth layer.",
    description:
      "Every AI agent needs evaluation, observability, and guardrails before enterprise deployment. 93% of AI infra capital targets training and inference \u2014 the evaluation layer captures the remaining 7%. That is a funding gap, not a market signal.",
    controlPoint: "Reliability & measurement",
    buyerPain: "Prove the system works safely in production",
    proofSignal: "Eval budget tied to deployment & governance",
    icon: "\u{1f50d}",
  },
];

const COMPOUNDS = [
  {
    from: "Vertical AI",
    to: "Compliance AI",
    text: "Every vertical AI product needs compliance tooling to deploy legally. TORTUS AI cannot write into NHS EHR systems without documented bias testing.",
  },
  {
    from: "Compliance AI",
    to: "Eval Infra",
    text: "Every compliance platform needs evaluation infrastructure. You cannot audit what you cannot test.",
  },
  {
    from: "Eval Infra",
    to: "Vertical AI",
    text: "Every evaluation tool generates the documented test procedures that regulations mandate and vertical products require.",
  },
];

const EU_EDGE = [
  {
    stat: "$5.3B",
    label: "OneTrust valuation",
    detail: "Created by GDPR in four years. The EU AI Act will create the next wave.",
  },
  {
    stat: "$492M",
    label: "AI governance spend 2026",
    detail: "Exceeding $1B by 2030 at 28%+ CAGR. Greenfield for purpose-built startups.",
  },
  {
    stat: "~$58B",
    label: "EU venture funding 2025",
    detail: "AI became the leading sector for European startup investment for the first time.",
  },
];

const PARAMETERS = [
  { param: "Stage", target: "Pre-Seed to Series A (EUR 500K\u20133M checks)" },
  { param: "Geography", target: "EU / UK / CEE \u2014 regulation-native founders" },
  { param: "Timing", target: "115-day pre-enforcement window. 6\u201318 month buying cycle." },
  { param: "Moat Test", target: "Inside mandatory workflow? SoR gravity? Regulatory embeddedness?" },
  { param: "Avoid", target: "Wrappers, consulting-as-software, GDPR bolt-ons, horizontal dashboards" },
];

export function ThesisPage() {
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
            INVESTMENT THESIS PACK
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="font-display text-[36px] sm:text-[48px] md:text-[64px] font-extrabold leading-[1.0] tracking-[-0.04em] text-white mb-6"
          >
            Three conviction bets on
            <br />
            <span className="text-accent">European AI infrastructure.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
            className="max-w-[560px] font-body text-[15px] md:text-[17px] font-light leading-[1.7] text-white/50"
          >
            Regulation creates markets. Workflow creates lock-in. Evaluation
            creates trust. This is where the capital goes.
          </motion.p>
        </div>
      </section>

      {/* ===== THE HOUSE VIEW ===== */}
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
          className="font-display text-[24px] sm:text-[32px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text max-w-[700px] mb-6"
        >
          Most AI capital chases model superiority.{" "}
          <span className="text-accent">That is the wrong frame.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="max-w-[640px] flex flex-col gap-4 mb-6"
        >
          <p className="font-body text-[15px] font-light leading-[1.7] text-text-muted">
            Models commoditize on every release cycle. What compounds is the
            infrastructure around them &mdash; the compliance layer that gates
            deployment, the vertical system of record that accumulates domain
            data, the evaluation tooling that proves the system works.
          </p>
          <p className="font-body text-[15px] font-light leading-[1.7] text-text-muted">
            I invest where regulatory pressure converts into structural demand.
            Europe is not behind in AI &mdash; it is building a different
            category of moat. The EU AI Act, DORA, PSD3, MDR, and MiFID2 are not
            drag. They are distribution channels for startups that embed
            compliance at the inference layer.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-[15px] font-bold tracking-[-0.02em] text-text"
        >
          The three theses share one structural belief: in regulated markets, the
          compliance surface area is the product.
        </motion.p>
      </section>

      {/* ===== THREE THESES ===== */}
      <section className="py-20 md:py-28 border-t border-border">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-semibold tracking-[0.1em] text-text-muted mb-6 block"
        >
          THREE THESES. ONE STACK.
        </motion.span>

        <div className="flex flex-col gap-6">
          {THESES_DEEP.map((thesis, i) => (
            <motion.div
              key={thesis.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="group relative rounded-[12px] border border-border bg-surface transition-all duration-300 hover:border-border-hover hover:shadow-xl overflow-hidden"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ backgroundColor: thesis.color }}
              />

              <div className="flex flex-col md:flex-row">
                {/* Left: Conviction Ring + Meta */}
                <div className="flex flex-col items-center justify-center gap-4 border-b md:border-b-0 md:border-r border-border px-8 py-8 md:py-10 md:min-w-[200px] bg-bg/50">
                  {/* Conviction Ring */}
                  <div className="relative h-24 w-24">
                    <svg
                      className="h-24 w-24 -rotate-90"
                      viewBox="0 0 96 96"
                    >
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        fill="none"
                        stroke="var(--border-subtle)"
                        strokeWidth="4"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        fill="none"
                        stroke={thesis.color}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={`${(thesis.conviction / 100) * 251.33} 251.33`}
                      />
                    </svg>
                    <span
                      className="absolute inset-0 flex items-center justify-center font-display text-xl font-bold"
                      style={{ color: thesis.color }}
                    >
                      {thesis.conviction}
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <span
                      className="font-mono text-[12px] font-semibold tracking-[0.06em]"
                      style={{ color: thesis.color }}
                    >
                      {thesis.code}
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.1em] text-text-faint">
                      CONVICTION
                    </span>
                  </div>

                  <div className="w-full max-w-[140px]">
                    <ConvictionBar
                      percentage={thesis.conviction}
                      color={thesis.color}
                      delay={400 + i * 200}
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col gap-5">
                  <div>
                    <h3 className="font-display text-[20px] md:text-[24px] font-extrabold tracking-[-0.04em] text-text mb-2">
                      {thesis.name}
                    </h3>
                    <p className="font-display text-[14px] font-bold tracking-[-0.02em] text-accent">
                      {thesis.tagline}
                    </p>
                  </div>

                  <p className="font-body text-[14px] font-light leading-[1.7] text-text-muted">
                    {thesis.description}
                  </p>

                  {/* Meta Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-auto">
                    <div className="rounded-md border border-border-subtle bg-bg/60 px-4 py-3">
                      <span className="font-mono text-[9px] tracking-[0.1em] text-text-faint block mb-1">
                        CONTROL POINT
                      </span>
                      <span className="font-body text-[13px] font-medium text-text">
                        {thesis.controlPoint}
                      </span>
                    </div>
                    <div className="rounded-md border border-border-subtle bg-bg/60 px-4 py-3">
                      <span className="font-mono text-[9px] tracking-[0.1em] text-text-faint block mb-1">
                        BUYER PAIN
                      </span>
                      <span className="font-body text-[13px] font-medium text-text">
                        {thesis.buyerPain}
                      </span>
                    </div>
                    <div className="rounded-md border border-border-subtle bg-bg/60 px-4 py-3">
                      <span className="font-mono text-[9px] tracking-[0.1em] text-text-faint block mb-1">
                        PROOF SIGNAL
                      </span>
                      <span className="font-body text-[13px] font-medium text-text">
                        {thesis.proofSignal}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== HOW IT COMPOUNDS ===== */}
      <section className="py-20 md:py-28 border-t border-border">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-semibold tracking-[0.1em] text-text-muted mb-6 block"
        >
          HOW IT COMPOUNDS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-display text-[24px] sm:text-[32px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text max-w-[600px] mb-4"
        >
          Not three themes.{" "}
          <span className="text-accent">One stack.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="max-w-[520px] font-body text-[15px] font-light leading-[1.7] text-text-muted mb-12"
        >
          These are not three unrelated bets. They are one stack seen from
          different altitudes. Each thesis reinforces the others.
        </motion.p>

        <div className="flex flex-col gap-4">
          {COMPOUNDS.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="flex items-start gap-4 rounded-[10px] border border-border bg-surface p-5 transition-all duration-300 hover:border-border-hover"
            >
              <div className="flex flex-col items-center gap-1 shrink-0 pt-0.5">
                <span className="font-mono text-[10px] font-semibold tracking-[0.04em] text-accent">
                  {c.from}
                </span>
                <span className="text-text-faint text-xs">&darr;</span>
                <span className="font-mono text-[10px] font-semibold tracking-[0.04em] text-text-muted">
                  {c.to}
                </span>
              </div>
              <p className="font-body text-[14px] font-light leading-[1.7] text-text-muted">
                {c.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== EUROPEAN STRUCTURAL EDGE ===== */}
      <section className="py-20 md:py-28 border-t border-border">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-semibold tracking-[0.1em] text-text-muted mb-6 block"
        >
          THE EUROPEAN EDGE
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-display text-[24px] sm:text-[32px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text max-w-[600px] mb-4"
        >
          This is not an apology thesis.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="max-w-[560px] font-body text-[15px] font-light leading-[1.7] text-text-muted mb-12 md:mb-16"
        >
          Europe has a genuine structural advantage. Regulation creates markets.
          Domain expertise is non-transferable. Jurisdiction-specific regulatory
          knowledge is the distribution channel horizontal players cannot
          replicate from San Francisco.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {EU_EDGE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="rounded-[10px] border border-border bg-surface p-6 transition-all duration-300 hover:border-border-hover hover:shadow-lg"
            >
              <span className="font-display text-[28px] md:text-[36px] font-extrabold tracking-[-0.04em] text-accent block mb-1">
                {item.stat}
              </span>
              <span className="font-mono text-[10px] font-semibold tracking-[0.06em] text-text-muted block mb-3">
                {item.label.toUpperCase()}
              </span>
              <p className="font-body text-[13px] font-light leading-[1.6] text-text-muted">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== INVESTMENT PARAMETERS ===== */}
      <section className="py-20 md:py-28 border-t border-border">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-semibold tracking-[0.1em] text-text-muted mb-6 block"
        >
          INVESTMENT PARAMETERS
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="rounded-[10px] border border-border bg-surface overflow-hidden mb-12"
        >
          {PARAMETERS.map((p, i) => (
            <motion.div
              key={p.param}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 border-b last:border-0 border-border-subtle px-5 md:px-6 py-4"
            >
              <span className="font-mono text-[11px] font-semibold tracking-[0.06em] text-accent sm:w-[140px] shrink-0">
                {p.param.toUpperCase()}
              </span>
              <span className="font-body text-[14px] font-light text-text-muted">
                {p.target}
              </span>
            </motion.div>
          ))}
        </motion.div>

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
          <p className="font-display text-[24px] md:text-[32px] font-extrabold tracking-[-0.04em] text-accent mb-4">
            Infrastructure compounds.
          </p>
          <p className="font-mono text-[11px] tracking-[0.04em] text-text-faint">
            Sevda Anefi &middot; March 2026 &middot; anefi.vc
          </p>
          <p className="font-mono text-[10px] tracking-[0.04em] text-text-faint mt-1">
            IB (JPMorgan, Morgan Stanley) &times; Engineering (DAZN, Duffel,
            Funding Circle) &times; VC Ops (Antler)
          </p>
        </motion.div>
      </section>
    </div>
  );
}
