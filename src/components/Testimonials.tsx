'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/content'
import { SectionShell } from './SectionShell'

export function Testimonials() {
  return (
    <SectionShell
      eyebrow="Stimmen aus laufenden Projekten"
      title="Was Auftraggeber über uns sagen."
      intro="Drei Zitate aus Architektur, öffentlicher Verwaltung und Bauträgerschaft."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl bg-[color:var(--color-surface)] border border-[color:var(--color-line)] p-7 md:p-8 flex flex-col"
          >
            <Quote className="h-8 w-8 text-[color:var(--color-accent)]" />
            <blockquote className="mt-5 font-display text-lg leading-snug text-[color:var(--color-ink)] flex-1">
              „{t.quote}"
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-[color:var(--color-line)]">
              <div className="font-semibold text-[color:var(--color-ink)]">{t.author}</div>
              <div className="text-sm text-[color:var(--color-ink-soft)]">{t.role}</div>
              <div className="text-xs text-[color:var(--color-mute)] mt-0.5">{t.company}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </SectionShell>
  )
}
