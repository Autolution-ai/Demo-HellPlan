'use client'

import { motion } from 'framer-motion'
import { Zap, Lightbulb, ShieldAlert, Network, Cog, FileSearch } from 'lucide-react'
import { services } from '@/lib/content'
import { SectionShell } from './SectionShell'

const icons = [Zap, Lightbulb, ShieldAlert, Network, Cog, FileSearch]

export function Services() {
  return (
    <SectionShell
      id="leistungen"
      eyebrow="Leistungen"
      title="Sechs Gewerke. Eine Verantwortung."
      intro="Wir planen alle elektrotechnischen Gewerke der Kostengruppe 440 — vom ersten Strich bis zur Abnahme."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)] rounded-2xl overflow-hidden">
        {services.map((s, i) => {
          const Icon = icons[i]
          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: 'easeOut' }}
              className="group bg-[color:var(--color-bg)] p-7 md:p-9 hover:bg-[color:var(--color-surface)] transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-ink)] text-[color:var(--color-accent)] group-hover:bg-[color:var(--color-accent)] group-hover:text-[color:var(--color-ink)] transition-colors">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-[color:var(--color-ink)]">
                {s.title}
              </h3>
              <p className="mt-3 text-[color:var(--color-ink-soft)] leading-relaxed text-[15px]">
                {s.description}
              </p>
            </motion.article>
          )
        })}
      </div>
    </SectionShell>
  )
}
