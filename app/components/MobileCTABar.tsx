"use client";

import { PHONE_HREF } from "@/app/lib/constants";
import PhoneLink from "./PhoneLink";

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-forest-dark/20 bg-forest p-2 md:hidden">
      <div className="flex gap-2">
        <PhoneLink
          href={PHONE_HREF}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white py-2.5 text-sm font-bold text-forest transition-colors hover:bg-cream"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Call Now
        </PhoneLink>
        <a
          href="#quote"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-cream py-2.5 text-sm font-bold text-forest transition-colors hover:bg-white"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
          </svg>
          Get Quote
        </a>
      </div>
    </div>
  );
}
