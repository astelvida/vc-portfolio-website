"use client";

import { motion } from "motion/react";
import { ConvictionBar } from "./conviction-bar";
import { AsciiDivider } from "./ascii-divider";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const THESES_DEEP = [
  {
    code: "GAO",
    name: "Governed Agentic Ops",
    conviction: 92,
    color: "#E63312",
    tagline: "The deployment gateway for enterprise AI.",
    description:
      "The next durable AI infrastructure layer in regulated Europe is not a model. It is the runtime gateway that makes autonomous workflows governable, observable, auditable, and safe enough for banks, insurers, hospitals, and public bodies to deploy. Eval, observability, audit evidence, policy enforcement, human-in-the-loop — one stack, one buyer, one decisive control point.",
    controlPoint: "Runtime policy enforcement + audit evidence",
    buyerPain: "Deploy AI without regulatory or operational blowback",
    proofSignal: "Sandbox participation, runtime controls, named regulated buyer",
  },
  {
    code: "VSRAI",
    name: "Vertical System-of-Record AI",
    conviction: 82,
    color: "#6366F1",
    tagline: "Workflow gravity beats model novelty.",
    description:
      "The most durable vertical AI companies become, extend, or control the system of record where regulated work is created, verified, and acted upon. EHRs in healthcare, core banking in finserv, claims and policy admin in insurance, QMS in MedTech, matter management in legal. Not copilots beside the workflow. The workflow.",
    controlPoint: "System of record write-back + domain data flywheel",
    buyerPain: "Reduce labour, latency, documentation load",
    proofSignal: "Bidirectional SoR integration, domain data flywheel, named operator buyer",
  },
];

