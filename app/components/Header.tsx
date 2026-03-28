"use client";

import { useState } from "react";
import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/app/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1 font-heading text-2xl font-bold">
          <span className="text-forest">Turf</span>
          <span className="text-charcoal">n</span>
          <span className="text-bark">Trunk</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-charcoal transition-colors hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PHONE_HREF}
            className="rounded-full bg-forest px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-forest-dark"
          >
            {PHONE}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-charcoal md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-sage-light bg-cream px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-semibold text-charcoal transition-colors hover:text-forest"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PHONE_HREF}
            className="mt-2 block rounded-full bg-forest px-5 py-2 text-center text-sm font-bold text-white transition-colors hover:bg-forest-dark"
          >
            {PHONE}
          </a>
        </nav>
      )}
    </header>
  );
}
