export const company = {
  name: 'HELLPLAN',
  fullName: 'HELLPLAN Ingenieurgesellschaft für Elektro- und Gebäudetechnik mbH',
  city: 'Potsdam',
  region: 'Brandenburg',
  address: 'Seestr. 11A · 14467 Potsdam',
  phone: '+49 331 271 58-0',
  phoneHref: 'tel:+493312715800',
  fax: '+49 331 271 58-90',
  email: 'info@hellplan.de',
  emailHref: 'mailto:info@hellplan.de',
  foundedIn: 1990,
  hrb: 'Potsdam HRB 30731',
  vatId: 'DE 318134492',
  ceo: 'Dipl.-Ing. (FH) Florian Wildgrube',
} as const

export const stats = [
  { value: '35+', label: 'Jahre Erfahrung', detail: 'Seit 1990 in Brandenburg' },
  { value: '500+', label: 'realisierte Projekte', detail: 'Öffentlich, gewerblich, privat' },
  { value: 'LP 1–9', label: 'volle HOAI-Leistung', detail: 'Beratung bis Objektbetreuung' },
  { value: 'Potsdam', label: 'fest verwurzelt', detail: 'Standort seit Gründung' },
] as const

export const audiences = [
  {
    tag: 'Für Architekten',
    pain: 'TGA-Pläne kommen zu spät und kollidieren mit der Statik.',
    promise: 'Mitdenkender Fachplaner mit sauberen Schnittstellen — von LP 1 bis Übergabe.',
  },
  {
    tag: 'Für öffentliche Auftraggeber',
    pain: 'VgV-Verfahren ohne audit-festen Planungspartner werden zur Akte.',
    promise: 'Erfahrung mit öffentlicher Vergabe in Brandenburg seit über drei Jahrzehnten.',
  },
  {
    tag: 'Für Bauherren & Investoren',
    pain: 'Elektrokosten und Betriebskosten überraschen erst nach der Übergabe.',
    promise: 'Wirtschaftliche Planung mit Blick auf Lebenszyklus und Wartungsaufwand.',
  },
] as const

export const services = [
  {
    title: 'Starkstromtechnik',
    description:
      'Hoch-, Mittel- und Niederspannung. Netzberechnung, Verteilungen, Notstrom — bis zur Übergabe an den Netzbetreiber.',
  },
  {
    title: 'Beleuchtungstechnik',
    description:
      'Herstellerunabhängige Lichtplanung für Innen und Außen. Energieeffizient, normgerecht, gestalterisch durchdacht.',
  },
  {
    title: 'Brandmelde- und Sicherheit',
    description:
      'BMA, EMA, Videosicherheit, Zutrittskontrolle. Geplant nach DIN 14675 und den Anforderungen der Bauordnung Brandenburg.',
  },
  {
    title: 'Daten- und Kommunikationstechnik',
    description:
      'Strukturierte Verkabelung, Netzwerk, IT-Schränke. Vom Patchpanel bis zum Rechenzentrum.',
  },
  {
    title: 'Gebäudeautomation',
    description:
      'MSR- und Bustechnik für Heizung, Lüftung, Beschattung. Schnittstellenoffen, herstellerneutral.',
  },
  {
    title: 'Beratung und Gutachten',
    description:
      'Bestandsaufnahmen, Sanierungskonzepte, Energieberatung. Auch als zweite Meinung zu laufenden Planungen.',
  },
] as const

export const hoaiPhases = [
  { lp: 'LP 1', title: 'Grundlagen', desc: 'Ziele klären, Randbedingungen erfassen.' },
  { lp: 'LP 2', title: 'Vorplanung', desc: 'Erste Konzepte, Variantenvergleich, Kostenrahmen.' },
  { lp: 'LP 3', title: 'Entwurf', desc: 'Tragfähige Lösung mit belastbarer Kostenberechnung.' },
  { lp: 'LP 4', title: 'Genehmigung', desc: 'Vollständige Unterlagen für Behörden und Prüfingenieure.' },
  { lp: 'LP 5', title: 'Ausführung', desc: 'Detailplanung in der Tiefe, die das Gewerk braucht.' },
  { lp: 'LP 6', title: 'Ausschreibung', desc: 'Leistungsverzeichnisse, mit denen sich kalkulieren lässt.' },
  { lp: 'LP 7', title: 'Vergabe', desc: 'Angebote prüfen, Verhandlung begleiten, Vergabeempfehlung.' },
  { lp: 'LP 8', title: 'Objektüberwachung', desc: 'Bauleitung vor Ort. Qualität, Termin, Kosten im Griff.' },
  { lp: 'LP 9', title: 'Dokumentation', desc: 'Bestandspläne, Übergabe, Gewährleistung bis zum Ende.' },
] as const

export const referenceFilters = [
  'Alle',
  'Öffentlich',
  'Bildung',
  'Gesundheit',
  'Industrie',
  'Wohnen',
] as const

export type ReferenceFilter = (typeof referenceFilters)[number]