const COMPOUNDS = [
  {
    from: "GAO",
    to: "VSRAI",
    text: "Every vertical AI product that writes into a regulated record needs runtime governance to deploy. TORTUS cannot write into NHS EHR systems without documented controls, evals, and audit evidence.",
  },
  {
    from: "VSRAI",
    to: "GAO",
    text: "Every governance platform needs vertical-grade evaluation data to be credible. You cannot certify what you have never seen production traffic for.",
  },
  {
    from: "DUAL",
    to: "FIT",
    text: "The strongest portfolio companies score on both rubrics. A finserv platform that governs agentic compliance workflows and writes evidence into the bank's risk system is a GAO + VSRAI compound.",
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
  { param: "Stage", target: "Pre-seed to Series A (EUR 500K–3M checks)" },
  { param: "Geography", target: "EU / UK / CEE — regulation-native founders" },
  {
    param: "Timing",
    target:
      "EU AI Act Annex III window through Dec 2 2027 (Omnibus). 6–18 month buying cycle.",
  },
  { param: "Moat Test", target: "Inside mandatory workflow? SoR gravity? Runtime evidence?" },
  {
    param: "Avoid",
    target: "Wrappers, consulting-as-software, GDPR bolt-ons, horizontal dashboards",
  },
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

export function ThesisPage() {
  return (
    <div className="-mt-6 md:-mt-9">
      {/* ===== HERO ===== */}
      <section className="full-bleed relative overflow-hidden bg-ink">
        <div className="absolute inset-0 hero-grid opacity-[0.04]" />

        <div className="relative mx-auto max-w-[1100px] px-4 py-16 md:px-9 md:py-24">
          <Eyebrow ink>INVESTMENT THESIS PACK</Eyebrow>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="mb-6 font-display text-[36px] font-extrabold leading-[1.0] tracking-[-0.045em] text-white sm:text-[48px] md:text-[64px]"
          >
            Two conviction bets on
            <br />
            <span className="text-accent">European AI infrastructure.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
            className="max-w-[560px] font-body text-[15px] font-light leading-[1.7] text-white/55 md:text-[17px]"
          >
            Governed Agentic Ops earns deployment permission. Vertical
            System-of-Record AI captures workflow gravity. This is where the
            capital compounds.
          </motion.p>
        </div>
      </section>

      {/* ===== THE HOUSE VIEW ===== */}
      <section className="py-20 md:py-28">
        <Eyebrow>THE HOUSE VIEW</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-6 max-w-[700px] font-display text-[24px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text sm:text-[32px] md:text-[40px]"
        >
          Most AI capital chases model superiority.{" "}
          <span className="text-accent">That is the wrong frame.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="mb-6 flex max-w-[640px] flex-col gap-4"
        >
          <p className="font-body text-[15px] font-light leading-[1.7] text-text-muted">
            Models commoditize on every release cycle. What compounds is the
            infrastructure around them — runtime governance that earns
            deployment permission, and vertical AI that owns the system of
            record where regulated work is created, verified, and acted on.
          </p>
          <p className="font-body text-[15px] font-light leading-[1.7] text-text-muted">
            I invest where regulatory pressure converts into structural demand.
            Europe is not behind in AI — it is building a different category of
            moat. The EU AI Act, DORA, NIS2, EHDS, AMLA, MDR, and IVDR are not
            drag. They are distribution channels for startups that embed
            compliance and workflow at the runtime layer.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-[15px] font-bold tracking-[-0.02em] text-text"
        >
          The two theses share one structural belief: in regulated markets, the
          control surface is the product.
        </motion.p>
      </section>

      {/* ===== TWO THESES ===== */}
      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>TWO THESES · ONE STACK</Eyebrow>

        <div className="flex flex-col gap-4">
          {THESES_DEEP.map((thesis, i) => (
            <motion.div
              key={thesis.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="group relative overflow-hidden border border-border bg-surface transition-colors duration-300 hover:border-border-hover"
            >
              <div
                className="absolute left-0 right-0 top-0 h-[3px]"
                style={{ backgroundColor: thesis.color }}
              />

              <div className="flex flex-col md:flex-row">
                {/* Conviction */}
                <div className="flex flex-col items-center justify-center gap-4 border-b border-border bg-bg px-8 py-8 md:min-w-[210px] md:border-b-0 md:border-r md:py-10">
                  <div className="relative h-24 w-24">
                    <svg className="h-24 w-24 -rotate-90" viewBox="0 0 96 96">
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
                      className="absolute inset-0 flex items-center justify-center font-display text-xl font-extrabold tabular-nums"
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
                    <span className="font-mono text-[9px] tracking-[0.14em] text-text-faint">
                      CONVICTION
                    </span>
                  </div>
                  <div className="w-full max-w-[150px]">
                    <ConvictionBar
                      percentage={thesis.conviction}
                      color={thesis.color}
                      delay={400 + i * 200}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
                  <div>
                    <span className="mb-2 block font-mono text-[10px] font-semibold tracking-[0.1em] text-text-faint">
                      THESIS {String.fromCharCode(65 + i)}
                    </span>
                    <h3 className="mb-2 font-display text-[20px] font-extrabold tracking-[-0.04em] text-text md:text-[24px]">
                      {thesis.name}
                    </h3>
                    <p
                      className="font-display text-[14px] font-bold tracking-[-0.02em]"
                      style={{ color: thesis.color }}
                    >
                      {thesis.tagline}
                    </p>
                  </div>

                  <p className="font-body text-[14px] font-light leading-[1.7] text-text-muted">
                    {thesis.description}
                  </p>

                  <div className="mt-auto grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
                    {[
                      { k: "CONTROL POINT", v: thesis.controlPoint },
                      { k: "BUYER PAIN", v: thesis.buyerPain },
                      { k: "PROOF SIGNAL", v: thesis.proofSignal },
                    ].map((m) => (
                      <div key={m.k} className="flex flex-col gap-1 bg-surface px-4 py-3">
                        <span className="font-mono text-[9px] tracking-[0.12em] text-text-faint">
                          {m.k}
                        </span>
                        <span className="font-body text-[13px] font-medium leading-[1.45] text-text">
                          {m.v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== HOW IT COMPOUNDS ===== */}
      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>HOW IT COMPOUNDS</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-4 max-w-[600px] font-display text-[24px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text sm:text-[32px] md:text-[40px]"
        >
          Not two themes. <span className="text-accent">One stack.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="mb-12 max-w-[520px] font-body text-[15px] font-light leading-[1.7] text-text-muted"
        >
          These are not two unrelated bets. They are one stack seen from two
          altitudes. Each thesis reinforces the other.
        </motion.p>

        <div className="grid grid-cols-1 gap-px border border-border bg-border">
          {COMPOUNDS.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="flex items-start gap-4 bg-surface p-5"
            >
              <div className="flex shrink-0 flex-col items-center gap-1 pt-0.5">
                <span className="font-mono text-[10px] font-semibold tracking-[0.04em] text-accent">
                  {c.from}
                </span>
                <span className="text-xs text-text-faint">&darr;</span>
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
      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>THE EUROPEAN EDGE</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-4 max-w-[600px] font-display text-[24px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text sm:text-[32px] md:text-[40px]"
        >
          This is not an apology thesis.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="mb-12 max-w-[560px] font-body text-[15px] font-light leading-[1.7] text-text-muted md:mb-14"
        >
          Europe has a genuine structural advantage. Regulation creates markets.
          Domain expertise is non-transferable. Jurisdiction-specific regulatory
          knowledge is the distribution channel horizontal players cannot
          replicate from San Francisco.
        </motion.p>

        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {EU_EDGE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="flex flex-col gap-3 bg-surface p-6"
            >
              <span className="font-display text-[28px] font-extrabold tracking-[-0.04em] text-accent md:text-[36px]">
                {item.stat}
              </span>
              <span className="font-mono text-[10px] font-semibold tracking-[0.08em] text-text-muted">
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
      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>INVESTMENT PARAMETERS</Eyebrow>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-14 border border-border"
        >
          {PARAMETERS.map((p) => (
            <div
              key={p.param}
              className="flex flex-col gap-1 border-b border-border-subtle px-5 py-4 last:border-0 sm:flex-row sm:items-center sm:gap-0 md:px-6"
            >
              <span className="shrink-0 font-mono text-[11px] font-semibold tracking-[0.06em] text-accent sm:w-[150px]">
                {p.param.toUpperCase()}
              </span>
              <span className="font-body text-[14px] font-light text-text-muted">
                {p.target}
              </span>
            </div>
          ))}
        </motion.div>

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
          <p className="mb-4 font-display text-[24px] font-extrabold tracking-[-0.04em] text-accent md:text-[32px]">
            Infrastructure compounds.
          </p>
          <p className="font-mono text-[11px] tracking-[0.04em] text-text-faint">
            Sevda Anefi &middot; May 2026 &middot; anefi.vc
          </p>
        </motion.div>
      </section>
    </div>
  );
}
