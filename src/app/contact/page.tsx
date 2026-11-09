import type { Metadata } from "next";
import { SITE } from "@/data/config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE.name} for professional opportunities and collaboration.`,
};

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: "mail",
    description: "For project inquiries and opportunities",
  },
  {
    label: "Phone",
    value: "(+970) 592864360",
    href: "tel:+970592864360",
    icon: "phone",
    description: "Call or message me",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nama-salameh",
    href: "https://www.linkedin.com/in/nama-salameh/",
    icon: "linkedin",
    description: "Connect with me professionally",
  },
  {
    label: "GitHub",
    value: "github.com/Nama-Salameh",
    href: "https://github.com/Nama-Salameh",
    icon: "github",
    description: "See what I have been building",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="soft-grad border-b border-neutral-100">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[minmax(0,1fr)_18rem] md:items-end md:gap-16 md:py-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] accent-text">
              Contact
            </p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
              Let&apos;s start a conversation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Have a project in mind or an opportunity to discuss? Choose the
              channel that works best for you and get in touch.
            </p>
          </div>

          <aside className="rounded-2xl border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                {SITE.available && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50 motion-reduce:animate-none" />
                )}
                <span
                  className={`relative h-3 w-3 rounded-full ring-4 ${
                    SITE.available
                      ? "bg-emerald-500 ring-emerald-100"
                      : "bg-neutral-400 ring-neutral-100"
                  }`}
                />
              </span>
              <p className="text-sm font-semibold text-neutral-900">
                {SITE.available
                  ? "Available for remote freelance work"
                  : "Not currently available"}
              </p>
            </div>
            <p className="mt-3 pl-6 text-sm leading-relaxed text-neutral-500">
              {SITE.location}
              {SITE.available && " · Open to remote collaboration."}
            </p>
          </aside>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] accent-text">
              Contact details
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              Reach me directly
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {CONTACT_ITEMS.map((item) => {
              const isExternal =
                item.label === "LinkedIn" || item.label === "GitHub";

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex min-w-0 items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-neutral-600 transition-colors group-hover:bg-violet-50 group-hover:text-violet-700">
                    {item.icon === "mail" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    )}
                    {item.icon === "phone" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M5 3h4l2 5-3 2a16 16 0 0 0 6 6l2-3 5 2v4c0 1-1 2-2 2C10 21 3 14 3 5c0-1 1-2 2-2Z" />
                      </svg>
                    )}
                    {item.icon === "linkedin" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M4 9v11M4 4v.01M9 20v-7a4 4 0 0 1 8 0v7M9 9v11" />
                      </svg>
                    )}
                    {item.icon === "github" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    )}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium uppercase tracking-wider text-neutral-400">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-all font-semibold text-neutral-900 transition-colors group-hover:text-violet-700">
                      {item.value}
                    </span>
                    <span className="mt-1 block text-xs text-neutral-500">
                      {item.description}
                    </span>
                  </span>

                  <span
                    className="shrink-0 text-neutral-300 transition-all group-hover:translate-x-1 group-hover:text-violet-600"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm text-neutral-500">
            Prefer email?{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-medium accent-text hover:underline"
            >
              Send me a message
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
