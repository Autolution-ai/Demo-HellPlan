'use client'

import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function Career() {
  return (
    <section id="karriere" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-[color:var(--color-accent)] p-10 md:p-16"
        >
          <div className="relative grid md:grid-cols-[1.5fr_1fr] gap-10 items-end">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink)]/70">
                Karriere bei HELLPLAN
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--color-ink)]">
                Wir wachsen mit dem Bedarf in Brandenburg.
              </h2>
              <p className="mt-5 text-lg text-[color:var(--color-ink)]/80 leading-relaxed max-w-xl">
                Wir suchen Fachplaner, Techniker und Bauleiter mit Lust auf saubere
                Elektroplanung — vom Konzept bis zur Abnahme. Kurze Wege, klare Projekte,
                Standort Potsdam.
              </p>
            </div>
            <a
              href="mailto:info@hellplan.de?subject=Initiativbewerbung%20HELLPLAN"
              className="group inline-flex items-center justify-between gap-3 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-bg)] px-7 py-4 text-base font-semibold w-full md:w-auto"
            >
              Initiativbewerbung schreiben
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          <svg
            viewBox="0 0 800 200"
            className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-32 opacity-25"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 0 100 Q 100 20 200 100 T 400 100 T 600 100 T 800 100"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