export const references: ReadonlyArray<{
  category: Exclude<ReferenceFilter, 'Alle'>
  title: string
  location: string
  scope: string
  year: string
}> = [
  {
    category: 'Öffentlich',
    title: 'Verwaltungsgebäude Landkreis',
    location: 'Potsdam-Mittelmark',
    scope: 'Elektroplanung LP 1–9, BMA, Sicherheitstechnik',
    year: '2023',
  },
  {
    category: 'Bildung',
    title: 'Schulneubau mit Sporthalle',
    location: 'Brandenburg an der Havel',
    scope: 'Stark- und Schwachstrom, Notbeleuchtung, BMA',
    year: '2022',
  },
  {
    category: 'Gesundheit',
    title: 'Pflegezentrum mit 120 Betten',
    location: 'Potsdam',
    scope: 'Elektro, Rufanlage, Sicherheitsbeleuchtung',
    year: '2024',
  },
  {
    category: 'Industrie',
    title: 'Produktionserweiterung',
    location: 'Werder (Havel)',
    scope: 'NS-Verteilung, EX-Schutz, Prozessbeleuchtung',
    year: '2023',
  },
  {
    category: 'Wohnen',
    title: 'Quartiersentwicklung mit 180 WE',
    location: 'Berlin-Brandenburg',
    scope: 'Wohnungselektro, Allgemeinflächen, Tiefgarage',
    year: '2024',
  },
  {
    category: 'Öffentlich',
    title: 'Sanierung Feuerwache',
    location: 'Brandenburg',
    scope: 'Komplettsanierung Elektro im Bestand',
    year: '2021',
  },
  {
    category: 'Bildung',
    title: 'Kita mit Außenanlage',
    location: 'Potsdam',
    scope: 'Elektroplanung Neubau, Außenbeleuchtung',
    year: '2022',
  },
  {
    category: 'Gesundheit',
    title: 'Ärztehaus mit Apotheke',
    location: 'Brandenburg',
    scope: 'Mieterausbau, Medizingerätekonzept',
    year: '2023',
  },
]

export const testimonials = [
  {
    quote:
      'HELLPLAN hat unsere Schulsanierung im laufenden Betrieb begleitet — Termine eingehalten, Kosten eingehalten, Schüler nicht gestört.',
    author: 'M. K.',
    role: 'Hochbauamt',
    company: 'Landkreis Brandenburg (Platzhalter)',
  },
  {
    quote:
      'Als Architekt erwarte ich Mitdenken, keine reinen Ausführungspläne. Genau das bekommen wir bei HELLPLAN seit Jahren.',
    author: 'T. R.',
    role: 'Architekt',
    company: 'Architekturbüro Potsdam (Platzhalter)',
  },
  {
    quote:
      'Klare Kommunikation, belastbare Kostenrahmen, saubere Übergabe. Eine Empfehlung für jeden Bauherrn.',
    author: 'A. S.',
    role: 'Geschäftsführer',
    company: 'Bauträger Berlin (Platzhalter)',
  },
] as const

export const faqs = [
  {
    q: 'Welche Leistungsphasen nach HOAI übernimmt HELLPLAN?',
    a: 'Alle. Wir planen über die volle Bandbreite von LP 1 (Grundlagenermittlung) bis LP 9 (Objektbetreuung). Auch Teilbeauftragungen sind möglich, etwa nur Bauüberwachung oder nur Konzeptberatung.',
  },
  {
    q: 'Wie wird das Honorar berechnet?',
    a: 'Nach HOAI auf Basis der anrechenbaren Kosten und der gewählten Leistungsphasen. Für Sonderleistungen oder Beratungsmandate vereinbaren wir Stunden- oder Pauschalhonorare. Sie bekommen vor Beauftragung ein nachvollziehbares Angebot.',
  },
  {
    q: 'Plant HELLPLAN auch im BIM-Modell?',
    a: 'Ja. Wir arbeiten 3D- und modellbasiert und liefern Daten in den vereinbarten LOD- und IFC-Standards. Wenn Ihr Projekt klassisch in 2D geplant wird, geht das genauso.',
  },
  {
    q: 'Übernimmt HELLPLAN auch die Bauüberwachung?',
    a: 'Ja. Bauleitung vor Ort ist ein klassischer Teil unseres Leistungsbildes. Wir sind regelmäßig auf der Baustelle, prüfen Aufmaße und Nachträge und sichern Qualität und Termin.',
  },
  {
    q: 'In welcher Region arbeiten Sie?',
    a: 'Schwerpunkt ist Brandenburg und Berlin. Wir betreuen Projekte regelmäßig von Potsdam aus. Auf Anfrage planen wir auch deutschlandweit.',
  },
  {
    q: 'Wie schnell bekomme ich nach einer Anfrage eine Rückmeldung?',
    a: 'In der Regel innerhalb von zwei Werktagen. Wenn Sie eine Ausschreibung mit knapper Frist haben, melden Sie sich telefonisch — wir finden eine Lösung.',
  },
] as const

export const navItems = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Prozess', href: '#prozess' },
  { label: 'Referenzen', href: '#referenzen' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Karriere', href: '#karriere' },
] as const
