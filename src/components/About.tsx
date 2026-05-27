'use client'

import { motion } from 'framer-motion'
import { company, aboutImage } from '@/lib/content'
import { SectionShell } from './SectionShell'
import { Picture } from './Picture'

export function About() {
  return (
    <SectionShell
      id="ueber-uns"
      eyebrow="Über uns"
      title="Brandenburger Ingenieursarbeit seit 1990."
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
        <div className="space-y-6 text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
          <p>
            HELLPLAN wurde 1990 in Potsdam gegründet, als Brandenburg sich neu sortierte. Aus
            diesem Anspruch ist ein Ingenieurbüro geworden, das alle elektrotechnischen Gewerke
            unter einem Dach plant.
          </p>
          <p>
            Heute führen wir die Gesellschaft als GmbH unter Geschäftsführer Florian Wildgrube
            fort. Die Adresse in der Seestraße ist geblieben. Auch der Anspruch, jedes Projekt
            termintreu und kostensicher durch alle neun Leistungsphasen zu führen.
          </p>
          <p>
            Wir arbeiten herstellerunabhängig. Unsere Empfehlung kostet Sie nur das, was an
            Lebenszyklus, Wartung und Energie wirtschaftlich Sinn ergibt.
          </p>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)] rounded-2xl overflow-hidden mt-10"
          >
            {[
              { label: 'Gegründet', value: String(company.foundedIn) },
              { label: 'Sitz', value: 'Potsdam' },
              { label: 'Geschäftsführer', value: 'F. Wildgrube' },
              { label: 'Rechtsform', value: 'GmbH' },
            ].map((row) => (
              <div key={row.label} className="bg-[color:var(--color-bg)] p-5">
                <dt className="text-xs uppercase tracking-wider text-[color:var(--color-mute)]">
                  {row.label}
                </dt>
                <dd className="mt-1.5 font-display text-lg font-semibold text-[color:var(--color-ink)]">
                  {row.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <Picture
            src={aboutImage.src}
            alt={aboutImage.alt}
            fallbackVariant="circuit"
            fallbackTone="dark"
            seed={2}
            className="aspect-[4/5] rounded-2xl"
            label="Teamfoto folgt"
          />
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[color:var(--color-accent)] p-6 max-w-[200px] shadow-xl">
            <div className="font-display text-3xl font-bold text-[color:var(--color-ink)] leading-none">
              35+
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-ink)]/80">
              Jahre in Potsdam
            </div>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  )
}
