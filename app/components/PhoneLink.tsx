"use client";

import { trackEvent } from "@/app/lib/analytics";

interface PhoneLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function PhoneLink({
  href,
  className,
  children,
}: PhoneLinkProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={() =>
        trackEvent("phone_call_click", {
          link_url: href,
        })
      }
    >
      {children}
    </a>
  );
}
