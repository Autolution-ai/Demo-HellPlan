'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { company } from '@/lib/content'

export function Contact() {
  return (
    <section id="kontakt" className="relative bg-[color:var(--color-ink)] text-[color:var(--color-bg)] py-24 md:py-32 overflow-hidden">
      <svg
        viewBox="0 0 1440 400"
        className="pointer-events-none absolute inset-x-0 top-0 w-full h-72 opacity-20"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M 0 200 Q 180 60 360 200 T 720 200 T 1080 200 T 1440 200"
          fill="none"
          stroke="#f5e800"
          strokeWidth="2"
        />
      </svg>
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Kontakt
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Reden wir über
            <br />
            Ihr Projekt.
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Skizzieren Sie kurz, worum es geht. Wir melden uns innerhalb von zwei Werktagen mit
            einer ersten Einschätzung. Oder Sie vereinbaren direkt einen Termin bei uns in Potsdam.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          <a
            href={company.phoneHref}
            className="group bg-[color:var(--color-ink)] p-7 md:p-9 hover:bg-white/5 transition-colors flex flex-col"
          >
            <Phone className="h-5 w-5 text-[color:var(--color-accent)]" />
            <div className="mt-5 text-xs uppercase tracking-wider text-white/50">Telefon</div>
            <div className="mt-2 font-display text-xl font-bold flex items-center gap-2">
              {company.phone}
              <ArrowRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </div>
          </a>
          <a
            href={company.emailHref}
            className="group bg-[color:var(--color-ink)] p-7 md:p-9 hover:bg-white/5 transition-colors flex flex-col"
          >
            <Mail className="h-5 w-5 text-[color:var(--color-accent)]" />
            <div className="mt-5 text-xs uppercase tracking-wider text-white/50">E-Mail</div>
            <div className="mt-2 font-display text-xl font-bold flex items-center gap-2">
              {company.email}
              <ArrowRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </div>
          </a>
          <div className="bg-[color:var(--color-ink)] p-7 md:p-9 flex flex-col">
            <MapPin className="h-5 w-5 text-[color:var(--color-accent)]" />
            <div className="mt-5 text-xs uppercase tracking-wider text-white/50">Anschrift</div>
            <div className="mt-2 font-display text-xl font-bold leading-snug">
              {company.address}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
