'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE, NAV_LINKS } from '@/data/config';
import ThemeToggle from '@/components/ThemeToggle';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold tracking-tight text-lg"
          aria-label={`${SITE.name} — home`}
        >
          {SITE.name}
          <span className="accent-text" aria-hidden="true">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  active
                    ? 'font-semibold text-neutral-900'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full accent-bg px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 sm:inline-flex"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden border-t border-neutral-100 px-6 py-2 flex gap-6 text-sm overflow-x-auto">
        {NAV_LINKS.map((link) => {
          const active = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap transition ${
                active
                  ? 'font-semibold text-neutral-900'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
