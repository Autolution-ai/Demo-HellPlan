'use client'

import { motion } from 'framer-motion'

export function SineBackdrop({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 600"
      className={className}
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="sine-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f5e800" stopOpacity="0" />
          <stop offset="40%" stopColor="#f5e800" stopOpacity="1" />
          <stop offset="100%" stopColor="#f5e800" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M -50 320 Q 160 80 360 320 T 770 320 T 1180 320 T 1500 320"
        fill="none"
        stroke="url(#sine-grad)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.95 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
      />
      <motion.path
        d="M -50 380 Q 160 140 360 380 T 770 380 T 1180 380 T 1500 380"
        fill="none"
        stroke="#9b9b9b"
        strokeOpacity="0.18"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.6, ease: 'easeOut', delay: 0.2 }}
      />
    </svg>
  )
}
