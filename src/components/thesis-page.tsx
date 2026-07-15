"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { AsciiDivider } from "./ascii-divider";
import { THESES } from "@/data/theses";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const STACK_LINKS = [
  {
    label: "GAO → VSRAI",
    body: "An AI product that writes into an authoritative regulated record needs identity, permissions, runtime controls, intervention, and evidence.",
  },
  {
    label: "VSRAI → GAO",
    body: "Governance becomes valuable when it is grounded in the failure modes, data, and accountability requirements of real vertical workflows.",
  },
  {
    label: "THE COMPOUND",
    body: "The strongest opportunities can own a regulated workflow and the control surface that makes that workflow safe to automate.",
  },
];

const PARAMETERS = [
  { label: "STAGE", value: "Pre-seed, Seed, early Series A" },
  { label: "GEOGRAPHY", value: "Europe, with priority on the UK, CEE, and Romania" },
  { label: "CONTROL TEST", value: "Does the product own runtime permission or the authoritative record?" },
  { label: "BUYER TEST", value: "Is there a named budget owner with a costly workflow problem?" },
  { label: "MOAT TEST", value: "Do data rights, integrations, evidence, and implementation compound?" },
  { label: "AVOID", value: "Thin wrappers, services disguised as software, and compliance theatre" },
];

function Eyebrow({ children, ink = false }: { children: string; ink?: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`mb-6 block font-mono text-[10px] font-semibold tracking-[0.22em] ${ink ? "text-white/45" : "text-text-muted"}`}
    >
      [ {children} ]
    </motion.span>
  );
}

export function ThesisPage() {
  return (
    <div className="-mt-6 md:-mt-9">
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
            Two control points in
            <br />
            <span className="text-accent">European AI.</span>
          </motion.h1>
          <p className="max-w-[620px] font-body text-[15px] font-light leading-[1.7] text-white/55 md:text-[17px]">
            Governed Agentic Ops earns deployment permission. Vertical
            System-of-Record AI captures workflow gravity. Both are hypotheses
            to test, not narratives to defend.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <Eyebrow>THE HOUSE VIEW</Eyebrow>
        <h2 className="mb-6 max-w-[760px] font-display text-[26px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text sm:text-[34px] md:text-[42px]">
          The durable layer is where <span className="text-accent">accountability meets workflow.</span>
        </h2>
        <div className="max-w-[700px] space-y-4 font-body text-[15px] font-light leading-[1.7] text-text-muted">
          <p>
            Model capability improves and prices fall. That compresses generic
            application advantage. Durable value should concentrate where a
            product controls how AI acts or where regulated work becomes the
            authoritative record.
          </p>
          <p>
            Europe is useful here because regulation, procurement, industrial
            policy, and fragmented market structure change distribution and
            defensibility. They do not make every compliance product good.
            They change which evidence matters.
          </p>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>TWO THESES · ONE STACK</Eyebrow>
        <div className="flex flex-col gap-5">
          {THESES.map((thesis, i) => (
            <motion.article
              key={thesis.code}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="overflow-hidden border border-border bg-surface"
            >
              <div className="h-[3px]" style={{ backgroundColor: thesis.color }} />
              <div className="grid grid-cols-1 md:grid-cols-[190px_1fr]">
                <div className="flex flex-col justify-between gap-8 border-b border-border bg-bg p-6 md:border-b-0 md:border-r md:p-8">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.12em] text-text-faint">THESIS {String.fromCharCode(65 + i)}</span>
                    <span className="mt-2 block font-display text-[28px] font-extrabold" style={{ color: thesis.color }}>{thesis.code}</span>
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.14em] text-text-faint">ACTIVE · TESTABLE</span>
                </div>
                <div className="flex flex-col gap-6 p-6 md:p-8">
                  <div>
                    <h3 className="mb-2 font-display text-[24px] font-extrabold tracking-[-0.04em] text-text">{thesis.name}</h3>
                    <p className="font-display text-[14px] font-bold" style={{ color: thesis.color }}>{thesis.tagline}</p>
                  </div>
                  <p className="font-body text-[14px] font-light leading-[1.7] text-text-muted">{thesis.description}</p>
                  <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
                    {[
                      ["CONTROL POINT", thesis.controlPoint],
                      ["BUYER PAIN", thesis.buyerPain],
                      ["PROOF SIGNAL", thesis.proofSignal],
                      ["FALSIFIER", thesis.falsifier],
                    ].map(([label, value]) => (
                      <div key={label} className="flex flex-col gap-1.5 bg-surface p-4">
                        <span className="font-mono text-[9px] tracking-[0.12em] text-text-faint">{label}</span>
                        <span className="font-body text-[12.5px] leading-[1.55] text-text">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>HOW THE STACK COMPOUNDS</Eyebrow>
        <h2 className="mb-12 max-w-[650px] font-display text-[26px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text sm:text-[34px]">
          Not two categories. <span className="text-accent">Two sides of accountable automation.</span>
        </h2>
        <div className="grid grid-cols-1 gap-px border border-border bg-border">
          {STACK_LINKS.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }} className="grid grid-cols-1 gap-2 bg-surface p-5 sm:grid-cols-[150px_1fr] sm:gap-6">
              <span className="font-mono text-[10px] font-semibold tracking-[0.06em] text-accent">{item.label}</span>
              <p className="font-body text-[14px] font-light leading-[1.65] text-text-muted">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>INVESTMENT PARAMETERS</Eyebrow>
        <div className="mb-14 border border-border">
          {PARAMETERS.map((item) => (
            <div key={item.label} className="grid grid-cols-1 gap-1 border-b border-border-subtle px-5 py-4 last:border-0 sm:grid-cols-[150px_1fr] sm:items-center">
              <span className="font-mono text-[11px] font-semibold tracking-[0.06em] text-accent">{item.label}</span>
              <span className="font-body text-[14px] font-light text-text-muted">{item.value}</span>
            </div>
          ))}
        </div>
        <AsciiDivider label="SIGNALS OVER STORIES" className="mb-10" />
        <p className="mb-8 max-w-[620px] font-display text-[22px] font-extrabold tracking-[-0.04em] text-text">
          Every thesis needs a falsifier. Every decision needs a next verification.
        </p>
        <Link href="/methodology" className="inline-flex bg-ink px-6 py-3 font-mono text-[11px] font-semibold tracking-[0.06em] text-white transition-colors hover:bg-ink-raised">
          SEE SSI v4.0 METHOD &rarr;
        </Link>
      </section>
    </div>
  );
}
