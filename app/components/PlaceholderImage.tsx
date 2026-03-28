const VARIANTS: Record<string, { gradient: string; icon: string }> = {
  lawn: {
    gradient: "from-[#4a7c3f] to-[#7ab648]",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
  },
  trees: {
    gradient: "from-[#2D5A27] to-[#5a8a3c]",
    icon: "M12 2L4 14h4v8h8v-8h4L12 2z",
  },
  garden: {
    gradient: "from-[#7A9E7E] to-[#c4d7a8]",
    icon: "M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z",
  },
  hardscape: {
    gradient: "from-[#8B7355] to-[#c4a87c]",
    icon: "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z",
  },
};

interface PlaceholderImageProps {
  variant?: keyof typeof VARIANTS;
  label?: string;
  className?: string;
}

export default function PlaceholderImage({
  variant = "lawn",
  label,
  className = "",
}: PlaceholderImageProps) {
  const { gradient, icon } = VARIANTS[variant] ?? VARIANTS.lawn;

  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-gradient-to-br ${gradient} ${className}`}
    >
      <div className="flex flex-col items-center gap-2 text-white/60">
        <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
          <path d={icon} />
        </svg>
        {label && <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>}
      </div>
    </div>
  );
}
