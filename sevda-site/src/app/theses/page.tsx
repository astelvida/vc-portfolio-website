import type { Metadata } from "next";
import { ConvictionBar } from "@/components/conviction-bar";
import { SectionWrapper } from "@/components/section-wrapper";
import { THESES } from "@/data/theses";

export const metadata: Metadata = {
  title: "Theses",
  description:
    "Three investment theses in European AI: Compliance-First AI, LLMOps / Eval Infra, and Vertical AI.",
  openGraph: {
    title: "Theses | Sevda Anefi",
    description:
      "Three investment theses in European AI backed by a proprietary signal model.",
  },
};

export default function ThesesPage() {
  return (
    <div className="flex flex-col gap-14">
      <SectionWrapper>
        <div className="flex flex-col gap-4">
          <h1 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-text">
            INVESTMENT THESES
          </h1>
          <p className="max-w-[460px] font-body text-[15px] font-light leading-[1.7] text-text-muted">
            Three conviction-backed theses driving early-stage European AI
            deal flow. Each scored by a proprietary signal model.
          </p>
        </div>
      </SectionWrapper>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {THESES.map((thesis, i) => (
          <SectionWrapper key={thesis.code} delay={i * 70}>
            <div className="group flex h-full flex-col rounded-[10px] border border-border bg-surface transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-border-hover hover:shadow-lg">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                      style={{ backgroundColor: thesis.color }}
                    />
                    <span
                      className="relative inline-flex h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: thesis.color }}
                    />
                  </span>
                  <span className="font-mono text-[10px] font-semibold tracking-[0.06em] text-text-muted">
                    {thesis.code}
                  </span>
                </div>
                <span
                  className="font-mono text-[10px] font-semibold tracking-[0.06em]"
                  style={{ color: thesis.color }}
                >
                  {thesis.conviction}%
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <h2 className="font-display text-xl font-bold tracking-[-0.04em] text-text">
                  {thesis.name}
                </h2>
                <p className="flex-1 font-body text-sm font-light leading-[1.7] text-text-muted">
                  {thesis.description}
                </p>

                {/* Conviction Ring Visual */}
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16">
                    <svg
                      className="h-16 w-16 -rotate-90"
                      viewBox="0 0 64 64"
                    >
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        fill="none"
                        stroke="var(--border-subtle)"
                        strokeWidth="4"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        fill="none"
                        stroke={thesis.color}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={`${(thesis.conviction / 100) * 175.93} 175.93`}
                      />
                    </svg>
                    <span
                      className="absolute inset-0 flex items-center justify-center font-mono text-xs font-semibold"
                      style={{ color: thesis.color }}
                    >
                      {thesis.conviction}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <span className="font-mono text-[10px] tracking-[0.06em] text-text-muted">
                      CONVICTION
                    </span>
                    <ConvictionBar
                      percentage={thesis.conviction}
                      color={thesis.color}
                      delay={600 + i * 200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  );
}
