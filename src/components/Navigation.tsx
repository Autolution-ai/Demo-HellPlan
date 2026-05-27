'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Logo, WordMark } from './Logo'
import { navItems, company } from '@/lib/content'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[color:var(--color-bg)]/85 backdrop-blur border-b border-[color:var(--color-line)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="HELLPLAN Startseite">
          <Logo size={36} />
          <WordMark className="hidden sm:inline text-lg" />
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-bg)] px-5 py-2.5 text-sm font-semibold hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-ink)] transition-colors"
          >
            Projekt anfragen
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-line)]"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[color:var(--color-surface)] border-t border-[color:var(--color-line)]">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[color:var(--color-ink)] py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-bg)] px-5 py-3 text-sm font-semibold mt-2"
            >
              {company.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
