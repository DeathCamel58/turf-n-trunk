const ICONS: Record<string, string> = {
  leaf: "M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.71c.75.34 1.56.54 2.34.71V22h2v-2.06c.94-.09 1.86-.34 2.73-.74L14.4 22l1.89-.66C14.41 16.17 12 10 17 8z",
  pencil: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
  tree: "M12 2L4 14h4v8h8v-8h4L12 2z",
  layers: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z",
  calendar: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z",
  brick: "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z",
  droplet: "M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2C20 10.48 17.33 6.55 12 2z",
};

interface ServiceIconProps {
  name: string;
  className?: string;
}

export default function ServiceIcon({ name, className = "h-6 w-6" }: ServiceIconProps) {
  const path = ICONS[name] ?? ICONS.leaf;

  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );
}
