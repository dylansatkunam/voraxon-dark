export function VoraxonLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 350 52"
      height="36"
      className={className}
      aria-label="Voraxon"
    >
      <defs>
        {/* Green gradient left (dark) to right (light) for AXON */}
        <linearGradient id="axon-grad" x1="118" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
      </defs>

      {/* VORAXON as single text with tspan for color split */}
      <text
        x="0"
        y="40"
        fontFamily="var(--font-sans), 'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="700"
        fontSize="36"
        letterSpacing="1"
      >
        <tspan fill="white">VOR</tspan><tspan fill="#4ade80">AXON</tspan>
      </text>
    </svg>
  );
}
