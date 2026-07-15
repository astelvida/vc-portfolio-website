"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { AsciiDivider } from "./ascii-divider";
import { ScrambleText } from "./scramble-text";
import { TerminalFrame } from "./terminal-frame";
import { Ticker } from "./ticker";
import { EDGE_PILLARS, CAREER_ARC } from "@/data/edge";
import { FRAMEWORKS, WRITING_LIST } from "@/data/frameworks";
import { SSI_PUBLIC_METHOD } from "@/data/rubric";
import { RESEARCH_LENSES } from "@/data/signals";
import { HERO_STATS, SITE } from "@/data/site";
import { THESES } from "@/data/theses";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const HEADLINE = ["SIGNALS", "OVER", "STORIES."];

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
      <section className="full-bleed relative overflow-hidden bg-ink">
        <div className="absolute inset-0 hero-grid opacity-[0.04]" />
        <div className="relative mx-auto max-w-[1100px] px-4 pt-14 md:px-9 md:pt-24">
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            className="mb-10 flex flex-col gap-1 font-mono text-[10px] leading-[1.7] tracking-[0.04em] text-white/35 md:mb-14"
          >
            <span className="text-white/55">
              <span className="text-accent">&gt;</span> ./research-cycle --window 90d
            </span>
            <span><span className="text-success">[ok]</span> {SITE.thesisCount} active theses · SSI {SITE.ssiVersion}</span>
            <span><span className="text-success">[ok]</span> public methodology loaded · private company decisions withheld</span>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 border border-emerald-500/25 bg-emerald-500/10 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-emerald-400">
                RESEARCHING · BUILDING · PUBLISHING
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={false}
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

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
            className="mb-12 max-w-[650px] font-body text-[15px] font-light leading-[1.7] text-white/55 md:mb-16 md:text-[17px]"
          >
            European AI investor-operator working across political economy,
            venture, software, and company-building. The next 90 days turn that
            work into public, dated proof: sharper theses, credible research,
            product experiments, and better investment judgment.
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1, ease: EASE }}
            className="grid grid-cols-2 gap-px border border-ink-border bg-ink-border md:grid-cols-4"
          >
            {HERO_STATS.map((stat, i) => (
              <div key={stat.label} className="flex flex-col gap-2 bg-ink px-5 py-6 md:py-8">
                <span className="font-mono text-[9px] tracking-[0.16em] text-white/30">0{i + 1}</span>
                <span className="font-display text-[30px] font-extrabold leading-none tracking-[-0.04em] text-white md:text-[40px]">
                  {stat.value}
                </span>
                <span className="font-mono text-[9px] font-medium tracking-[0.14em] text-white/45 md:text-[10px]">{stat.label}</span>
                <span className="font-body text-[11px] font-light text-white/30">{stat.detail}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="mt-12 border-t border-white/[0.06] md:mt-16"><Ticker variant="dark" /></div>
      </section>

      <section className="py-20 md:py-28">
        <Eyebrow>THE HOUSE VIEW</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-6 max-w-[760px] font-display text-[26px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text sm:text-[34px] md:text-[42px]"
        >
          Models commoditize. <span className="text-accent">Control points compound.</span>
        </motion.h2>
        <p className="mb-12 max-w-[680px] font-body text-[15px] font-light leading-[1.7] text-text-muted">
          The work concentrates on two durable layers: governed infrastructure
          that earns permission to deploy agents, and vertical AI that owns the
          authoritative record where regulated work is completed.
        </p>
        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {THESES.map((thesis, i) => (
            <motion.article
              key={thesis.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
              className="flex flex-col bg-surface"
            >
              <div className="h-[3px]" style={{ backgroundColor: thesis.color }} />
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <span className="font-mono text-[10px] font-semibold tracking-[0.1em]" style={{ color: thesis.color }}>
                  THESIS {String.fromCharCode(65 + i)} · {thesis.code}
                </span>
                <span className="font-mono text-[9px] tracking-[0.12em] text-text-faint">ACTIVE</span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="mb-1.5 font-display text-[20px] font-extrabold tracking-[-0.04em] text-text">{thesis.name}</h3>
                  <p className="font-display text-[13px] font-bold" style={{ color: thesis.color }}>{thesis.tagline}</p>
                </div>
                <p className="font-body text-[13.5px] font-light leading-[1.65] text-text-muted">{thesis.description}</p>
              </div>
              <Link href="/theses" className="flex items-center justify-between border-t border-border px-5 py-3 font-mono text-[10px] font-semibold tracking-[0.08em] text-text-muted transition-colors hover:text-accent">
                <span>READ THE THESIS</span><span>&rarr;</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="full-bleed relative overflow-hidden bg-ink">
        <div className="absolute inset-0 hero-grid opacity-[0.04]" />
        <div className="relative mx-auto max-w-[1100px] px-4 py-20 md:px-9 md:py-28">
          <Eyebrow ink>THE NEXT 90 DAYS</Eyebrow>
          <h2 className="mb-4 max-w-[760px] font-display text-[28px] font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-[36px] md:text-[44px]">
            RESEARCH THAT EARNS <span className="text-accent">CREDIBILITY.</span>
          </h2>
          <p className="mb-12 max-w-[680px] font-body text-[15px] font-light leading-[1.7] text-white/55">
            Four connected lenses. Each should produce dated evidence, a point
            of view, and something useful enough for an investor, founder, or
            policymaker to challenge.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {RESEARCH_LENSES.map((lens, i) => (
              <motion.div
                key={lens.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              >
                <TerminalFrame variant="ink" title={`${lens.code} · RESEARCH LENS`} className="h-full">
                  <div className="flex h-full flex-col gap-4 p-5">
                    <h3 className="font-display text-[17px] font-extrabold tracking-[-0.03em] text-white">{lens.title}</h3>
                    <p className="font-body text-[13px] font-light leading-[1.65] text-white/55">{lens.question}</p>
                    <p className="mt-auto border-t border-ink-border pt-3 font-mono text-[10px] leading-[1.6] tracking-[0.05em] text-white/35">{lens.outputs}</p>
                  </div>
                </TerminalFrame>
              </motion.div>
            ))}
          </div>
          <Link href="/research" className="mt-8 inline-flex bg-accent px-6 py-3 font-mono text-[11px] font-semibold tracking-[0.08em] text-white transition-colors hover:bg-[#c92a0e]">
            OPEN THE RESEARCH AGENDA &rarr;
          </Link>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>THE EDGE</Eyebrow>
        <h2 className="mb-12 font-display text-[28px] font-extrabold leading-[1.05] tracking-[-0.04em] text-text sm:text-[36px] md:text-[44px]">
          CAPITAL, CODE, AND <span className="text-accent">CONTEXT.</span>
        </h2>
        <div className="mb-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {EDGE_PILLARS.map((pillar, i) => (
            <motion.div key={pillar.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex flex-col gap-4 bg-surface p-6">
              <div className="flex items-center justify-between"><span className="text-accent">{pillar.glyph}</span><span className="font-mono text-[9px] text-text-faint">0{i + 1} / 03</span></div>
              <div><span className="block font-mono text-[11px] font-semibold text-accent">{pillar.label}</span><span className="font-display text-xs font-bold text-text">{pillar.org}</span></div>
              <p className="font-body text-[13px] font-light leading-[1.7] text-text-muted">{pillar.body}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {CAREER_ARC.map((era) => (
            <div key={era.phase} className="flex items-center gap-3 bg-surface px-5 py-4">
              <div className="h-8 w-[3px] bg-accent" />
              <div><span className="block font-mono text-[9px] text-text-faint">{era.period}</span><span className="block font-mono text-[11px] font-semibold text-text">{era.phase}</span><span className="font-body text-[12px] text-text-muted">{era.detail}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>PUBLIC METHOD</Eyebrow>
        <h2 className="mb-4 max-w-[700px] font-display text-[28px] font-extrabold tracking-[-0.04em] text-text sm:text-[36px]">Evidence before score.</h2>
        <p className="mb-10 max-w-[650px] font-body text-[15px] font-light leading-[1.7] text-text-muted">
          SSI {SITE.ssiVersion} is the private scoring system. The public contract is simpler:
          every conclusion exposes its evidence class, uncertainty, falsifier, and next verification.
        </p>
        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-5">
          {SSI_PUBLIC_METHOD.map((step) => (
            <div key={step.code} className="flex flex-col gap-3 bg-surface p-5">
              <span className="font-mono text-[10px] font-semibold text-accent">{step.code}</span>
              <h3 className="font-display text-[15px] font-extrabold text-text">{step.name}</h3>
              <p className="font-body text-[12.5px] font-light leading-[1.6] text-text-muted">{step.description}</p>
            </div>
          ))}
        </div>
        <Link href="/methodology" className="mt-8 inline-flex border border-border px-6 py-3 font-mono text-[11px] font-semibold tracking-[0.06em] text-text transition-colors hover:border-accent hover:text-accent">PUBLIC METHODOLOGY &rarr;</Link>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Eyebrow>PROOF OF WORK</Eyebrow>
        <AsciiDivider label="SYSTEMS" className="mb-8" />
        <ul className="mb-14 flex flex-col gap-3">
          {FRAMEWORKS.map((item, i) => (
            <li key={item} className="flex items-start gap-3"><span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</span><span className="font-body text-[14px] font-light leading-[1.6] text-text">{item}</span></li>
          ))}
        </ul>
        <AsciiDivider label="RESEARCH DIRECTIONS" className="mb-8" />
        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
          {WRITING_LIST.map((item) => <div key={item} className="bg-surface p-5 font-body text-[14px] font-light text-text-muted">{item}</div>)}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/writing" className="inline-flex bg-ink px-6 py-3 font-mono text-[11px] font-semibold text-white">READ THE WRITING &rarr;</Link>
          <a href={`mailto:${SITE.email}`} className="inline-flex border border-border px-6 py-3 font-mono text-[11px] font-semibold text-text transition-colors hover:border-accent hover:text-accent">START A CONVERSATION &rarr;</a>
        </div>
      </section>
    </div>
  );
}
