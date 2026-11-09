import Image from "next/image";
import Link from "next/link";
import { SITE, SOCIAL_LINKS, PROJECTS } from "@/data/config";
import SkillsExplorer from "@/components/SkillsExplorer";

export default function Home() {
  const featuredProjects = PROJECTS.filter((project) => project.featured).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-neutral-100">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-32 h-[34rem] w-[34rem] rounded-full bg-violet-100/70 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-48 left-1/4 h-96 w-96 rounded-full bg-rose-100/50 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-6 py-16 md:grid-cols-[minmax(0,1fr)_20rem] md:gap-16 md:py-24">
          <div>
            {SITE.available && (
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-200/80 bg-white/80 py-2 pl-3 pr-4 shadow-sm backdrop-blur">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-emerald-700">
                  Available
                </span>
                <span className="h-4 w-px bg-emerald-200" aria-hidden="true" />
                <span className="text-sm font-medium text-neutral-700">
                  Remote freelance work
                </span>
              </div>
            )}

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] accent-text">
              {SITE.title}
            </p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Hi, I&apos;m {SITE.name.split(" ")[0]}.
              <span className="mt-2 block accent-text">
                {SITE.tagline}
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-600">
              {SITE.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full accent-bg px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
              >
                Explore my work <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-neutral-300 bg-white/70 px-6 py-3 text-sm font-semibold transition hover:border-neutral-400 hover:bg-white"
              >
                Get in touch
              </Link>
            </div>

            <nav
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500"
              aria-label="Social links"
            >
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-violet-700"
                >
                  {social.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="relative mx-auto w-full max-w-[20rem] md:ml-auto">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rotate-3 rounded-[2rem] bg-gradient-to-br from-violet-200 via-fuchsia-100 to-amber-100"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border-4 border-white bg-neutral-100 shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt={`${SITE.name} - ${SITE.title}`}
                fill
                priority
                sizes="(max-width: 768px) 80vw, 320px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
              <p className="text-xs text-neutral-500">Based in</p>
              <p className="mt-0.5 text-sm font-semibold">{SITE.location}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-100 bg-neutral-50/70 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] accent-text">
                My toolkit
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                What I work with
              </h2>
            </div>
            <Link
              href="/about"
              className="text-sm font-semibold text-neutral-500 transition hover:text-violet-700"
            >
              More about me <span aria-hidden="true">→</span>
            </Link>
          </div>
          <SkillsExplorer />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] accent-text">
                Selected work
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                Projects I&apos;ve worked on
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden shrink-0 text-sm font-semibold text-neutral-500 transition hover:text-violet-700 sm:inline-block"
            >
              All projects <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-sm text-violet-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {project.year} · {project.role}
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-violet-700">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {project.tagline}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-100 bg-neutral-50 px-2.5 py-1 text-xs text-neutral-600 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-auto pt-6 text-sm font-medium accent-text">
                  View project <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-7 text-center sm:hidden">
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-neutral-500 transition hover:text-violet-700"
            >
              View all projects <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-100 bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-neutral-950 px-7 py-10 text-white sm:px-10 md:flex md:items-center md:justify-between md:gap-10 md:px-12 md:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-32 h-72 w-72 rounded-full bg-violet-600/30 blur-3xl"
            />
            <div className="relative max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">
                Have a project in mind?
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s make something useful.
              </h2>
              <p className="mt-3 leading-relaxed text-neutral-300">
                Interested in working together? I&apos;d be glad to hear from you.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative mt-7 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:-translate-y-0.5 hover:bg-violet-50 md:mt-0"
            >
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
