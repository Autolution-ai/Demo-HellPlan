import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { company } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | HELLPLAN',
  robots: { index: false, follow: true },
}

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 md:pt-40 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Datenschutzerklärung
          </h1>
          <div className="mt-10 space-y-8 text-[color:var(--color-ink-soft)] leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-bold text-[color:var(--color-ink)] mb-3">
                Verantwortlicher
              </h2>
              <p>
                {company.fullName}
                <br />
                {company.address}
                <br />
                {company.email} · {company.phone}
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-[color:var(--color-ink)] mb-3">
                Erhebung von Daten beim Besuch dieser Website
              </h2>
              <p>
                Beim Aufruf dieser Website werden durch den Hosting-Provider technisch
                notwendige Server-Logdaten gespeichert (IP-Adresse, Browsertyp, Referrer-URL,
                Zugriffszeit). Diese Daten dienen ausschließlich dem sicheren Betrieb der
                Website und werden nach spätestens 30 Tagen gelöscht. Rechtsgrundlage ist Art. 6
                Abs. 1 lit. f DSGVO.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-[color:var(--color-ink)] mb-3">
                Cookies und Tracking
              </h2>
              <p>
                Diese Website setzt keine Tracking-Cookies ein und bindet keine Analyse-Tools
                Dritter ein. Schriften werden lokal über next/font ausgeliefert.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-[color:var(--color-ink)] mb-3">
                Kontaktaufnahme
              </h2>
              <p>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben
                zur Bearbeitung Ihrer Anfrage auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Wir
                löschen diese Daten, sobald sie für den Zweck nicht mehr erforderlich sind und
                keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-[color:var(--color-ink)] mb-3">
                Ihre Rechte
              </h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Beschwerden können Sie bei
                der Landesbeauftragten für den Datenschutz Brandenburg einreichen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
