"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { RECAPTCHA_SITE_KEY } from "@/app/lib/constants";
import { trackEvent } from "@/app/lib/analytics";

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        params: { sitekey: string; callback: (token: string) => void; "expired-callback": () => void }
      ) => number;
      reset: (widgetId: number) => void;
      getResponse: (widgetId: number) => string;
    };
    onRecaptchaLoad?: () => void;
  }
}

export default function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY || !recaptchaRef.current) return;

    function renderWidget() {
      if (
        window.grecaptcha &&
        recaptchaRef.current &&
        widgetIdRef.current === null
      ) {
        widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          callback: (token: string) => setRecaptchaToken(token),
          "expired-callback": () => setRecaptchaToken(""),
        });
      }
    }

    if (window.grecaptcha) {
      renderWidget();
    } else {
      window.onRecaptchaLoad = renderWidget;
      const script = document.createElement("script");
      script.src =
        "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (RECAPTCHA_SITE_KEY && !recaptchaToken) {
      setError("Please complete the reCAPTCHA verification.");
      return;
    }

    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      emailAddress: formData.get("email") as string,
      phoneNumber: formData.get("phone") as string,
      addressStreet: formData.get("addressStreet") as string,
      addressCity: formData.get("addressCity") as string,
      description: formData.get("message") as string,
      recaptchaToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message =
          data?.error || "Something went wrong. Please try again.";
        setError(message);
        if (window.grecaptcha && widgetIdRef.current !== null) {
          window.grecaptcha.reset(widgetIdRef.current);
          setRecaptchaToken("");
        }
        setSubmitting(false);
        return;
      }

      trackEvent("form_submission", {
        form_name: "quote_request",
      });
      router.push("/contact/thank-you");
    } catch {
      setError("Something went wrong. Please try again.");
      if (window.grecaptcha && widgetIdRef.current !== null) {
        window.grecaptcha.reset(widgetIdRef.current);
        setRecaptchaToken("");
      }
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-lg border border-sage/40 bg-white px-4 py-2.5 text-charcoal placeholder:text-slate/50 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-sage/30 bg-cream p-8"
    >
      <div className="space-y-5">
        {/* Name row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-1 block text-sm font-semibold text-charcoal"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className={inputClass}
              placeholder="John"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="mb-1 block text-sm font-semibold text-charcoal"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className={inputClass}
              placeholder="Smith"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-semibold text-charcoal"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1 block text-sm font-semibold text-charcoal"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={inputClass}
            placeholder="(770) 555-0123"
          />
        </div>

        {/* Address row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="addressStreet"
              className="mb-1 block text-sm font-semibold text-charcoal"
            >
              Street Address{" "}
              <span className="font-normal text-slate">(optional)</span>
            </label>
            <input
              type="text"
              id="addressStreet"
              name="addressStreet"
              className={inputClass}
              placeholder="123 Main St"
            />
          </div>
          <div>
            <label
              htmlFor="addressCity"
              className="mb-1 block text-sm font-semibold text-charcoal"
            >
              City{" "}
              <span className="font-normal text-slate">(optional)</span>
            </label>
            <input
              type="text"
              id="addressCity"
              name="addressCity"
              className={inputClass}
              placeholder="Peachtree City"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1 block text-sm font-semibold text-charcoal"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className={inputClass}
            placeholder="Tell us about your project..."
          />
        </div>

        {/* reCAPTCHA */}
        {RECAPTCHA_SITE_KEY && (
          <div ref={recaptchaRef} className="flex justify-start" />
        )}

        {error && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-forest py-3 font-bold text-white transition-colors hover:bg-forest-dark disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting..." : "Request a Free Quote"}
        </button>
      </div>
    </form>
  );
}
