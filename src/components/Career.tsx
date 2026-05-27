'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Briefcase, PencilRuler, Coins, Compass, BookOpen, MapPin } from 'lucide-react'
import { careerJobs, careerBenefits, company } from '@/lib/content'

const jobIcons = {
  engineer: Briefcase,
  cad: PencilRuler,
} as const

const benefitIcons = [Coins, Compass, BookOpen, MapPin]

export function Career() {
  return (
    <section id="karriere" className="relative py-24 md:py-32 bg-[color:var(--color-surface)] border-y border-[color:var(--color-line)] overflow-hidden">
      {/* dezenter Schaltplan-Hintergrund aus dem Original */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero/hero-pattern.jpg')" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-16"
        >
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink-soft)]">
              <span className="h-px w-8 bg-[color:var(--color-accent)]" />
              Karriere bei HELLPLAN
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[color:var(--color-ink)] leading-[1.05]">
              Werden Sie Teil der Planung,
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">die in Brandenburg steht.</span>
                <span className="absolute inset-x-0 bottom-1.5 h-3 md:h-4 bg-[color:var(--color-accent)] -z-0" />
              </span>
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
              Zur Verstärkung unseres Teams in Potsdam suchen wir zum nächstmöglichen Zeitpunkt
              in unbefristeter Anstellung:
            </p>
          </div>
          <a
            href={`mailto:${company.email}?subject=Bewerbung%20HELLPLAN`}
            className="group hidden lg:inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-bg)] px-6 py-3.5 text-sm font-semibold hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-ink)] transition-colors whitespace-nowrap"
          >
            Direkt bewerben
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Job cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {careerJobs.map((job, i) => {
            const Icon = jobIcons[job.icon as keyof typeof jobIcons]
            return (
              <motion.article
                key={job.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-2xl bg-[color:var(--color-bg)] border border-[color:var(--color-line)] p-8 md:p-10 hover:border-[color:var(--color-ink)] transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[color:var(--color-ink)] text-[color:var(--color-accent)]">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-mute)]">
                    Vollzeit · Potsdam
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-[color:var(--color-ink)] leading-tight tracking-tight">
                  {job.role}
                </h3>
                <p className="mt-4 text-[color:var(--color-ink-soft)] leading-relaxed">
                  {job.description}
                </p>

                <div className="mt-7">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-mute)] mb-3">
                    Fachgebiete
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.fields.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3 py-1 text-xs font-medium text-[color:var(--color-ink)]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[color:var(--color-line)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-mute)] mb-3">
                    Sie bringen mit
                  </div>
                  <ul className="space-y-2">
                    {job.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-[color:var(--color-ink-soft)] leading-relaxed">
                        <Check className="h-4 w-4 text-[color:var(--color-ink)] flex-shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`mailto:${company.email}?subject=Bewerbung%20${encodeURIComponent(job.role)}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-ink)] group/btn"
                >
                  Auf diese Stelle bewerben
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </motion.article>
            )
          })}
        </div>

        {/* Benefits — yellow band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-[color:var(--color-accent)] p-10 md:p-14 overflow-hidden"
        >
          <svg
            viewBox="0 0 1200 300"
            className="pointer-events-none absolute inset-0 w-full h-full opacity-15"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 0 150 Q 150 30 300 150 T 600 150 T 900 150 T 1200 150"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="2"
            />
          </svg>

          <div className="relative">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink)]/70">
              Was Sie bei uns erwartet
            </div>
            <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[color:var(--color-ink)] tracking-tight max-w-2xl">
              Faires Einkommen. Echte Verantwortung. Kein Konzern.
            </h3>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {careerBenefits.map((b, i) => {
                const Icon = benefitIcons[i]
                return (
                  <div key={b.title}>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-ink)] text-[color:var(--color-accent)]">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <h4 className="mt-4 font-display text-lg font-bold text-[color:var(--color-ink)]">
                      {b.title}
                    </h4>
                    <p className="mt-2 text-sm text-[color:var(--color-ink)]/80 leading-relaxed">
                      {b.body}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)] p-7 md:p-9"
        >
          <div>
            <h4 className="font-display text-xl font-bold text-[color:var(--color-ink)]">
              Keine passende Stelle? Schreiben Sie uns trotzdem.
            </h4>
            <p className="mt-2 text-[color:var(--color-ink-soft)] leading-relaxed">
              Wir wachsen weiter. Senden Sie uns Ihre Unterlagen mit Gehaltsvorstellung
              {' '}— gern auch per E-Mail an{' '}
              <a href={`mailto:${company.email}`} className="underline font-medium text-[color:var(--color-ink)]">
                {company.email}
              </a>
              .
            </p>
          </div>
          <a
            href={`mailto:${company.email}?subject=Initiativbewerbung%20HELLPLAN`}
            className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--color-ink)] px-6 py-3 text-sm font-semibold text-[color:var(--color-ink)] hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-bg)] transition-colors whitespace-nowrap"
          >
            Initiativbewerbung senden
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
