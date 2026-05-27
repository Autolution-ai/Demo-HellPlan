'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  children: ReactNode
  className?: string
  tone?: 'light' | 'dark'
}

export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = '',
  tone = 'light',
}: Props) {
  const isDark = tone === 'dark'
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 overflow-hidden ${
        isDark ? 'bg-[color:var(--color-ink)] text-white' : ''
      } ${className}`}
    >
      {isDark && (
        <>
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]" aria-hidden>
            <defs>
              <pattern id={`shell-grid-${id ?? 'x'}`} width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#fff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#shell-grid-${id ?? 'x'})`} />
          </svg>
          <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[color:var(--color-accent)] opacity-[0.08] blur-3xl" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          {eyebrow && (
            <div
              className={`mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
                isDark ? 'text-[color:var(--color-accent)]' : 'text-[color:var(--color-ink-soft)]'
              }`}
            >
              <span className="h-px w-8 bg-[color:var(--color-accent)]" />
              {eyebrow}
            </div>
          )}
          <h2
            className={`font-display text-4xl md:text-5xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-[color:var(--color-ink)]'
            }`}
          >
            {title}
          </h2>
          {intro && (
            <p
              className={`mt-5 text-lg leading-relaxed ${
                isDark ? 'text-white/70' : 'text-[color:var(--color-ink-soft)]'
              }`}
            >
              {intro}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  )
}

export function WaveDivider() {
  return (
    <svg
      viewBox="0 0 1440 60"
      className="wave-divider"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M 0 30 Q 180 0 360 30 T 720 30 T 1080 30 T 1440 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}
