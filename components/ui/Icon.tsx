interface IconProps {
  name: string;
  size?: number;
  className?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
}

// Each icon is an array of path `d` attributes (Lucide-style: 24×24 viewBox, stroke-based)
const icons: Record<string, string[]> = {
  "phone-send": [
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z",
    "M15 5l5 5",
    "M20 5l-5 5",
  ],
  "message-auto": [
    "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    "M13 8l-2 4h3l-2 4",
  ],
  reply: [
    "M9 17l-5-5 5-5",
    "M4 12h12a4 4 0 0 1 0 8h-1",
  ],
  "star-link": [
    "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z",
    "M15 14l2 2",
    "M17 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0",
  ],
  shield: [
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  ],
  inbox: [
    "M22 12h-6l-2 3H10l-2-3H2",
    "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
  ],
  tap: [
    "M6 9a6 6 0 0 1 12 0v4",
    "M12 3v6",
    "M12 15v4",
    "M8 15a4 4 0 0 0 8 0",
    "M12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
  ],
  route: [
    "M3 7a3 3 0 1 0 6 0 3 3 0 0 0-6 0",
    "M15 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0",
    "M9 7h3a5 5 0 0 1 5 5v2",
    "M6 10v3a5 5 0 0 0 5 5h1",
  ],
  chart: [
    "M18 20V10",
    "M12 20V4",
    "M6 20v-6",
  ],
  bell: [
    "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
    "M13.73 21a2 2 0 0 1-3.46 0",
  ],
  "cloud-off": [
    "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6",
    "M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3",
    "M1 1l22 22",
  ],
  lock: [
    "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z",
    "M7 11V7a5 5 0 0 1 10 0v4",
  ],
  "copy-check": [
    "M16 3H4a2 2 0 0 0-2 2v12",
    "M8 9h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2z",
    "M10 16l2 2 4-4",
  ],
  clock: [
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z",
    "M12 6v6l4 2",
  ],
  "alert-circle": [
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z",
    "M12 8v4",
    "M12 16h.01",
  ],
  thermometer: [
    "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z",
  ],
  wrench: [
    "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  ],
  zap: [
    "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  ],
  sparkles: [
    "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z",
    "M19 13l1 3 3 1-3 1-1 3-1-3-3-1 3-1z",
    "M5 17l.5 1.5L7 19l-1.5.5L5 21l-.5-1.5L3 19l1.5-.5z",
  ],
  tree: [
    "M12 22v-6",
    "M9 9l3-6 3 6",
    "M7 14l5-5 5 5",
    "M5 19l7-5 7 5",
  ],
  "more-horizontal": [
    "M12 12h.01",
    "M19 12h.01",
    "M5 12h.01",
  ],
  star: [
    "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z",
  ],
  "shield-alert": [
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    "M12 8v4",
    "M12 16h.01",
  ],
  "trending-up": [
    "M23 6l-9.5 9.5-5-5L1 18",
    "M17 6h6v6",
  ],
  check: [
    "M20 6L9 17l-5-5",
  ],
  phone: [
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z",
  ],
};

export function Icon({
  name,
  size = 24,
  className = "",
  ariaLabel,
  ariaHidden,
}: IconProps) {
  const paths = icons[name];

  if (!paths) {
    return null;
  }

  const isDecorative = ariaHidden || !ariaLabel;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={isDecorative ? true : undefined}
      aria-label={ariaLabel || undefined}
      role={ariaLabel ? "img" : undefined}
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
