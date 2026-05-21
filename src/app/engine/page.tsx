import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/section-wrapper";
import { TerminalFrame } from "@/components/terminal-frame";
import { AsciiDivider } from "@/components/ascii-divider";
import { RUBRICS, SSI_TIERS } from "@/data/rubric";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "The Scouting Engine",
  description:
    "Scout → Score → Memo. A three-agent loop on Claude + Notion MCP that sources pre-consensus European AI and scores it against the SSI v3.0 dual-rubric.",
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
    head: "regscan · ghscan · procscan · talentscan · grantscan",
    body: "Atomic signals captured from regulators, repositories, procurement portals, hiring moves, and grant feeds — logged to the Signals database.",
  },
  {
    step: "02",
    label: "SCORE",
    head: "SSI v3.0 dual-rubric",
    body: "Each company is assigned a single thesis, then scored against that rubric only — separation enforced at the data layer. No score without a source.",
  },
  {
    step: "03",
    label: "MEMO",
    head: "IC-style investment memo",
    body: "Falsifier register, kill criteria, evidence table, and a dated next action — drafted under the canonical Memos template.",
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
            Regulation-in sourcing. The engine starts from regulatory and
            workflow structure, finds the European companies building into it,
            scores each against the thesis it fits, and drafts the memo — a
            three-agent loop running on Claude and the Notion MCP.
          </p>
        </div>
      </section>

      {/* The loop */}
      <section className="py-20 md:py-28">
        <span className="mb-6 block font-mono text-[10px] font-semibold tracking-[0.22em] text-text-muted">
          [ THE LOOP ]
        </span>
        <h2 className="mb-12 max-w-[640px] font-display text-[26px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text sm:text-[32px]">
          One validated company surfaces roughly three more.
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

      {/* Dual rubric */}
      <section className="border-t border-border py-20 md:py-28">
        <span className="mb-6 block font-mono text-[10px] font-semibold tracking-[0.22em] text-text-muted">
          [ SSI {SITE.ssiVersion} · DUAL-RUBRIC ]
        </span>
        <h2 className="mb-4 font-display text-[26px] font-extrabold leading-[1.1] tracking-[-0.04em] text-text sm:text-[32px]">
          Score the thesis, not the company.
        </h2>
        <p className="mb-12 max-w-[620px] font-body text-[15px] font-light leading-[1.7] text-text-muted">
          Two rubrics, each on a 100-point scale, never composed into one
          number. A company is scored under the single thesis it fits — eight
          dimensions, weighted, every score carrying a primary source.
        </p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {RUBRICS.map((rubric) => (
            <SectionWrapper key={rubric.thesis}>
              <TerminalFrame
                title={`${rubric.thesis} RUBRIC`}
                meta="MAX 100"
                className="h-full"
              >
                <div className="flex flex-col">
                  <div className="border-b border-border px-5 py-3">
                    <span className="font-display text-[15px] font-extrabold tracking-[-0.03em] text-text">
                      {rubric.name}
                    </span>
                  </div>
                  {rubric.dimensions.map((d) => (
                    <div
                      key={d.code}
                      className="flex items-center gap-3 border-b border-border-subtle px-5 py-2.5 last:border-0"
                    >
                      <span className="w-7 shrink-0 font-mono text-[10px] font-semibold text-accent">
                        {d.code}
                      </span>
                      <span className="flex-1 font-body text-[12.5px] text-text">
                        {d.name}
                      </span>
                      <span className="h-1 w-16 shrink-0 bg-border-subtle">
                        <span
                          className="block h-full bg-accent"
                          style={{ width: `${(d.max / 20) * 100}%` }}
                        />
                      </span>
                      <span className="w-6 shrink-0 text-right font-mono text-[11px] font-semibold tabular-nums text-text-muted">
                        {d.max}
                      </span>
                    </div>
                  ))}
                </div>
              </TerminalFrame>
            </SectionWrapper>
          ))}
        </div>
      </section>

      {/* Tiers */}
      <section className="border-t border-border py-20 md:py-28">
        <span className="mb-6 block font-mono text-[10px] font-semibold tracking-[0.22em] text-text-muted">
          [ TIER CLASSIFICATION ]
        </span>
        <h2 className="mb-12 font-display text-[26px] font-extrabold tracking-[-0.04em] text-text sm:text-[32px]">
          Score routes the action.
        </h2>

        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SSI_TIERS.map((tier) => (
            <div key={tier.priority} className="flex flex-col gap-2 bg-surface p-5">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-[22px] font-extrabold tabular-nums tracking-[-0.04em] text-accent">
                  {tier.range}
                </span>
                <span className="font-mono text-[10px] font-semibold tracking-[0.1em] text-text-muted">
                  {tier.priority}
                </span>
              </div>
              <span className="font-mono text-[11px] font-semibold tracking-[0.04em] text-text">
                {tier.band}
              </span>
              <span className="font-body text-[12.5px] font-light leading-[1.55] text-text-muted">
                {tier.action}
              </span>
            </div>
          ))}
        </div>

        <AsciiDivider label="SIGNALS OVER STORIES" className="mt-16" />

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[420px] font-body text-[14px] font-light italic leading-[1.6] text-text-muted">
            No score without a source. No source without a date. Filings over
            feelings, every week.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/signals"
              className="inline-flex items-center gap-2 bg-ink px-6 py-3 font-mono text-[11px] font-semibold tracking-[0.06em] text-white transition-colors hover:bg-ink-raised"
            >
              SEE THE PIPELINE &rarr;
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
