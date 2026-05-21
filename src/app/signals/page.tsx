import type { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";
import { TerminalFrame } from "@/components/terminal-frame";
import { SIGNALS } from "@/data/signals";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Signals",
  description:
    "Live pipeline tracker — top European AI companies ranked by the SSI v3.0 dual-rubric score.",
  openGraph: {
    title: "Signals | Sevda Anefi",
    description:
      "Top European AI companies ranked by the proprietary Signal Strength Index.",
  },
};

const FIT_COLOR: Record<string, string> = {
  GAO: "var(--thesis-gao)",
  VSRAI: "var(--thesis-vsrai)",
};

const COLS = "grid grid-cols-[36px_1.5fr_1fr_56px_1fr_52px] md:grid-cols-[40px_1.5fr_1fr_0.8fr_56px_1fr_52px]";

export default function SignalsPage() {
  return (
    <div className="flex flex-col gap-12">
      <SectionWrapper>
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] font-semibold tracking-[0.22em] text-text-muted">
            [ SIGNAL PIPELINE ]
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-text">
            SIGNAL PIPELINE
          </h1>
          <p className="max-w-[540px] font-body text-[15px] font-light leading-[1.7] text-text-muted">
            Top European AI companies by Signal Strength Index, scored on the
            SSI {SITE.ssiVersion} dual-rubric — eight Governed Agentic Ops
            dimensions, eight Vertical System-of-Record AI dimensions. No score
            without a source.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper delay={70}>
        <TerminalFrame title={`PIPELINE — TOP ${SIGNALS.length}`} meta="SSI v3.0 · LIVE">
          <div className="overflow-x-auto">
            <div className="min-w-[560px]">
              <div
                className={`${COLS} border-b border-border bg-bg px-4 py-2.5 md:px-6`}
              >
                {["#", "COMPANY", "SECTOR", "STAGE", "SSI", "HQ", "FIT"].map(
                  (h, i) => (
                    <span
                      key={h}
                      className={`font-mono text-[9px] font-semibold tracking-[0.1em] text-text-faint ${
                        i === 3 ? "hidden md:block" : ""
                      }`}
                    >
                      {h}
                    </span>
                  )
                )}
              </div>
              {SIGNALS.map((s, i) => (
                <div
                  key={s.company}
                  className={`${COLS} items-center border-b border-border-subtle px-4 py-3.5 transition-colors last:border-0 hover:bg-accent-bg md:px-6`}
                  style={{
                    animation: `row-enter 400ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 55}ms both`,
                  }}
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
                  <span className="hidden font-mono text-[10px] text-text-muted md:block">
                    {s.stage}
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
                    style={{ color: FIT_COLOR[s.thesis] }}
                  >
                    {s.thesis}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </TerminalFrame>
      </SectionWrapper>

      <SectionWrapper delay={140}>
        <p className="font-mono text-[11px] leading-[1.7] tracking-[0.04em] text-text-muted">
          {SITE.pipelineCount} companies tracked on the public pipeline · SSI
          80+ = P0 Act Now · 65–79 = P1 This Week · 50–64 = P2 This Month.
        </p>
      </SectionWrapper>
    </div>
  );
}
