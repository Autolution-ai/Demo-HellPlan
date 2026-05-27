'use client'

type Variant = 'circuit' | 'waves' | 'grid' | 'pulse' | 'nodes' | 'beam'
type Tone = 'light' | 'dark' | 'accent'

type Props = {
  variant?: Variant
  tone?: Tone
  className?: string
  label?: string
  seed?: number
}

// SVG-illustration that doubles as a placeholder for real photography.
// Designed to look intentional rather than generic.
export function Illustration({
  variant = 'circuit',
  tone = 'light',
  className = '',
  label,
  seed = 0,
}: Props) {
  const palette =
    tone === 'dark'
      ? { bg: '#1a1a1a', soft: '#2a2a2a', stroke: '#f5e800', muted: '#9b9b9b' }
      : tone === 'accent'
      ? { bg: '#f5e800', soft: '#fff59a', stroke: '#1a1a1a', muted: '#1a1a1a' }
      : { bg: '#f5f5f3', soft: '#ffffff', stroke: '#1a1a1a', muted: '#9b9b9b' }

  const s = seed

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: palette.bg }}>
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {/* gradient halo */}
        <defs>
          <radialGradient id={`halo-${variant}-${s}`} cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor={palette.soft} stopOpacity="0.9" />
            <stop offset="100%" stopColor={palette.bg} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#halo-${variant}-${s})`} />

        {variant === 'circuit' && (
          <g stroke={palette.stroke} strokeWidth="1.5" fill="none" opacity="0.9">
            <path d={`M 0 ${100 + s * 7} L 120 ${100 + s * 7} L 150 ${130 + s * 5} L 250 ${130 + s * 5} L 280 ${100 + s * 7} L 400 ${100 + s * 7}`} />
            <path d={`M 0 ${200 - s * 4} L 90 ${200 - s * 4} L 120 ${170 - s * 4} L 210 ${170 - s * 4} L 240 ${200 - s * 4} L 400 ${200 - s * 4}`} />
            <circle cx="120" cy={130 + s * 5} r="4" fill={palette.stroke} />
            <circle cx="250" cy={130 + s * 5} r="4" fill={palette.stroke} />
            <circle cx="90" cy={200 - s * 4} r="4" fill={palette.stroke} />
            <circle cx="240" cy={200 - s * 4} r="4" fill={palette.stroke} />
            <rect x="170" y={115 + s * 5} width="40" height="30" stroke={palette.stroke} fill={palette.bg} />
          </g>
        )}

        {variant === 'waves' && (
          <g fill="none" opacity="0.85">
            <path
              d={`M -20 ${150 + s * 6} Q 60 ${60 + s * 4} 140 ${150 + s * 6} T 300 ${150 + s * 6} T 460 ${150 + s * 6}`}
              stroke={palette.stroke}
              strokeWidth="2"
            />
            <path
              d={`M -20 ${190 - s * 3} Q 60 ${100 - s * 5} 140 ${190 - s * 3} T 300 ${190 - s * 3} T 460 ${190 - s * 3}`}
              stroke={palette.muted}
              strokeWidth="1.5"
              strokeOpacity="0.5"
            />
            <path
              d={`M -20 ${230 + s * 2} Q 60 ${140 + s * 2} 140 ${230 + s * 2} T 300 ${230 + s * 2} T 460 ${230 + s * 2}`}
              stroke={palette.muted}
              strokeWidth="1"
              strokeOpacity="0.3"
            />
          </g>
        )}

        {variant === 'grid' && (
          <g stroke={palette.muted} strokeOpacity="0.3" strokeWidth="0.5" fill="none">
            {Array.from({ length: 9 }).map((_, i) => (
              <line key={`v-${i}`} x1={50 * (i + 0.5)} y1="0" x2={50 * (i + 0.5)} y2="300" />
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={50 * (i + 0.5)} x2="400" y2={50 * (i + 0.5)} />
            ))}
            <rect
              x={80 + s * 10}
              y={70 + s * 5}
              width="240"
              height="160"
              stroke={palette.stroke}
              strokeWidth="2"
              fill="none"
            />
            <rect
              x={130 + s * 8}
              y={120 + s * 4}
              width="140"
              height="60"
              stroke={palette.stroke}
              strokeWidth="1.5"
              fill={palette.bg}
            />
          </g>
        )}

        {variant === 'pulse' && (
          <g stroke={palette.stroke} strokeWidth="2" fill="none">
            <path
              d={`M 0 150 L 80 150 L 100 ${100 - s * 4} L 130 ${200 + s * 4} L 160 ${80 - s * 5} L 190 ${220 + s * 5} L 220 150 L 400 150`}
            />
            <circle cx={s % 2 ? 100 : 190} cy="150" r="6" fill={palette.stroke} opacity="0.4" />
          </g>
        )}

        {variant === 'nodes' && (
          <g fill="none">
            {[
              [80, 100],
              [200, 70],
              [320, 110],
              [120, 200],
              [260, 220],
              [340, 180],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="6" fill={palette.stroke} />
                <circle cx={cx} cy={cy} r="14" stroke={palette.stroke} strokeWidth="1" opacity="0.4" />
              </g>
            ))}
            <path
              d="M 80 100 L 200 70 L 320 110 M 80 100 L 120 200 L 260 220 L 320 110 M 260 220 L 340 180"
              stroke={palette.stroke}
              strokeWidth="1"
              opacity="0.5"
            />
          </g>
        )}

        {variant === 'beam' && (
          <g>
            <rect x="0" y="140" width="400" height="20" fill={palette.stroke} opacity="0.15" />
            <rect x="0" y="148" width="400" height="4" fill={palette.stroke} />
            {[60, 140, 220, 300].map((x, i) => (
              <g key={i}>
                <rect x={x - 2} y={100 + s * 3} width="4" height="50" fill={palette.stroke} />
                <circle cx={x} cy={90 + s * 3} r="8" fill={palette.stroke} />
              </g>
            ))}
          </g>
        )}
      </svg>

      {label && (
        <div className="absolute bottom-3 right-3 rounded-full bg-black/60 text-white text-[10px] font-medium px-2.5 py-1 backdrop-blur">
          {label}
        </div>
      )}
    </div>
  )
}
