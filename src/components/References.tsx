'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { references, referenceFilters, type ReferenceFilter } from '@/lib/content'
import { SectionShell } from './SectionShell'

export function References() {
  const [active, setActive] = useState<ReferenceFilter>('Alle')

  const filtered =
    active === 'Alle' ? references : references.filter((r) => r.category === active)

  return (
    <SectionShell
      id="referenzen"
      eyebrow="Referenzen"
      title="Ausschnitt aus über 500 realisierten Projekten."
      intro="Filtern Sie nach Branche. Jede Karte zeigt Auftraggeber-Typ, Standort und Leistungsumfang."
    >
      <div className="mb-8 -mx-6 px-6 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 min-w-max">
          {referenceFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors whitespace-nowrap ${
                active === f
                  ? 'bg-[color:var(--color-ink)] text-[color:var(--color-bg)]'
                  : 'bg-[color:var(--color-surface)] text-[color:var(--color-ink-soft)] border border-[color:var(--color-line)] hover:border-[color:var(--color-ink)] hover:text-[color:var(--color-ink)]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((ref) => (
            <motion.article
              key={`${ref.title}-${ref.year}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="group rounded-2xl bg-[color:var(--color-surface)] border border-[color:var(--color-line)] overflow-hidden hover:border-[color:var(--color-ink)] transition-colors"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[color:var(--color-line)] to-[color:var(--color-bg)] overflow-hidden">
                <svg
                  viewBox="0 0 400 300"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M 0 200 Q 100 80 200 200 T 400 200"
                    fill="none"
                    stroke="#f5e800"
                    strokeOpacity="0.35"
                    strokeWidth="2"
                    className="transition-all duration-500 group-hover:stroke-opacity-80"
                  />
                </svg>
                <div className="absolute top-4 left-4 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-bg)] px-3 py-1 text-xs font-semibold">
                  {ref.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-[color:var(--color-ink)] leading-snug">
                  {ref.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[color:var(--color-mute)]">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {ref.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {ref.year}
                  </span>
                </div>
                <p className="mt-4 text-sm text-[color:var(--color-ink-soft)] leading-relaxed">
                  {ref.scope}
                </p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
      <p className="mt-8 text-xs text-[color:var(--color-mute)]">
        Hinweis: Projektabbildungen werden mit Freigabe der Auftraggeber ergänzt.
      </p>
    </SectionShell>
  )
}
