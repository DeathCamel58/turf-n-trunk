"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-1 items-center py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500">
          <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
        </div>

        <h1 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Something Went Wrong
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-slate">
          We&apos;re sorry — an unexpected error occurred. Please try again, or
          contact us if the problem persists.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => unstable_retry()}
            className="rounded-full bg-forest px-8 py-3 font-bold text-white transition-colors hover:bg-forest-dark"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-full border-2 border-forest px-8 py-3 font-bold text-forest transition-colors hover:bg-forest hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
