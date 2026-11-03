import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/section-wrapper";
import { AsciiDivider } from "@/components/ascii-divider";
import { CAREER_ARC } from "@/data/edge";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Independent European software and AI research, informed by finance, production engineering and founder/operator experience. Based in Bucharest.",
  openGraph: {
    title: "About | Sevda Anefi",
    description:
      "From institutional finance to production engineering to independent European AI research.",
  },
};

const BIO = [
  "At J.P. Morgan I worked in securitised-products origination; at Morgan Stanley I completed a sales-and-trading summer analyst placement. I later shipped production software at DAZN, Funding Circle and Duffel.",
  "My founder/operator experience includes Zemedy, Fluento through Antler's London cohort, and founding and running Khaleea Jewelry. At my family's jewellery retailer, I led ERP implementation, negotiated custom per-gram gold pricing and trained staff as paper routines moved into software.",
  "I now research early-stage European software and AI, testing technical credibility, buyer incentives and workflow adoption. Based in Bucharest, I am pursuing European and UK Analyst/Associate roles. My work is independent proof of work; I have no institutional VC investing track record.",
];

const CONTRIBUTIONS = [
  {
    label: "EVIDENCE-LED SOURCING",
    body: "Company discovery through attributable public signals across Europe. Romania and CEE are a developing sourcing lens, not demonstrated proprietary access.",
  },
  {
    label: "TECHNICAL DILIGENCE",
    body: "Product depth, LLM integration, infra claims and repo artifacts, translated into an investment view.",
  },
  {
    label: "ADOPTION JUDGMENT",
    body: "Founder and ERP experience informs questions about implementation burden, data quality, budget ownership and the alternatives a buyer already uses.",
  },
  {
    label: "REPEATABLE SYSTEMS",
    body: "Research tools organise sources, unknowns and written decisions. Their usefulness is separate from a demonstrated sourcing or investing track record.",
  },
];

const CONTACT = [
  { label: "EMAIL", value: SITE.email, href: `mailto:${SITE.email}` },
  {
    label: "SUBSTACK",
    value: SITE.substack,
    href: "https://signalsoverstories.substack.com",
  },
  {
    label: "LINKEDIN",
    value: SITE.linkedin,
    href: "https://linkedin.com/in/sevda-anefi",
  },
  { label: "GITHUB", value: "github.com/astelvida", href: "https://github.com/astelvida" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 py-4 md:gap-20">
      {/* Header */}
      <SectionWrapper>
        <div className="flex flex-col gap-5">
          <span className="font-mono text-[10px] font-semibold tracking-[0.22em] text-text-muted">
            [ ABOUT ]
          </span>
          <h1 className="font-display text-[40px] font-extrabold leading-[1.0] tracking-[-0.045em] text-text sm:text-[54px] md:text-[64px]">
            Capital, code, and{" "}
            <span className="text-accent">company-building.</span>
          </h1>
          <p className="max-w-[600px] font-body text-[15px] font-light leading-[1.7] text-text-muted md:text-[16px]">
            Sevda Anefi — an independent European VC researcher and writer,
            former software engineer, founder and operator. I combine finance
            training, production engineering and operating experience to examine
            technical credibility, workflow adoption and commercial incentives.
          </p>
        </div>
      </SectionWrapper>

      {/* Bio */}
      <div className="flex flex-col gap-8">
        <AsciiDivider label="THE ARC" />
        <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-3">
          {BIO.map((para, i) => (
            <SectionWrapper key={i} delay={i * 80}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[11px] font-semibold tracking-[0.1em] text-accent">
                  0{i + 1}
                </span>
                <p className="font-body text-[14px] font-light leading-[1.7] text-text">
                  {para}
                </p>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>

      {/* Career arc */}
      <div className="flex flex-col gap-8">
        <AsciiDivider label="CAREER" />
        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {CAREER_ARC.map((era, i) => (
            <SectionWrapper key={era.phase} delay={i * 80}>
              <div className="flex h-full items-start gap-3 bg-surface px-5 py-6">
                <div className="h-10 w-[3px] shrink-0 bg-accent" />
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] tracking-[0.1em] text-text-faint">
                    {era.period}
                  </span>
                  <span className="font-mono text-[12px] font-semibold tracking-[0.06em] text-text">
                    {era.phase}
                  </span>
                  <span className="font-body text-[13px] font-light text-text-muted">
                    {era.detail}
                  </span>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>

      {/* What I bring */}
      <div className="flex flex-col gap-8">
        <AsciiDivider label="WHAT I BRING TO A FUND" />
        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
          {CONTRIBUTIONS.map((item, i) => (
            <SectionWrapper key={item.label} delay={i * 70}>
              <div className="flex h-full flex-col gap-2 bg-surface p-6">
                <span className="font-mono text-[11px] font-semibold tracking-[0.08em] text-accent">
                  {item.label}
                </span>
                <p className="font-body text-[13.5px] font-light leading-[1.65] text-text-muted">
                  {item.body}
                </p>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>

      {/* Contact */}
      <SectionWrapper>
        <div className="flex flex-col gap-6 border-t border-border pt-10">
          <span className="font-mono text-[10px] font-semibold tracking-[0.22em] text-text-muted">
            [ CONTACT ]
          </span>
          <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
            {CONTACT.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-3 bg-surface px-5 py-4 transition-colors hover:bg-accent-bg"
              >
                <span className="flex flex-col gap-0.5">
                  <span className="font-mono text-[9px] tracking-[0.14em] text-text-faint">
                    {c.label}
                  </span>
                  <span className="font-mono text-[12px] tracking-[0.04em] text-text transition-colors group-hover:text-accent">
                    {c.value}
                  </span>
                </span>
                <span className="font-mono text-text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
