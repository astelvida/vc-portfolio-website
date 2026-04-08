import type { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: "About",
  description:
    "Structured products, production engineering, early-stage European AI. Based between London and Bucharest.",
  openGraph: {
    title: "About | Sevda Anefi",
    description:
      "From JPMorgan and Morgan Stanley to DAZN and Duffel to anefi.vc.",
  },
};

const CAREER = [
  {
    phase: "FINANCE",
    color: "#6366F1",
    companies: "JPMorgan · Morgan Stanley",
    period: "2016–2019",
  },
  {
    phase: "ENGINEERING",
    color: "#10B981",
    companies: "DAZN · Duffel · FC",
    period: "2019–2022",
  },
  {
    phase: "VENTURE",
    color: "#E63312",
    companies: "Antler · anefi.vc",
    period: "2022–now",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-14">
      <SectionWrapper>
        <h1 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-text">
          ABOUT
        </h1>
      </SectionWrapper>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Bio */}
        <SectionWrapper delay={70}>
          <div className="flex flex-col gap-6">
            <p className="max-w-[460px] font-body text-[15px] font-light leading-[1.7] text-text">
              Structured products at JPMorgan and Morgan Stanley — building
              models for things that don&apos;t behave the way their docs say
              they will.
            </p>
            <p className="max-w-[460px] font-body text-[15px] font-light leading-[1.7] text-text">
              Production engineering at DAZN, Duffel, and Funding Circle —
              shipping code that handles real money at real scale.
            </p>
            <p className="max-w-[460px] font-body text-[15px] font-light leading-[1.7] text-text">
              Now early-stage European AI through anefi.vc. Three theses, 78
              companies, a proprietary scoring model. Based between London and
              Bucharest. Four languages.
            </p>
          </div>
        </SectionWrapper>

        {/* Career Arc Panel */}
        <SectionWrapper delay={140}>
          <div className="rounded-[10px] border border-border bg-surface transition-all duration-[250ms] hover:border-border-hover hover:shadow-lg">
            <div className="border-b border-border px-4 py-3">
              <span className="font-mono text-[10px] font-semibold tracking-[0.06em] text-text-muted">
                CAREER ARC | 2016 → NOW
              </span>
            </div>
            <div className="divide-y divide-border-subtle">
              {CAREER.map((item, i) => (
                <div
                  key={item.phase}
                  className="flex items-center gap-4 px-6 py-4"
                  style={{
                    animation: `row-enter 400ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 60}ms both`,
                  }}
                >
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex flex-1 flex-col gap-0.5">
                    <span
                      className="font-mono text-[10px] font-semibold tracking-[0.06em]"
                      style={{ color: item.color }}
                    >
                      {item.phase}
                    </span>
                    <span className="font-body text-sm font-light text-text">
                      {item.companies}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.06em] text-text-faint">
                    {item.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* Contact */}
      <SectionWrapper delay={210}>
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] font-semibold tracking-[0.06em] text-text-muted">
            CONTACT
          </span>
          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:sevda@anefi.vc"
              className="font-mono text-xs tracking-[0.06em] text-accent transition-colors hover:text-accent/80"
            >
              sevda@anefi.vc
            </a>
            <a
              href="https://signalsoverstories.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-[0.06em] text-accent transition-colors hover:text-accent/80"
            >
              signalsoverstories.substack.com
            </a>
            <a
              href="https://linkedin.com/in/sevda-anefi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-[0.06em] text-accent transition-colors hover:text-accent/80"
            >
              linkedin.com/in/sevda-anefi
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
