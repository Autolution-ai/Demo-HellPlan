import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { company } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Impressum | HELLPLAN',
  robots: { index: false, follow: true },
}

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 md:pt-40 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Impressum</h1>
          <div className="mt-10 space-y-8 text-[color:var(--color-ink-soft)] leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-bold text-[color:var(--color-ink)] mb-3">
                Anbieter
              </h2>
              <p>
                {company.fullName}
                <br />
                {company.address}
                <br />
                Telefon: {company.phone}
                <br />
                Telefax: {company.fax}
                <br />
                E-Mail:{' '}
                <a href={company.emailHref} className="underline">
                  {company.email}
                </a>
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-[color:var(--color-ink)] mb-3">
                Vertretungsberechtigt
              </h2>
              <p>Geschäftsführer: {company.ceo}</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-[color:var(--color-ink)] mb-3">
                Registereintrag
              </h2>
              <p>
                Registergericht: {company.hrb}
                <br />
                Umsatzsteuer-ID nach §27a UStG: {company.vatId}
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-[color:var(--color-ink)] mb-3">
                Verantwortlich für den Inhalt nach §55 Abs. 2 RStV
              </h2>
              <p>{company.ceo}, Anschrift wie oben.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-[color:var(--color-ink)] mb-3">
                Haftungshinweis
              </h2>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
                Inhalte externer Links. Für den Inhalt verlinkter Seiten sind ausschließlich
                deren Betreiber verantwortlich.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
