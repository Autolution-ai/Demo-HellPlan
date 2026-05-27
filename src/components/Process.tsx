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
  const timelineRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const path = pathRef.current
      if (!path) return
      const length = path.getTotalLength()
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })

      // The wave thread draws itself as the user scrolls through the timeline.
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: 0.8,
        },
      })

      // Each phase row appears from its own side as it enters the viewport.
      const rows = timelineRef.current?.querySelectorAll<HTMLElement>('[data-row]')
      rows?.forEach((row) => {
        const side = row.dataset.side === 'right' ? 60 : -60
        gsap.fromTo(
          row,
          { opacity: 0, x: side },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="prozess"
      className="relative py-24 md:py-32 bg-[color:var(--color-ink)] text-[color:var(--color-bg)] overflow-hidden"
    >
      {/* subtle background grid */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden>
        <defs>
          <pattern id="proc-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#fff" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#proc-grid)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-20">
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

        <div ref={timelineRef} className="relative">
          {/* central animated sine thread */}
          <svg
            viewBox="0 0 100 1800"
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 h-full w-24"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 50 0 Q 90 100 50 200 T 50 400 T 50 600 T 50 800 T 50 1000 T 50 1200 T 50 1400 T 50 1600 T 50 1800"
              fill="none"
              stroke="#9b9b9b"
              strokeOpacity="0.18"
              strokeWidth="1.5"
            />
            <path
              ref={pathRef}
              d="M 50 0 Q 90 100 50 200 T 50 400 T 50 600 T 50 800 T 50 1000 T 50 1200 T 50 1400 T 50 1600 T 50 1800"
              fill="none"
              stroke="#f5e800"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>

          <div className="space-y-12 md:space-y-16">
            {hoaiPhases.map((phase, i) => {
              const isRight = i % 2 === 1
              return (
                <div
                  key={phase.lp}
                  data-row
                  data-side={isRight ? 'right' : 'left'}
                  className={`relative grid md:grid-cols-2 items-center gap-6 md:gap-12 ${
                    isRight ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  {/* connecting dot on the center thread */}
                  <span className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[color:var(--color-accent)] ring-4 ring-[color:var(--color-ink)] z-10" />

                  <div className={isRight ? 'md:text-left' : 'md:text-right'}>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                      {phase.lp}
                    </div>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold leading-tight">
                      {phase.title}
                    </h3>
                  </div>

                  <div
                    className={`rounded-xl bg-white/5 border border-white/10 backdrop-blur p-5 md:p-6 ${
                      isRight ? 'md:text-right' : ''
                    }`}
                  >
                    <p className="text-white/75 leading-relaxed text-[15px]">{phase.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
