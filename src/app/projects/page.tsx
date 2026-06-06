import type { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";
import { AsciiDivider } from "@/components/ascii-divider";
import { RepoCard } from "@/components/repo-card";
import { PROJECTS } from "@/data/projects";
import { getRepos } from "@/lib/github";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Shipped tools and systems — the SoR Matrix tracker, the SSI scoring model, the Scout → Score → Memo engine.",
  openGraph: {
    title: "Projects | Sevda Anefi",
    description: "Shipped tools and systems for early-stage European AI investing.",
  },
};

export default async function ProjectsPage() {
  const repos = await getRepos();

  return (
    <div className="flex flex-col gap-16 py-4 md:gap-20">
      {/* Header */}
      <SectionWrapper>
        <div className="flex flex-col gap-5">
          <span className="font-mono text-[10px] font-semibold tracking-[0.22em] text-text-muted">
            [ PROJECTS ]
          </span>
          <h1 className="font-display text-[40px] font-extrabold leading-[1.0] tracking-[-0.045em] text-text sm:text-[54px] md:text-[64px]">
            Tools that <span className="text-accent">compound.</span>
          </h1>
          <p className="max-w-[560px] font-body text-[15px] font-light leading-[1.7] text-text-muted md:text-[16px]">
            The systems behind the sourcing, scoring, and memo work — built so
            conviction is repeatable, not improvised.
          </p>
        </div>
      </SectionWrapper>

      {/* Project grid */}
      <div className="flex flex-col gap-8">
        <AsciiDivider label="SHIPPED" />
        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <SectionWrapper key={project.title} delay={i * 60}>
              <div className="group flex h-full flex-col bg-surface transition-colors hover:bg-accent-bg">
                <div className="flex items-center justify-between border-b border-border px-5 py-2.5">
                  <span className="font-mono text-[11px] font-semibold tracking-[0.08em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.1em] text-text-faint">
                    {project.stack}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h2 className="font-display text-[17px] font-extrabold tracking-[-0.03em] text-text">
                    {project.title}
                  </h2>
                  <p className="font-body text-[13.5px] font-light leading-[1.65] text-text-muted">
                    {project.description}
                  </p>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>

      {/* Built in public */}
      {repos.length > 0 ? (
        <div className="flex flex-col gap-8">
          <AsciiDivider label="BUILT IN PUBLIC" />
          <SectionWrapper>
            <p className="max-w-[460px] font-body text-[14px] font-light leading-[1.7] text-text-muted">
              Open-source repositories behind the sourcing and scoring work —
              pulled live from GitHub.
            </p>
          </SectionWrapper>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {repos.map((repo, i) => (
              <SectionWrapper key={repo.fullName} delay={i * 60}>
                <RepoCard repo={repo} />
              </SectionWrapper>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
