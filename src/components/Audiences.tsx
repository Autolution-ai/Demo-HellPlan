'use client'

import { motion } from 'framer-motion'
import { audiences } from '@/lib/content'
import { SectionShell } from './SectionShell'

export function Audiences() {
  return (
    <SectionShell
      id="loesen"
      eyebrow="Was wir lösen"
      title="Drei Zielgruppen. Drei klare Antworten."
      intro="Jedes Projekt hat einen Auftraggeber mit einer eigenen Sorge. Wir kennen sie — und planen entsprechend."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {audiences.map((aud, i) => (
          <motion.div
            key={aud.tag}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            className="group relative rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 md:p-8 hover:border-[color:var(--color-ink)] transition-colors"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-mute)]">
              {aud.tag}
            </div>
            <p className="mt-5 font-display text-lg font-semibold text-[color:var(--color-ink)] leading-snug">
              „{aud.pain}"
            </p>
            <div className="mt-5 flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--color-accent)] flex-shrink-0" />
              <p className="text-[color:var(--color-ink-soft)] leading-relaxed">{aud.promise}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  )
}
