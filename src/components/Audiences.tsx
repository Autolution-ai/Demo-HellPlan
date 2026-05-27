'use client'

import { motion } from 'framer-motion'
import { promises } from '@/lib/content'
import { SectionShell } from './SectionShell'

export function Audiences() {
  return (
    <SectionShell
      id="loesen"
      eyebrow="Was wir versprechen"
      title="Drei Sätze. Drei Versprechen."
      intro="Wir planen seit 1990 Elektrotechnik in Brandenburg. Auf das hier können Sie uns festnageln."
    >
      <div className="space-y-px bg-[color:var(--color-line)] border border-[color:var(--color-line)] rounded-2xl overflow-hidden">
        {promises.map((p, i) => (
          <motion.div
            key={p.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            className="group relative bg-[color:var(--color-bg)] hover:bg-[color:var(--color-surface)] transition-colors"
          >
            <div className="grid md:grid-cols-[120px_1fr_280px] gap-6 md:gap-10 items-center p-8 md:p-12">
              <div className="font-display text-6xl md:text-7xl font-bold text-[color:var(--color-mute)]/40 group-hover:text-[color:var(--color-accent)] transition-colors duration-500">
                {p.number}
              </div>
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-[color:var(--color-ink)] tracking-tight">
                  {p.headline}
                </h3>
                <p className="mt-4 text-[color:var(--color-ink-soft)] leading-relaxed max-w-xl">
                  {p.body}
                </p>
              </div>
              <div className="md:border-l md:border-[color:var(--color-line)] md:pl-8">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-mute)] mb-2">
                  Beleg
                </div>
                <div className="font-display text-base font-semibold text-[color:var(--color-ink)] leading-snug">
                  {p.proof}
                </div>
              </div>
            </div>
            {/* hover accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[color:var(--color-accent)] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </SectionShell>
  )
}
