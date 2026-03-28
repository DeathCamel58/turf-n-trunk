import Link from "next/link";
import ServiceIcon from "./ServiceIcon";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
}: ServiceCardProps) {
  const content = (
    <div className="group flex h-full flex-col rounded-xl border border-sage/30 bg-cream p-6 transition-shadow hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sage-light text-forest">
        <ServiceIcon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="font-heading text-lg font-bold text-charcoal">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{description}</p>
      {href && (
        <span className="mt-4 text-sm font-semibold text-forest group-hover:underline">
          Learn more &rarr;
        </span>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
