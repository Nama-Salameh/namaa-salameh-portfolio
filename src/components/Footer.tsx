import { SITE, SOCIAL_LINKS } from '@/data/config';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-neutral-100 bg-white px-6 py-8 text-center">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <nav className="flex items-center justify-center gap-3" aria-label="Social links">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:-translate-y-0.5 hover:border-neutral-400 hover:text-neutral-950"
            >
              {social.label === "GitHub" ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.81 2.19 3.42 1.56.1-.72.4-1.21.72-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0C17.06 5.74 18 6.04 18 6.04c.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.03.76 2.08v2.42c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9h2.97v9.45ZM6.45 7.71a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.74h-2.97v-4.6c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.76 1.2-1.76 2.43v4.68H9.22V9h2.85v1.29h.04c.4-.74 1.37-1.53 2.82-1.53 3.02 0 3.58 1.99 3.58 4.58v5.11h-.06Z" />
                </svg>
              )}
            </a>
          ))}
          <a
            href={`mailto:${SITE.email}`}
            aria-label={`Email ${SITE.email}`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:-translate-y-0.5 hover:border-neutral-400 hover:text-neutral-950"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </a>
        </nav>
        <p className="mt-5 text-sm text-neutral-600">
          © {year} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
