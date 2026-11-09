import type { Metadata } from "next";
import Link from "next/link";
import { SITE, PROJECTS } from "@/data/config";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Selected frontend, backend, and web application projects by ${SITE.name}.`,
};

export default function PortfolioPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <section className="soft-grad">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16">
          <p className="text-sm font-semibold uppercase tracking-widest accent-text mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Things I&apos;ve built.
          </h1>
          <p className="text-neutral-600 text-lg max-w-xl">
            A selection of frontend, backend, and web application projects,
            with a look at the challenges, approach, and tools behind each one.
          </p>
        </div>
      </section>

      {/* ── PROJECT GRID ─────────────────────────────────────── */}
      <section className="py-20 border-t border-neutral-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((p, index) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-sm text-violet-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-2">
                    {p.featured && (
                      <span className="text-xs font-medium text-violet-700 bg-violet-50 rounded-full px-2.5 py-1">
                        Featured
                      </span>
                    )}
                    <span className="text-xs text-neutral-400">{p.year}</span>
                  </div>
                </div>
                <h2 className="font-semibold text-xl tracking-tight group-hover:text-violet-700 transition-colors">
                  {p.title}
                </h2>
                <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                  {p.tagline}
                </p>
                <p className="text-neutral-500 text-sm mt-4 leading-relaxed line-clamp-2">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-neutral-600 bg-neutral-50 border border-neutral-100 rounded-full px-2.5 py-1 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-auto pt-6 text-sm font-medium accent-text">
                  Read project <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
