'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { SineBackdrop } from './SineBackdrop'
import { stats } from '@/lib/content'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
      <SineBackdrop className="pointer-events-none absolute inset-x-0 top-1/4 h-[60%] w-full opacity-90" />
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[color:var(--color-accent-soft)] opacity-40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-1.5 text-xs font-medium text-[color:var(--color-ink-soft)]"
        >
          <MapPin className="h-3.5 w-3.5 text-[color:var(--color-ink)]" />
          Ingenieurbüro · Potsdam · seit 1990
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-[color:var(--color-ink)] max-w-5xl"
        >
          Elektroplanung
          <br />
          für Brandenburg.
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">Seit 1990.</span>
            <span className="absolute inset-x-0 bottom-2 h-4 md:h-5 bg-[color:var(--color-accent)] -z-0" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-[color:var(--color-ink-soft)] leading-relaxed"
        >
          Wir planen Elektro- und Gebäudetechnik für öffentliche Auftraggeber, Architekten und
          Bauherren. Über 500 realisierte Projekte. Eine Adresse in Potsdam.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-bg)] px-7 py-4 text-base font-semibold hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-ink)] transition-colors"
          >
            Projekt anfragen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#referenzen"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-ink)] px-7 py-4 text-base font-semibold text-[color:var(--color-ink)] hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-bg)] transition-colors"
          >
            Referenzen ansehen
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.55 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)] rounded-2xl overflow-hidden"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[color:var(--color-bg)] p-6 md:p-8">
              <dt className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-mute)]">
                {stat.detail}
              </dt>
              <dd className="mt-3 font-display text-3xl md:text-4xl font-bold text-[color:var(--color-ink)]">
                {stat.value}
              </dd>
              <dd className="mt-1 text-sm text-[color:var(--color-ink-soft)]">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
