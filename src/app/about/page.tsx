import type { Metadata } from "next";
import Link from "next/link";
import {
  SITE,
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
} from "@/data/config";
import SkillsExplorer from "@/components/SkillsExplorer";

export const metadata: Metadata = {
  title: "About & Resume",
  description: `${SITE.bio} Experience, education, skills and CV download.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="soft-grad border-b border-neutral-100">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 pb-16 pt-16 md:grid-cols-[minmax(0,1fr)_18rem] md:items-end md:gap-16 md:pb-20 md:pt-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] accent-text">
              About me
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Building useful things, one line at a time.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
              {SITE.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.cvPdf}
                download
                className="rounded-full accent-bg px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
              >
                Download CV
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-neutral-300 bg-white/70 px-6 py-3 text-sm font-semibold transition hover:border-neutral-400 hover:bg-white"
              >
                Contact me
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/80 bg-white/80 p-6 shadow-sm backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
              At a glance
            </p>
            <dl className="mt-5 space-y-4">
              <div>
                <dt className="text-xs text-neutral-400">Based in</dt>
                <dd className="mt-1 font-medium">{SITE.location}</dd>
              </div>
              <div>
                <dt className="text-xs text-neutral-400">Focus</dt>
                <dd className="mt-1 font-medium">Frontend &amp; backend development</dd>
              </div>
              <div>
                <dt className="text-xs text-neutral-400">Education</dt>
                <dd className="mt-1 font-medium">{EDUCATION[0].degree}</dd>
                <dd className="mt-1 text-sm text-neutral-500">
                  {EDUCATION[0].school}
                </dd>
              </div>
              <div className="border-t border-neutral-100 pt-4">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm font-medium accent-text hover:underline"
                >
                  {SITE.email}
                </a>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-b border-neutral-100 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] accent-text">
              A little more
            </p>
          </div>
          <div className="max-w-3xl">
            {SITE.bioExtended
              .split("\n\n")
              .map((paragraph) => paragraph.trim())
              .filter(Boolean)
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4 text-lg leading-relaxed text-neutral-600 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-9 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] accent-text">
                What I work with
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                Skills &amp; tools
              </h2>
            </div>
            <p className="text-sm text-neutral-500">
              Technologies I use to turn ideas into applications.
            </p>
          </div>
          <SkillsExplorer />
        </div>
      </section>

      <section className="border-t border-neutral-100 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] accent-text">
                Career
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                Experience
              </h2>
            </div>
            <a
              href={SITE.cvPdf}
              download
              className="text-sm font-medium text-neutral-500 transition hover:text-violet-700"
            >
              Download full CV <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="space-y-4">
            {EXPERIENCE.map((item) => (
              <article
                key={item.role + item.company + item.period}
                className="grid gap-3 rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-violet-200 hover:shadow-sm md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8 md:p-6"
              >
                <p className="text-sm text-neutral-400">{item.period}</p>
                <div>
                  <h3 className="font-semibold tracking-tight">
                    {item.role}
                    <span className="mx-2 text-neutral-300" aria-hidden="true">
                      /
                    </span>
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-violet-700 hover:underline"
                      >
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-100 bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] accent-text">
              Education
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              Learning foundations
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {EDUCATION.map((item) => (
              <article
                key={item.degree}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <p className="text-sm text-neutral-400">{item.period}</p>
                <h3 className="mt-3 font-semibold">{item.degree}</h3>
                <p className="mt-1 text-sm text-neutral-600">{item.school}</p>
                <p className="mt-3 text-sm text-neutral-500">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-100 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] accent-text">
              Continued learning
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              Certificates
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((certificate) => (
              <a
                key={certificate.name}
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div className="overflow-hidden border-b border-neutral-100 bg-neutral-50 p-3">
                  <img
                    src={certificate.image}
                    alt={`${certificate.name} certificate`}
                    className="aspect-[4/3] w-full object-contain transition duration-300 group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold leading-snug transition group-hover:text-violet-700">
                    {certificate.name}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-500">
                    {certificate.issuer} · {certificate.year}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
