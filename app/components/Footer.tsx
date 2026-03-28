import Link from "next/link";
import {
  BUSINESS_NAME,
  PHONE,
  PHONE_HREF,
  EMAIL,
  SERVICE_AREAS,
} from "@/app/lib/constants";
import PhoneLink from "./PhoneLink";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Business info */}
          <div>
            <p className="font-heading text-xl font-bold">
              <span className="text-sage-light">Turf</span>{" "}
              <span className="text-white/70">n</span>{" "}
              <span className="text-amber-200">Trunk</span>
            </p>
            <p className="mt-2 text-sm text-white/70">
              Professional landscaping for Peachtree City and the surrounding
              communities.
            </p>
            <p className="mt-4 text-sm">
              <PhoneLink href={PHONE_HREF} className="hover:text-sage-light transition-colors">
                {PHONE}
              </PhoneLink>
            </p>
            <p className="text-sm">
              <a href={`mailto:${EMAIL}`} className="hover:text-sage-light transition-colors">
                {EMAIL}
              </a>
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-lg font-bold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-sage-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className="font-heading text-lg font-bold">Service Areas</h3>
            <ul className="mt-3 space-y-2">
              {SERVICE_AREAS.map((city) => (
                <li key={city} className="text-sm text-white/70">
                  {city}, GA
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
