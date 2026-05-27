'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { hoaiPhases } from '@/lib/content'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const phasesRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const path = pathRef.current
      if (!path) return
      const length = path.getTotalLength()
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: 1,
        },
      })

      const cards = phasesRef.current?.querySelectorAll<HTMLElement>('[data-phase]')
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: phasesRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="prozess"
      className="relative py-24 md:py-32 bg-[color:var(--color-ink)] text-[color:var(--color-bg)] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            <span className="h-px w-8 bg-[color:var(--color-accent)]" />
            So planen wir
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Neun Leistungsphasen. Eine durchgehende Linie.
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            HOAI strukturiert unser Vorgehen. Wir liefern in jeder Phase belastbare Ergebnisse.
            Keine Lücken zwischen Konzept und Übergabe.
          </p>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 1200 240"
            className="absolute inset-x-0 top-0 w-full h-32 md:h-48"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 0 120 Q 75 20 150 120 T 300 120 T 450 120 T 600 120 T 750 120 T 900 120 T 1050 120 T 1200 120"
              fill="none"
              stroke="#9b9b9b"
              strokeOpacity="0.18"
              strokeWidth="2"
            />
            <path
              ref={pathRef}
              d="M 0 120 Q 75 20 150 120 T 300 120 T 450 120 T 600 120 T 750 120 T 900 120 T 1050 120 T 1200 120"
              fill="none"
              stroke="#f5e800"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <div
            ref={phasesRef}
            className="relative pt-32 md:pt-48 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4"
          >
            {hoaiPhases.map((phase) => (
              <div
                key={phase.lp}
                data-phase
                className="rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-colors"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--color-accent)]">
                  {phase.lp}
                </div>
                <div className="mt-1.5 font-display font-semibold text-sm leading-snug">
                  {phase.title}
                </div>
                <div className="mt-2 text-[11px] text-white/60 leading-snug">{phase.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
