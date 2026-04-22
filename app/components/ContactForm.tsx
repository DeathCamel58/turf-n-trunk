"use client";

import { useEffect, useRef } from "react";

export default function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.childElementCount > 0) return;

    const script = document.createElement("script");
    script.id = "intuit-form-311992";
    script.src =
      "https://form-assets-prod.mcf-prod.a.intuit.com/snippet/account/251344267?formId=311992";
    script.async = true;
    container.appendChild(script);
  }, []);

  return <div ref={containerRef} className="isolate" />;
}