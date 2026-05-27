import { Logo, WordMark } from './Logo'
import { company, navItems } from '@/lib/content'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[color:var(--color-bg)] border-t border-[color:var(--color-line)]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-3">
              <Logo size={40} />
              <WordMark className="text-xl" />
            </div>
            <p className="mt-5 text-sm text-[color:var(--color-ink-soft)] leading-relaxed max-w-sm">
              {company.fullName}. Ingenieurbüro in {company.city}, {company.region}.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-mute)]">
              Navigation
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-mute)]">
              Kontakt
            </div>
            <address className="mt-4 not-italic text-sm text-[color:var(--color-ink-soft)] space-y-1 leading-relaxed">
              <div>{company.address}</div>
              <div>
                <a href={company.phoneHref} className="hover:text-[color:var(--color-ink)]">
                  {company.phone}
                </a>
              </div>
              <div>
                <a href={company.emailHref} className="hover:text-[color:var(--color-ink)]">
                  {company.email}
                </a>
              </div>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-[color:var(--color-line)] flex flex-wrap items-center justify-between gap-4 text-xs text-[color:var(--color-mute)]">
          <div>
            © {year} {company.name}. {company.hrb} · Ust-ID {company.vatId}
          </div>
          <div className="flex gap-5">
            <a href="/impressum" className="hover:text-[color:var(--color-ink)]">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-[color:var(--color-ink)]">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
