import type { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";
import { SIGNALS } from "@/data/signals";

export const metadata: Metadata = {
  title: "Signals",
  description:
    "Live pipeline tracker — top European AI companies ranked by SSI score.",
  openGraph: {
    title: "Signals | Sevda Anefi",
    description:
      "Top European AI companies ranked by proprietary Signal Strength Index.",
  },
};

function thesisBadgeClass(thesis: string): string {
  if (thesis === "CAI") return "bg-thesis-cai/8 text-thesis-cai";
  if (thesis === "INF") return "bg-thesis-inf/8 text-thesis-inf";
  return "bg-thesis-vai/8 text-thesis-vai";
}

export default function SignalsPage() {
  return (
    <div className="flex flex-col gap-14">
      <SectionWrapper>
        <div className="flex flex-col gap-4">
          <h1 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-text">
            SIGNAL PIPELINE
          </h1>
          <p className="max-w-[460px] font-body text-[15px] font-light leading-[1.7] text-text-muted">
            Top companies by Signal Strength Index. Scored across 11
            dimensions, updated continuously.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper delay={70}>
        <div className="rounded-[10px] border border-border bg-surface transition-all duration-[250ms] hover:border-border-hover hover:shadow-lg">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <span className="font-mono text-[10px] font-semibold tracking-[0.06em] text-text-muted">
              TOP 5 BY SSI
            </span>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              <span className="font-mono text-[10px] font-semibold tracking-[0.06em] text-success">
                LIVE
              </span>
            </div>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-[2fr_0.7fr_0.7fr_0.8fr_1fr_0.8fr] gap-4 border-b border-border px-6 py-2.5">
            {["COMPANY", "SSI", "Δ", "THESIS", "HQ", "HEAT"].map(
              (header) => (
                <span
                  key={header}
                  className="font-mono text-[10px] font-semibold tracking-[0.06em] text-text-faint"
                >
                  {header}
                </span>
              )
            )}
          </div>

          {/* Table Body */}
          <div className="divide-y divide-border-subtle">
            {SIGNALS.map((signal, i) => (
              <div
                key={signal.company}
                className="grid grid-cols-[2fr_0.7fr_0.7fr_0.8fr_1fr_0.8fr] items-center gap-4 px-6 py-3.5"
                style={{
                  animation: `row-enter 400ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 60}ms both`,
                }}
              >
                <span className="font-display text-sm font-bold tracking-[-0.04em] text-text">
                  {signal.company}
                </span>
                <span
                  className={`font-mono text-sm font-semibold ${signal.ssi >= 80 ? "text-accent" : "text-text"}`}
                >
                  {signal.ssi}
                </span>
                <span
                  className={`font-mono text-sm font-medium ${signal.delta > 0 ? "text-success" : signal.delta < 0 ? "text-accent" : "text-text-muted"}`}
                >
                  {signal.delta > 0 ? "+" : ""}
                  {signal.delta}
                </span>
                <span
                  className={`inline-flex w-fit rounded px-2 py-0.5 font-mono text-[10px] font-semibold ${thesisBadgeClass(signal.thesis)}`}
                >
                  {signal.thesis}
                </span>
                <span className="font-body text-sm font-light text-text-muted">
                  {signal.hq}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span
                      className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${signal.heat === "HOT" ? "bg-accent" : "bg-[#F59E0B]"}`}
                    />
                    <span
                      className={`relative inline-flex h-1.5 w-1.5 rounded-full ${signal.heat === "HOT" ? "bg-accent" : "bg-[#F59E0B]"}`}
                    />
                  </span>
                  <span
                    className={`font-mono text-[10px] font-semibold ${signal.heat === "HOT" ? "text-accent" : "text-[#F59E0B]"}`}
                  >
                    {signal.heat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
