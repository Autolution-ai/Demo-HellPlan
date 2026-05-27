'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react'
import { references, referenceFilters, type ReferenceFilter } from '@/lib/content'
import { SectionShell } from './SectionShell'
import { Picture } from './Picture'

const variantByCategory: Record<string, 'circuit' | 'waves' | 'grid' | 'pulse' | 'nodes' | 'beam'> = {
  Öffentlich: 'grid',
  Bildung: 'nodes',
  Gesundheit: 'pulse',
  Industrie: 'beam',
  Wohnen: 'waves',
}

const toneByCategory: Record<string, 'light' | 'dark' | 'accent'> = {
  Öffentlich: 'dark',
  Bildung: 'light',
  Gesundheit: 'accent',
  Industrie: 'dark',
  Wohnen: 'light',
}

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
          {filtered.map((ref, i) => (
            <motion.article
              key={`${ref.title}-${ref.year}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="group relative rounded-2xl bg-[color:var(--color-surface)] border border-[color:var(--color-line)] overflow-hidden hover:border-[color:var(--color-ink)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Picture
                  src={ref.imageSrc}
                  alt={ref.alt}
                  fallbackVariant={variantByCategory[ref.category]}
                  fallbackTone={toneByCategory[ref.category]}
                  seed={i + 1}
                  className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  label="Foto folgt"
                />
                <div className="absolute top-4 left-4 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-bg)] px-3 py-1 text-xs font-semibold backdrop-blur">
                  {ref.category}
                </div>
                <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-4 w-4 text-[color:var(--color-ink)]" />
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
        Projektabbildungen werden nach Freigabe der Auftraggeber durch echte Fotografien ersetzt.
      </p>
    </SectionShell>
  )
}
