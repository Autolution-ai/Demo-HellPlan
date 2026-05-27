'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/lib/content'
import { SectionShell } from './SectionShell'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <SectionShell
      id="faq"
      eyebrow="Häufige Fragen"
      title="Antworten vor der ersten Anfrage."
    >
      <div className="max-w-3xl">
        {faqs.map((item, i) => {
          const isOpen = open === i
          return (
            <div
              key={item.q}
              className="border-b border-[color:var(--color-line)] last:border-b-0"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-start justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-lg md:text-xl font-semibold text-[color:var(--color-ink)]">
                  {item.q}
                </span>
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[color:var(--color-line)] mt-0.5">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-14 text-[color:var(--color-ink-soft)] leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </SectionShell>
  )
}
