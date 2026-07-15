import type { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";
import { TerminalFrame } from "@/components/terminal-frame";
import { AsciiDivider } from "@/components/ascii-divider";
import { RESEARCH_LENSES } from "@/data/signals";

export const metadata: Metadata = {
  title: "90-Day Research Agenda",
  description:
    "A public research agenda across European AI political economy, economics, venture formation, and the scouting product.",
  openGraph: {
    title: "90-Day Research Agenda | Sevda Anefi",
    description:
      "Four connected research lenses designed to produce dated evidence, useful artefacts, and public investment credibility.",
  },
};

const CADENCE = [
  { period: "WEEKLY", output: "One bounded primary-source research brief and one explicit next question." },
  { period: "FORTNIGHTLY", output: "One public artefact: essay, map, framework, product note, or interactive tool." },
  { period: "MONTHLY", output: "One thesis review: what strengthened, weakened, or changed the investment view." },
  { period: "DAY 90", output: "A portfolio review of evidence produced, relationships built, product progress, and the next focus." },
];

export default function ResearchPage() {
  return (
    <div className="flex flex-col gap-16 py-4 md:gap-20">
      <SectionWrapper>
        <div className="flex flex-col gap-5">
          <span className="font-mono text-[10px] font-semibold tracking-[0.22em] text-text-muted">[ 90-DAY RESEARCH AGENDA ]</span>
          <h1 className="font-display text-[40px] font-extrabold leading-[1.0] tracking-[-0.045em] text-text sm:text-[54px] md:text-[64px]">
            Research that earns <span className="text-accent">credibility.</span>
          </h1>
          <p className="max-w-[650px] font-body text-[15px] font-light leading-[1.7] text-text-muted md:text-[16px]">
            The objective is not volume. It is a coherent body of dated,
            source-backed work connecting European AI, economics, politics,
            venture, product-building, and genuine intellectual interest.
          </p>
        </div>
      </SectionWrapper>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {RESEARCH_LENSES.map((lens, i) => (
          <SectionWrapper key={lens.code} delay={i * 70}>
            <TerminalFrame title={`${lens.code} · LENS ${String(i + 1).padStart(2, "0")}`} className="h-full">
              <div className="flex h-full flex-col gap-4 p-6">
                <h2 className="font-display text-[19px] font-extrabold tracking-[-0.03em] text-text">{lens.title}</h2>
                <p className="font-body text-[14px] font-light leading-[1.7] text-text-muted">{lens.question}</p>
                <p className="mt-auto border-t border-border-subtle pt-4 font-mono text-[10px] leading-[1.6] tracking-[0.04em] text-text-faint">OUTPUTS · {lens.outputs}</p>
              </div>
            </TerminalFrame>
          </SectionWrapper>
        ))}
      </div>

      <div className="flex flex-col gap-8">
        <AsciiDivider label="CADENCE" />
        <div className="border border-border">
          {CADENCE.map((item) => (
            <div key={item.period} className="grid grid-cols-1 gap-2 border-b border-border-subtle p-5 last:border-0 sm:grid-cols-[150px_1fr]">
              <span className="font-mono text-[11px] font-semibold tracking-[0.08em] text-accent">{item.period}</span>
              <p className="font-body text-[14px] font-light leading-[1.65] text-text-muted">{item.output}</p>
            </div>
          ))}
        </div>
      </div>

      <SectionWrapper>
        <div className="border border-border bg-surface p-6 md:p-8">
          <span className="mb-4 block font-mono text-[10px] font-semibold tracking-[0.18em] text-text-muted">[ QUALITY BAR ]</span>
          <p className="max-w-[760px] font-display text-[20px] font-extrabold leading-[1.3] tracking-[-0.03em] text-text md:text-[24px]">
            Current evidence. Primary sources. Explicit inference. Material uncertainty. A view that can be disproved.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
