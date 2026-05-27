'use client'

import { motion } from 'framer-motion'
import { company } from '@/lib/content'
import { SectionShell } from './SectionShell'

export function About() {
  return (
    <SectionShell
      id="ueber-uns"
      eyebrow="Über uns"
      title="Brandenburger Ingenieursarbeit seit 1990."
    >
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
        <div className="space-y-6 text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
          <p>
            HELLPLAN wurde 1990 in Potsdam gegründet — als Brandenburg sich neu sortierte. Aus
            diesem Anspruch ist ein Ingenieurbüro geworden, das alle elektrotechnischen Gewerke
            unter einem Dach plant.
          </p>
          <p>
            Heute führen wir die Gesellschaft als GmbH unter Geschäftsführer Florian Wildgrube
            fort. Was geblieben ist: die Adresse in der Seestraße, die Verantwortung in eigener
            Hand und der Anspruch, jedes Projekt termintreu und kostensicher durch alle neun
            Leistungsphasen zu führen.
          </p>
          <p>
            Wir arbeiten herstellerunabhängig. Unsere Empfehlung kostet Sie nur das, was an
            Lebenszyklus, Wartung und Energie wirtschaftlich Sinn ergibt.
          </p>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-[color:var(--color-ink)] text-[color:var(--color-bg)] p-8 md:p-10"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Eckdaten
          </div>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-white/50">Gegründet</dt>
              <dd className="mt-1 text-base font-medium">{company.foundedIn}</dd>
            </div>
            <div>
              <dt className="text-white/50">Geschäftsführer</dt>
              <dd className="mt-1 text-base font-medium">{company.ceo}</dd>
            </div>
            <div>
              <dt className="text-white/50">Sitz</dt>
              <dd className="mt-1 text-base font-medium">{company.address}</dd>
            </div>
            <div>
              <dt className="text-white/50">Eintragung</dt>
              <dd className="mt-1 text-base font-medium">{company.hrb}</dd>
            </div>
          </dl>
        </motion.aside>
      </div>
    </SectionShell>
  )
}
