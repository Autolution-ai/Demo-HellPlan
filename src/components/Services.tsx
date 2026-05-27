'use client'

import { motion } from 'framer-motion'
import { Zap, Lightbulb, ShieldAlert, Network, Cog, FileSearch, ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/content'
import { SectionShell } from './SectionShell'
import { Illustration } from './Illustration'

const icons = [Zap, Lightbulb, ShieldAlert, Network, Cog, FileSearch]

export function Services() {
  return (
    <SectionShell
      id="leistungen"
      eyebrow="Leistungen"
      title="Sechs Gewerke. Eine Verantwortung."
      intro="Wir planen alle elektrotechnischen Gewerke der Kostengruppe 440. Vom ersten Strich bis zur Abnahme."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => {
          const Icon = icons[i]
          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: 'easeOut' }}
              className="group relative rounded-2xl overflow-hidden bg-[color:var(--color-surface)] border border-[color:var(--color-line)] hover:border-[color:var(--color-ink)] transition-all duration-300 hover:-translate-y-1"
            >
              <Illustration
                variant={s.illustration as 'beam' | 'pulse' | 'nodes' | 'circuit' | 'grid'}
                tone={i === 2 ? 'dark' : i === 4 ? 'accent' : 'light'}
                seed={i}
                className="aspect-[16/10]"
              />
              <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-ink)] text-[color:var(--color-accent)] shadow-lg">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <div className="p-6 md:p-7">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)] mb-2 [color:var(--color-mute)]">
                  <span className="text-[color:var(--color-mute)]">{s.short}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[color:var(--color-ink)] flex items-start justify-between gap-3">
                  {s.title}
                  <ArrowUpRight className="h-5 w-5 text-[color:var(--color-mute)] opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 flex-shrink-0" />
                </h3>
                <p className="mt-3 text-[color:var(--color-ink-soft)] leading-relaxed text-[15px]">
                  {s.description}
                </p>
              </div>
            </motion.article>
          )
        })}
      </div>
    </SectionShell>
  )
}
