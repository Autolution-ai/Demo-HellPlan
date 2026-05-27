'use client'

// Detailed architect's floor plan rendered as SVG. All drawable strokes carry
// `data-draw` so a parent GSAP timeline can reveal them with stroke-dashoffset.
// Text labels appear at the end of the parent timeline via opacity.
export function ArchitectPlan({ className = '' }: { className?: string }) {
  const ink = '#1a1a1a'
  const mute = '#9b9b9b'
  const accent = '#f5e800'

  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
    >
      <defs>
        <pattern id="plan-hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke={ink} strokeOpacity="0.18" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Outer building outline — thick stroke */}
      <rect
        x="180" y="180" width="1200" height="540"
        fill="none" stroke={ink} strokeWidth="4"
        data-draw
      />

      {/* Outer wall hatching at corners for blueprint feel */}
      <rect x="180" y="180" width="60" height="540" fill="url(#plan-hatch)" data-draw-fade />
      <rect x="1320" y="180" width="60" height="540" fill="url(#plan-hatch)" data-draw-fade />

      {/* Interior walls — vertical and horizontal divides */}
      <line x1="640" y1="180" x2="640" y2="720" stroke={ink} strokeWidth="2.5" data-draw />
      <line x1="640" y1="430" x2="1380" y2="430" stroke={ink} strokeWidth="2.5" data-draw />
      <line x1="1040" y1="430" x2="1040" y2="720" stroke={ink} strokeWidth="2.5" data-draw />
      <line x1="180" y1="500" x2="640" y2="500" stroke={ink} strokeWidth="2.5" data-draw />

      {/* Door openings (gap + arc) */}
      <path d="M 640 320 A 60 60 0 0 1 700 380" fill="none" stroke={ink} strokeWidth="1" data-draw />
      <line x1="640" y1="320" x2="640" y2="260" stroke={ink} strokeWidth="2.5" data-draw />
      <line x1="640" y1="380" x2="640" y2="430" stroke={ink} strokeWidth="2.5" data-draw />

      <path d="M 1040 500 A 50 50 0 0 0 1090 550" fill="none" stroke={ink} strokeWidth="1" data-draw />
      <line x1="1040" y1="500" x2="1040" y2="450" stroke={ink} strokeWidth="2.5" data-draw />
      <line x1="1040" y1="550" x2="1040" y2="720" stroke={ink} strokeWidth="2.5" data-draw />

      <path d="M 360 500 A 45 45 0 0 0 405 545" fill="none" stroke={ink} strokeWidth="1" data-draw />

      {/* Window markers on north wall (three parallel lines) */}
      <g stroke={ink} strokeWidth="1.5">
        <line x1="280" y1="180" x2="420" y2="180" data-draw />
        <line x1="280" y1="176" x2="420" y2="176" data-draw />
        <line x1="280" y1="184" x2="420" y2="184" data-draw />

        <line x1="500" y1="180" x2="600" y2="180" data-draw />
        <line x1="500" y1="176" x2="600" y2="176" data-draw />
        <line x1="500" y1="184" x2="600" y2="184" data-draw />

        <line x1="800" y1="180" x2="950" y2="180" data-draw />
        <line x1="800" y1="176" x2="950" y2="176" data-draw />
        <line x1="800" y1="184" x2="950" y2="184" data-draw />

        <line x1="1080" y1="180" x2="1240" y2="180" data-draw />
        <line x1="1080" y1="176" x2="1240" y2="176" data-draw />
        <line x1="1080" y1="184" x2="1240" y2="184" data-draw />
      </g>

      {/* Electrical outlets (small filled rectangles with two dots) */}
      <g fill="none" stroke={ink} strokeWidth="1.5">
        {[
          [300, 230], [560, 230], [820, 230], [1180, 230],
          [300, 460], [560, 460], [820, 700], [1180, 700],
          [300, 700], [560, 700], [1300, 460], [1300, 700],
        ].map(([cx, cy], i) => (
          <g key={i} data-draw-fade>
            <rect x={cx - 9} y={cy - 6} width="18" height="12" rx="2" />
            <circle cx={cx - 4} cy={cy} r="1.2" fill={ink} />
            <circle cx={cx + 4} cy={cy} r="1.2" fill={ink} />
          </g>
        ))}
      </g>

      {/* Light fixtures (circle with cross) — centered in each room */}
      <g fill="none" stroke={ink} strokeWidth="1.5">
        {[
          [400, 320], [400, 600], [840, 300], [1180, 300], [840, 580], [1200, 580],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="18" data-draw />
            <line x1={cx - 18} y1={cy} x2={cx + 18} y2={cy} data-draw />
            <line x1={cx} y1={cy - 18} x2={cx} y2={cy + 18} data-draw />
          </g>
        ))}
      </g>

      {/* Distribution panel (rectangle with diagonal) */}
      <g stroke={ink} strokeWidth="2" fill="none">
        <rect x="200" y="220" width="40" height="60" data-draw />
        <line x1="200" y1="280" x2="240" y2="220" data-draw />
      </g>

      {/* Dimension lines — top */}
      <g stroke={mute} strokeWidth="1">
        <line x1="180" y1="130" x2="1380" y2="130" data-draw />
        <line x1="180" y1="120" x2="180" y2="140" data-draw />
        <line x1="1380" y1="120" x2="1380" y2="140" data-draw />
        <line x1="640" y1="120" x2="640" y2="140" data-draw />
        <line x1="1040" y1="120" x2="1040" y2="140" data-draw />
      </g>

      {/* Dimension lines — left */}
      <g stroke={mute} strokeWidth="1">
        <line x1="120" y1="180" x2="120" y2="720" data-draw />
        <line x1="110" y1="180" x2="130" y2="180" data-draw />
        <line x1="110" y1="720" x2="130" y2="720" data-draw />
        <line x1="110" y1="430" x2="130" y2="430" data-draw />
      </g>

      {/* Yellow cable routing — the electrical pathway connecting panel to fixtures */}
      <path
        d="M 220 280 L 220 320 L 400 320 L 400 600 L 640 600 L 840 600 L 840 300 L 1180 300 L 1180 580 L 1200 580"
        fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        data-draw
      />

      {/* Compass / N arrow */}
      <g transform="translate(1440, 240)">
        <circle cx="0" cy="0" r="34" fill="none" stroke={ink} strokeWidth="1.5" data-draw />
        <line x1="0" y1="-34" x2="0" y2="34" stroke={ink} strokeWidth="1" data-draw />
        <line x1="-34" y1="0" x2="34" y2="0" stroke={ink} strokeWidth="1" data-draw />
        <polygon points="0,-30 -7,-12 7,-12" fill={ink} data-draw-fade />
      </g>

      {/* Title block — bottom right */}
      <g transform="translate(1080, 760)" data-draw-fade>
        <rect x="0" y="0" width="300" height="120" fill="none" stroke={ink} strokeWidth="1.5" data-draw />
        <line x1="0" y1="36" x2="300" y2="36" stroke={ink} strokeWidth="1" data-draw />
        <line x1="0" y1="78" x2="300" y2="78" stroke={ink} strokeWidth="1" data-draw />
        <line x1="160" y1="36" x2="160" y2="120" stroke={ink} strokeWidth="1" data-draw />
      </g>

      {/* Text labels — appear via parent opacity (no stroke draw) */}
      <g fontFamily="ui-monospace, 'SF Mono', Menlo, monospace" data-text>
        {/* Dimensions */}
        <text x="780" y="118" fontSize="14" fill={mute} textAnchor="middle">24.00 m</text>
        <text x="410" y="118" fontSize="11" fill={mute} textAnchor="middle">9.20</text>
        <text x="840" y="118" fontSize="11" fill={mute} textAnchor="middle">8.00</text>
        <text x="1210" y="118" fontSize="11" fill={mute} textAnchor="middle">6.80</text>
        <text x="98" y="455" fontSize="14" fill={mute} textAnchor="middle" transform="rotate(-90 98 455)">10.80 m</text>

        {/* Compass */}
        <text x="1440" y="195" fontSize="14" fill={ink} textAnchor="middle" fontWeight="700">N</text>

        {/* Room labels */}
        <text x="400" y="335" fontSize="11" fill={mute} textAnchor="middle" letterSpacing="1">BÜRO 01</text>
        <text x="400" y="620" fontSize="11" fill={mute} textAnchor="middle" letterSpacing="1">BÜRO 02</text>
        <text x="840" y="315" fontSize="11" fill={mute} textAnchor="middle" letterSpacing="1">BESPRECHUNG</text>
        <text x="1180" y="315" fontSize="11" fill={mute} textAnchor="middle" letterSpacing="1">ARCHIV</text>
        <text x="840" y="600" fontSize="11" fill={mute} textAnchor="middle" letterSpacing="1">TECHNIK</text>
        <text x="1200" y="600" fontSize="11" fill={mute} textAnchor="middle" letterSpacing="1">SERVER</text>

        {/* Title block */}
        <text x="10" y="22" fontSize="11" fill={mute} transform="translate(1080, 760)">PROJEKT</text>
        <text x="170" y="22" fontSize="14" fill={ink} fontWeight="700" transform="translate(1080, 760)">24-187</text>
        <text x="10" y="58" fontSize="9" fill={mute} transform="translate(1080, 760)">LEISTUNGSPHASE</text>
        <text x="10" y="72" fontSize="13" fill={ink} fontWeight="700" transform="translate(1080, 760)">LP 3 — ENTWURF</text>
        <text x="170" y="58" fontSize="9" fill={mute} transform="translate(1080, 760)">MASSSTAB</text>
        <text x="170" y="72" fontSize="13" fill={ink} fontWeight="700" transform="translate(1080, 760)">1:100</text>
        <text x="10" y="100" fontSize="9" fill={mute} transform="translate(1080, 760)">FACHPLANER ELEKTROTECHNIK</text>
        <text x="10" y="114" fontSize="12" fill={ink} fontWeight="700" transform="translate(1080, 760)">HELLPLAN GmbH · Potsdam</text>
      </g>
    </svg>
  )
}
