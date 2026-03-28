"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PHONE, PHONE_HREF } from "@/app/lib/constants";
import PhoneLink from "./PhoneLink";

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
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Turf n Trunk Landscaping"
            width={200}
            height={50}
            priority
            className="h-10 w-auto sm:h-12"
          />
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
          <PhoneLink
            href={PHONE_HREF}
            className="text-sm font-bold text-forest transition-colors hover:text-forest-dark"
          >
            {PHONE}
          </PhoneLink>
          <a
            href="#quote"
            className="rounded-full bg-forest px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-forest-dark"
          >
            Request a Free Quote
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
            href="#quote"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-full bg-forest px-5 py-2 text-center text-sm font-bold text-white transition-colors hover:bg-forest-dark"
          >
            Request a Free Quote
          </a>
        </nav>
      )}
    </header>
  );
}
