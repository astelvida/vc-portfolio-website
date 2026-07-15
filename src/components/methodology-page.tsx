"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { AsciiDivider } from "./ascii-divider";
import { EVIDENCE_LABELS, SIGNAL_LAYERS, SSI_PUBLIC_METHOD } from "@/data/rubric";
import { SITE } from "@/data/site";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const SOURCE_SURFACES = [
  {
    title: "PRIMARY INSTITUTIONAL",
    body: "EUR-Lex, European Commission, national regulators, procurement portals, company registries, standards bodies.",
  },
  {
    title: "PRIMARY COMPANY",
    body: "Repositories, product documentation, security material, filings, pricing, hiring, and named customer evidence.",
  },
  {
    title: "INDEPENDENT",
    body: "Credible reporting, market data, research papers, and expert evidence used to challenge company claims.",
  },
];

const BOUNDARIES = [
  ["PUBLIC", "Theses, methodology, research questions, selected source-backed findings, and approved proof of work."],
  ["PRIVATE", "Company scores, priority rankings, draft decisions, confidential notes, and unapproved pipeline records."],
  ["NEVER", "Invented traction, customers, partnerships, funding, technical capability, or false precision."],
] as const;

function Eyebrow({ children, ink = false }: { children: ReactNode; ink?: boolean }) {
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

export function MethodologyPage() {
  return (
    <div className="-mt-6 md:-mt-9">
      <section className="full-bleed relative overflow-hidden bg-ink">
        <div className="absolute inset-0 hero-grid opacity-[0.04]" />
        <div className="relative mx-auto max-w-[1100px] px-4 py-16 md:px-9 md:py-24">
          <Eyebrow ink>SSI {SITE.ssiVersion} · PUBLIC METHOD</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="mb-6 font-display text-[36px] font-extrabold leading-[1.0] tracking-[-0.045em] text-white sm:text-[48px] md:text-[64px]"
          >
            Evidence before score.
            <br />
            <span className="text-accent">Falsifiers before conviction.</span>
          </motion.h1>
          <p className="mb-10 max-w-[650px] font-body text-[15px] font-light leading-[1.7] text-white/55 md:text-[17px]">
            SSI v4.0 is an investment operating method, not a public leaderboard.
            The scoring detail and company decisions stay private. The evidence
            contract, reasoning discipline, and promotion gates are public.
          </p>
          <div className="inline-flex flex-wrap items-center gap-3 border border-ink-border bg-white/[0.03] px-4 py-2.5">
            <span className="font-mono text-[10px] font-semibold tracking-[0.1em] text-accent">GROUND RULE</span>
            <span className="font-display text-[13px] font-bold text-white">No score without a source. No conclusion without uncertainty.</span>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <Eyebrow>THE OPERATING CONTRACT</Eyebrow>
        <h2 className="mb-4 max-w-[680px] font-display text-[28px] font-extrabold leading-[1.05] tracking-[-0.04em] text-text sm:text-[36px] md:text-[44px]">
          Five gates from evidence to action.
        </h2>
        <p className="mb-12 max-w-[650px] font-body text-[15px] font-light leading-[1.7] text-text-muted">
          Each gate preserves the difference between what is known, what is
          inferred, what remains uncertain, and what should be verified next.
        </p>
        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-5">
          {SSI_PUBLIC_METHOD.map((step, i) => (
            <motion.article key={step.code} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }} className="flex flex-col gap-4 bg-surface p-5">
              <div className="flex items-center justify-between"><span className="font-mono text-[10px] font-semibold text-accent">{step.code}</span><span className="h-1.5 w-1.5 bg-accent" /></div>
              <h3 className="font-display text-[16px] font-extrabold tracking-[-0.03em] text-text">{step.name}</h3>
              <p className="font-body text-[12.5px] font-light leading-[1.6] text-text-muted">{step.description}</p>
              <p className="mt-auto border-t border-border-subtle pt-3 font-mono text-[9.5px] leading-[1.6] text-text-faint">TEST: {step.test}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>EVIDENCE LABELS</Eyebrow>
        <h2 className="mb-10 max-w-[640px] font-display text-[26px] font-extrabold tracking-[-0.04em] text-text sm:text-[34px]">
          Facts, inferences, and uncertainty do different jobs.
        </h2>
        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {EVIDENCE_LABELS.map((item) => (
            <div key={item.label} className="flex flex-col gap-3 bg-surface p-6" style={{ borderTop: `3px solid ${item.color}` }}>
              <span className="font-mono text-[11px] font-semibold tracking-[0.08em]" style={{ color: item.color }}>{item.label}</span>
              <p className="font-body text-[14px] font-light leading-[1.65] text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>THREE SIGNAL LAYERS</Eyebrow>
        <h2 className="mb-4 max-w-[650px] font-display text-[26px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text sm:text-[34px]">
          The edge is not more data. <span className="text-accent">It is better ordering.</span>
        </h2>
        <p className="mb-12 max-w-[620px] font-body text-[15px] font-light leading-[1.7] text-text-muted">
          Institutional and technical evidence leads. Commercial momentum
          confirms. Popularity is not a substitute for thesis fit.
        </p>
        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {SIGNAL_LAYERS.map((layer, i) => (
            <motion.div key={layer.code} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex flex-col gap-4 bg-surface p-6">
              <span className="font-display text-[30px] font-extrabold text-accent">{layer.code}</span>
              <h3 className="font-display text-[18px] font-extrabold tracking-[-0.03em] text-text">{layer.name}</h3>
              <p className="font-body text-[13.5px] font-light leading-[1.65] text-text-muted">{layer.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="full-bleed relative overflow-hidden bg-ink">
        <div className="absolute inset-0 hero-grid opacity-[0.04]" />
        <div className="relative mx-auto max-w-[1100px] px-4 py-20 md:px-9 md:py-28">
          <Eyebrow ink>SOURCE HIERARCHY</Eyebrow>
          <h2 className="mb-12 max-w-[700px] font-display text-[28px] font-extrabold tracking-[-0.04em] text-white sm:text-[36px]">Primary sources first. Company claims labelled.</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {SOURCE_SURFACES.map((source, i) => (
              <div key={source.title} className="border border-ink-border bg-white/[0.02] p-6">
                <span className="mb-4 block font-mono text-[10px] font-semibold tracking-[0.08em] text-accent">0{i + 1} · {source.title}</span>
                <p className="font-body text-[13.5px] font-light leading-[1.7] text-white/55">{source.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>PUBLIC / PRIVATE BOUNDARY</Eyebrow>
        <h2 className="mb-10 max-w-[650px] font-display text-[26px] font-extrabold tracking-[-0.04em] text-text sm:text-[34px]">
          Publish the method. Protect the decision system.
        </h2>
        <div className="mb-14 border border-border">
          {BOUNDARIES.map(([label, body]) => (
            <div key={label} className="grid grid-cols-1 gap-2 border-b border-border-subtle px-5 py-5 last:border-0 sm:grid-cols-[130px_1fr] sm:gap-6">
              <span className="font-mono text-[11px] font-semibold tracking-[0.08em] text-accent">{label}</span>
              <p className="font-body text-[14px] font-light leading-[1.65] text-text-muted">{body}</p>
            </div>
          ))}
        </div>
        <AsciiDivider label="SIGNALS OVER STORIES" className="mb-10" />
        <p className="mb-8 font-display text-[22px] font-extrabold tracking-[-0.04em] text-text">The score routes attention. The evidence earns the decision.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/theses" className="inline-flex bg-ink px-6 py-3 font-mono text-[11px] font-semibold text-white">READ THE THESES &rarr;</Link>
          <Link href="/research" className="inline-flex border border-border px-6 py-3 font-mono text-[11px] font-semibold text-text transition-colors hover:border-accent hover:text-accent">RESEARCH AGENDA &rarr;</Link>
        </div>
      </section>
    </div>
  );
}
