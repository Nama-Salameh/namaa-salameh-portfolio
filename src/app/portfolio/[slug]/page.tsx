import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/config";

// ─── SSG: pre-render every project page at build time ────────
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

// ─── Per-page SEO ─────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
  };
}

// ─── Page ─────────────────────────────────────────────────────
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject =
    currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  return (
    <article>
      <header className="soft-grad border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-14 md:pt-14 md:pb-16">
          <nav className="text-sm text-neutral-500 mb-10" aria-label="Breadcrumb">
            <Link href="/portfolio" className="hover:text-neutral-900 transition">
              Portfolio
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-neutral-800">{project.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="font-mono text-sm text-violet-600">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-neutral-300" aria-hidden="true" />
            <span className="text-sm text-neutral-500">
              {project.year} · {project.role}
            </span>
            {project.featured && (
              <span className="text-xs font-medium text-violet-700 bg-violet-50 rounded-full px-2.5 py-1">
                Featured
              </span>
            )}
          </div>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
            {project.tagline}
          </p>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full accent-bg px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
            >
              View project <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-16">
          <div>
            <section>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] accent-text">
                Project overview
              </p>
              <p className="text-lg leading-relaxed text-neutral-700">
                {project.description}
              </p>
            </section>

            <section className="mt-12 border-t border-neutral-100 pt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] accent-text">
                Implementation
              </p>
              <p className="leading-relaxed text-neutral-600">
                {project.solution}
              </p>
            </section>
          </div>

          <aside className="h-fit rounded-2xl border border-neutral-200 bg-neutral-50/70 p-6">
            <h2 className="text-sm font-semibold">Project details</h2>
            <dl className="mt-5 space-y-4">
              <div>
                <dt className="text-xs text-neutral-400">Year</dt>
                <dd className="mt-1 text-sm font-medium text-neutral-800">
                  {project.year}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-neutral-400">Role</dt>
                <dd className="mt-1 text-sm font-medium text-neutral-800">
                  {project.role}
                </dd>
              </div>
            </dl>
            <div className="mt-6 border-t border-neutral-200 pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Built with
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-600 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-12 rounded-2xl border border-violet-100 bg-violet-50/50 p-6 md:mt-16 md:p-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] accent-text">
            Outcome
          </p>
          <p className="max-w-3xl leading-relaxed text-neutral-700">
            {project.outcome}
          </p>
        </section>

        <nav
          className="mt-12 flex items-center justify-between gap-4"
          aria-label="Project navigation"
        >
          {prevProject ? (
            <Link
              href={`/portfolio/${prevProject.slug}`}
              className="group flex flex-col items-start"
            >
              <span className="mb-1 text-xs text-neutral-400">← Previous</span>
              <span className="text-sm font-semibold transition group-hover:accent-text">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {nextProject ? (
            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="group flex flex-col items-end text-right"
            >
              <span className="mb-1 text-xs text-neutral-400">Next →</span>
              <span className="text-sm font-semibold transition group-hover:accent-text">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
}
