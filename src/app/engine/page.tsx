import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/section-wrapper";
import { TerminalFrame } from "@/components/terminal-frame";
import { AsciiDivider } from "@/components/ascii-divider";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "The Scouting Engine",
  description:
    "Evidence → Signal → Scorecard → Decision. A private scouting workflow with a public SSI v4.0 operating contract.",
  openGraph: {
    title: "The Scouting Engine | Sevda Anefi",
    description:
      "Regulation-in sourcing: scout the signal, score the thesis, draft the memo.",
  },
};

const STAGES = [
  {
    step: "01",
    label: "SCOUT",
    head: "primary sources · technical artefacts · buyer evidence",
    body: "Atomic evidence is captured with a source date, verification date, and an explicit Fact, Inference, or Uncertainty label.",
  },
  {
    step: "02",
    label: "SCORE",
    head: "SSI v4.0 · one primary thesis",
    body: "Thesis fit, evidence confidence, risk overlays, and falsifier state remain distinct. A triggered falsifier overrides the score.",
  },
  {
    step: "03",
    label: "MEMO",
    head: "IC-style investment memo",
    body: "The evidence table, risks, falsifiers, decision, and the cheapest next verification are assembled into an IC-style memo.",
  },
];

export default function EnginePage() {
  return (
    <div className="-mt-6 flex flex-col md:-mt-9">
      {/* Header */}
      <section className="full-bleed relative overflow-hidden bg-ink">
        <div className="absolute inset-0 hero-grid opacity-[0.04]" />
        <div className="relative mx-auto max-w-[1100px] px-4 pb-16 pt-16 md:px-9 md:pb-20 md:pt-24">
          <span className="mb-6 block font-mono text-[10px] font-semibold tracking-[0.22em] text-white/45">
            [ THE SCOUTING ENGINE ]
          </span>
          <h1 className="mb-6 font-display text-[44px] font-extrabold leading-[0.95] tracking-[-0.045em] text-white sm:text-[64px] md:text-[80px]">
            SCOUT.
            <br />
            SCORE.
            <br />
            <span className="text-accent">MEMO.</span>
          </h1>
          <p className="max-w-[620px] font-body text-[15px] font-light leading-[1.7] text-white/55 md:text-[16px]">
            The private operating system starts with evidence, promotes only
            material signals, assigns one primary thesis, and routes each
            decision to a dated next verification. The public site shows the
            method, not the company-level pipeline.
          </p>
        </div>
      </section>

      {/* The loop */}
      <section className="py-20 md:py-28">
        <span className="mb-6 block font-mono text-[10px] font-semibold tracking-[0.22em] text-text-muted">
          [ THE LOOP ]
        </span>
        <h2 className="mb-12 max-w-[640px] font-display text-[26px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text sm:text-[32px]">
          One bounded workflow from evidence to decision.
        </h2>

        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {STAGES.map((stage, i) => (
            <div key={stage.label} className="contents">
              <SectionWrapper delay={i * 90}>
                <TerminalFrame
                  title={`${stage.step} · ${stage.label}`}
                  className="h-full"
                >
                  <div className="flex flex-col gap-2 p-5">
                    <span className="font-mono text-[11px] font-semibold tracking-[0.04em] text-accent">
                      {stage.head}
                    </span>
                    <p className="font-body text-[13px] font-light leading-[1.65] text-text-muted">
                      {stage.body}
                    </p>
                  </div>
                </TerminalFrame>
              </SectionWrapper>
              {i < STAGES.length - 1 ? (
                <div className="flex items-center justify-center font-mono text-base text-accent">
                  <span className="hidden md:inline">──▶</span>
                  <span className="md:hidden">▼</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Scoring lives on /methodology — this page is how the loop runs, not how it scores. */}
      <section className="border-t border-border py-20 md:py-28">
        <span className="mb-6 block font-mono text-[10px] font-semibold tracking-[0.22em] text-text-muted">
          [ SCORING ]
        </span>
        <h2 className="mb-4 max-w-[640px] font-display text-[26px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text sm:text-[32px]">
          The engine runs the loop. Evidence earns the decision.
        </h2>
        <p className="mb-10 max-w-[620px] font-body text-[15px] font-light leading-[1.7] text-text-muted">
          Stage 02 hands off to SSI {SITE.ssiVersion}. Exactly one primary thesis
          is assigned before scoring. Evidence confidence, commercial and
          technical risk, regulatory exposure, and falsifiers are evaluated
          separately so a neat number cannot conceal a weak decision.
        </p>

        <AsciiDivider label="SIGNALS OVER STORIES" className="mt-16" />

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[420px] font-body text-[14px] font-light italic leading-[1.6] text-text-muted">
            No score without a source. No source without a date. Filings over
            feelings, every week.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 bg-ink px-6 py-3 font-mono text-[11px] font-semibold tracking-[0.06em] text-white transition-colors hover:bg-ink-raised"
            >
              RESEARCH AGENDA &rarr;
            </Link>
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] font-semibold tracking-[0.06em] text-text transition-colors hover:border-accent hover:text-accent"
            >
              FULL METHODOLOGY &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
