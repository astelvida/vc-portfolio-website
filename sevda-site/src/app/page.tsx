import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedNumber } from "@/components/animated-number";
import { Ticker } from "@/components/ticker";
import { ConvictionBar } from "@/components/conviction-bar";
import { SectionWrapper } from "@/components/section-wrapper";
import { THESES } from "@/data/theses";

export const metadata: Metadata = {
  title: "Sevda Anefi — Early-Stage European AI",
  description:
    "Early-stage European AI investor. Three investment theses backed by a proprietary signal model.",
};

const STATS = [
  { label: "Pipeline", value: 78, suffix: "" },
  { label: "Top Conv", value: 92, suffix: "%" },
  { label: "Peak SSI", value: 82, suffix: "" },
  { label: "Theses", value: 3, suffix: "" },
];

const FALLBACK_POSTS = [
  {
    title: "Score the Thesis, Not the Company",
    description: "Why I built a dual-rubric scoring model.",
    pubDate: "2026-03-31",
    categories: ["Framework"],
  },
  {
    title: "The Invisible Giant: Europe's Ownership Gap",
    description:
      "Europe's structural disadvantage is an early-stage advantage.",
    pubDate: "2026-02-12",
    categories: ["Memo"],
  },
  {
    title: "SaaSpocalypse: Who Survives Outcome Pricing",
    description: "Mapping vertical AI on pricing risk.",
    pubDate: "2026-01-28",
    categories: ["Analysis"],
  },
];

function categoryBadgeClass(category: string): string {
  if (category === "Framework") return "bg-thesis-cai/8 text-thesis-cai";
  if (category === "Memo") return "bg-thesis-inf/8 text-thesis-inf";
  return "bg-thesis-vai/8 text-thesis-vai";
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-14">
      {/* Hero */}
      <SectionWrapper>
        <div className="flex flex-col gap-6">
          <h1 className="font-display text-[32px] sm:text-[44px] md:text-[56px] font-extrabold leading-[1.05] tracking-[-0.04em] text-text">
            SIGNALS BEFORE{" "}
            <span className="text-accent">STORIES.</span>
          </h1>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="font-mono text-[10px] font-semibold tracking-[0.06em] text-text-muted">
              ACTIVELY SOURCING EU AI
            </span>
          </div>
        </div>
      </SectionWrapper>

      {/* Stat Grid — overlapping hero */}
      <SectionWrapper delay={70} className="-mt-6 ml-0 md:ml-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] overflow-hidden rounded-[10px] border border-border bg-border">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-surface py-5 px-4"
            >
              <span className="font-display text-2xl font-bold tracking-[-0.04em] text-text">
                <AnimatedNumber
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={1200}
                />
              </span>
              <span className="font-mono text-[10px] font-medium tracking-[0.06em] text-text-muted">
                {stat.label.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Intro */}
      <SectionWrapper delay={140}>
        <p className="max-w-[460px] font-body text-[15px] font-light leading-[1.7] text-text">
          Early-stage European AI. Three investment theses backed by a
          proprietary signal model. I find pattern breaks before consensus
          forms.
        </p>
      </SectionWrapper>

      {/* Ticker */}
      <SectionWrapper delay={210}>
        <div className="-mx-4 md:-mx-9">
          <Ticker />
        </div>
      </SectionWrapper>

      {/* Thesis Panels */}
      <SectionWrapper delay={280}>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {THESES.map((thesis, i) => (
            <div
              key={thesis.code}
              className="group rounded-[10px] border border-border bg-surface transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-border-hover hover:shadow-lg"
              style={{
                animationDelay: `${i * 70}ms`,
              }}
            >
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
                <span className="font-mono text-[10px] font-semibold tracking-[0.06em] text-text-muted">
                  {thesis.conviction}%
                </span>
              </div>
              <div className="flex flex-col gap-3 p-6">
                <h3 className="font-display text-base font-bold tracking-[-0.04em] text-text">
                  {thesis.name}
                </h3>
                <p className="font-body text-sm font-light leading-[1.6] text-text-muted">
                  {thesis.description}
                </p>
                <ConvictionBar
                  percentage={thesis.conviction}
                  color={thesis.color}
                  delay={400 + i * 200}
                />
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Writing Preview */}
      <SectionWrapper delay={350}>
        <div className="rounded-[10px] border border-border bg-surface transition-all duration-[250ms] hover:border-border-hover hover:shadow-lg">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <span className="font-mono text-[10px] font-semibold tracking-[0.06em] text-text-muted">
              LATEST WRITING
            </span>
            <Link
              href="/writing"
              className="font-mono text-[10px] font-semibold tracking-[0.06em] text-accent transition-colors hover:text-accent/80"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="divide-y divide-border-subtle">
            {FALLBACK_POSTS.map((post, i) => (
              <div
                key={post.title}
                className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 px-4 sm:px-6 py-4"
                style={{
                  animation: `row-enter 400ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 60}ms both`,
                }}
              >
                <span
                  className={`mt-0.5 shrink-0 rounded px-2 py-0.5 font-mono text-[10px] font-semibold ${categoryBadgeClass(post.categories[0])}`}
                >
                  {post.categories[0]}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-display text-sm font-bold tracking-[-0.04em] text-text">
                    {post.title}
                  </span>
                  <span className="font-body text-xs font-light text-text-muted">
                    {post.description}
                  </span>
                </div>
                <span className="sm:ml-auto shrink-0 font-mono text-[10px] text-text-faint">
                  {post.pubDate}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
