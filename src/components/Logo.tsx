type Props = { className?: string; size?: number }

export function Logo({ className, size = 36 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="HELLPLAN Logo"
    >
      <rect x="0" y="0" width="32" height="64" rx="10" fill="#9b9b9b" />
      <rect x="32" y="0" width="32" height="64" rx="10" fill="#f5e800" />
      <path
        d="M2 36 Q 17 6 32 36 T 62 36"
        fill="none"
        stroke="#f5e800"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M32 36 Q 47 66 62 36"
        fill="none"
        stroke="#9b9b9b"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <text x="6" y="56" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="11" fill="#f5e800">HELL</text>
      <text x="35" y="56" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="11" fill="#9b9b9b">PLAN</text>
    </svg>
  )
}

export function WordMark({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="font-extrabold tracking-tight">HELL</span>
      <span className="font-extrabold tracking-tight text-[color:var(--color-mute)]">PLAN</span>
    </span>
  )
}
