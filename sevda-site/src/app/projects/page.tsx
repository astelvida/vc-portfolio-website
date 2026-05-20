import type { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";
import { RepoCard } from "@/components/repo-card";
import { PROJECTS } from "@/data/projects";
import { getRepos } from "@/lib/github";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Shipped tools and systems — signal tracker, scoring model, deal sourcing OS, and more.",
  openGraph: {
    title: "Projects | Sevda Anefi",
    description: "Shipped tools and systems for early-stage European AI investing.",
  },
};

export default async function ProjectsPage() {
  const repos = await getRepos();

  return (
    <div className="flex flex-col gap-14">
      <SectionWrapper>
        <div className="flex flex-col gap-4">
          <h1 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-text">
            PROJECTS
          </h1>
          <p className="max-w-[460px] font-body text-[15px] font-light leading-[1.7] text-text-muted">
            Tools and systems I&apos;ve built for sourcing, scoring, and
            communicating early-stage European AI deals.
          </p>
        </div>
      </SectionWrapper>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <SectionWrapper key={project.title} delay={i * 70}>
            <div className="group flex h-full flex-col rounded-[10px] border border-border bg-surface transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-border-hover hover:shadow-lg">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <span className="font-mono text-[10px] font-semibold tracking-[0.06em] text-text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] tracking-[0.06em] text-text-faint">
                  {project.stack}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h2 className="font-display text-base font-bold tracking-[-0.04em] text-text">
                  {project.title}
                </h2>
                <p className="font-body text-sm font-light leading-[1.6] text-text-muted">
                  {project.description}
                </p>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>

      {repos.length > 0 && (
        <div className="flex flex-col gap-6">
          <SectionWrapper>
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-[24px] font-extrabold tracking-[-0.04em] text-text sm:text-[28px]">
                BUILT IN PUBLIC
              </h2>
              <p className="max-w-[460px] font-body text-[15px] font-light leading-[1.7] text-text-muted">
                Open-source repos behind the sourcing and scoring work —
                pulled live from GitHub.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {repos.map((repo, i) => (
              <SectionWrapper key={repo.fullName} delay={i * 70}>
                <RepoCard repo={repo} />
              </SectionWrapper>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
