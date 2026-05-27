import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const siteUrl = 'https://hellplan.de'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'HELLPLAN | Ingenieurbüro für Elektro- und Gebäudetechnik | Potsdam',
  description:
    'Elektroplanung für Brandenburg seit 1990. Über 500 realisierte Projekte für öffentliche Auftraggeber, Architekten und Bauherren. Standort Potsdam.',
  keywords: [
    'Ingenieurbüro Elektrotechnik Potsdam',
    'Fachplaner Elektrotechnik Brandenburg',
    'Gebäudetechnik Planung Potsdam',
    'TGA Planung Brandenburg',
    'Elektroplanung Berlin Brandenburg',
    'Brandmeldeanlagen Brandenburg',
    'HOAI Elektroplanung',
  ],
  openGraph: {
    title: 'HELLPLAN | Elektroplanung für Brandenburg seit 1990',
    description:
      'Ingenieurbüro für Elektro- und Gebäudetechnik in Potsdam. 500+ realisierte Projekte.',
    url: siteUrl,
    siteName: 'HELLPLAN',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}#organization`,
  name: 'HELLPLAN Ingenieurgesellschaft für Elektro- und Gebäudetechnik mbH',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  telephone: '+49-331-271580',
  email: 'info@hellplan.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Seestraße 11A',
    postalCode: '14467',
    addressLocality: 'Potsdam',
    addressRegion: 'Brandenburg',
    addressCountry: 'DE',
  },
  areaServed: ['Brandenburg', 'Berlin', 'Deutschland'],
  foundingDate: '1990',
  description:
    'Ingenieurbüro für die Planung von Elektro- und Gebäudetechnik mit Sitz in Potsdam.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${sans.variable} ${display.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
