// Hero background image (subtle, sits behind the text). 1920x1080 min.
export const heroImage = {
  src: '/images/hero/hero.jpg',
  alt: 'Elektroplanung im Großprojekt',
}

// Team / company portrait used in About section. 1200x1500 (4:5 portrait).
export const aboutImage = {
  src: '/images/about/team.jpg',
  alt: 'Team HELLPLAN am Standort Potsdam',
}

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

export const careerJobs = [
  {
    role: 'Fachplaner / Projektingenieur (m/w/d)',
    icon: 'engineer',
    description:
      'Eigene Projektverantwortung von der Grundlagenermittlung bis zur Übergabe. Sie führen die Schnittstellen zu Architekt, Bauherr und ausführenden Firmen.',
    fields: [
      'Starkstromanlagen',
      'Informations- und sicherheitstechnische Anlagen',
      'Gebäudeautomation und MSR',
    ],
    requirements: [
      'Studium Elektrotechnik, Energietechnik, Gebäudetechnik oder vergleichbar',
      'Erste Erfahrung in der Fachplanung von Vorteil, kein Muss',
      'Sicheres Auftreten gegenüber Bauherren und Architekten',
    ],
  },
  {
    role: 'Technischer Systemplaner / CAD-Konstrukteur (m/w/d)',
    icon: 'cad',
    description:
      'Sie zeichnen Strom- und Übersichtspläne, Kabellisten, Verteiler. Sie arbeiten eng mit dem Projektingenieur, der den fachlichen Rahmen vorgibt.',
    fields: ['AutoCAD', 'optional Revit / BIM'],
    requirements: [
      'Abschluss als Technischer Systemplaner oder Elektroniker mit Planungserfahrung',
      'Sicheres Arbeiten mit AutoCAD',
      'Saubere, dokumentationsfähige Arbeitsweise',
    ],
  },
] as const

export const careerBenefits = [
  {
    title: 'Faires Festgehalt',
    body: 'Unbefristeter Vertrag, marktgerechte Vergütung mit klarer Entwicklungsperspektive.',
  },
  {
    title: 'Eigene Verantwortung',
    body: 'Sie führen Ihr Projekt. Keine Konzernstrukturen, kurze Wege zur Geschäftsführung.',
  },
  {
    title: 'Weiterbildung',
    body: 'Fachseminare, Normenupdates, VdS- und Brandschutz-Schulungen werden bezahlt.',
  },
  {
    title: 'Standort Potsdam',
    body: 'Direkt am Tiefen See, ÖPNV-Anbindung, kein Berliner Pendel-Stress.',
  },
] as const

export const promises = [
  {
    number: '01',
    headline: 'Termine, die halten.',
    body: 'Wir kommen nicht zu spät in Ihr Projekt, und wir bleiben nicht hinter der Baustelle zurück. Wer mit uns plant, weiß, wann was fertig ist.',
    proof: 'Über 500 Projekte ohne Bauverzug durch unsere Planung.',
  },
  {
    number: '02',
    headline: 'Pläne, die zusammenpassen.',
    body: 'Unsere Elektroplanung kollidiert nicht mit Statik, Lüftung oder Architektur. Wir arbeiten ab LP 1 mit den anderen Gewerken, nicht gegen sie.',
    proof: 'BIM-fähig. Saubere Schnittstellen für jeden Generalplaner.',
  },
  {
    number: '03',
    headline: 'Kosten, die nicht überraschen.',
    body: 'Wir geben Kostenrahmen ab, die in der Ausschreibung stehen bleiben. Wir denken Betriebs- und Wartungskosten mit, nicht erst nach der Abnahme.',
    proof: 'Herstellerunabhängig. Empfehlung nach Lebenszyklus, nicht nach Provision.',
  },
] as const

export const services = [
  {
    title: 'Starkstromtechnik',
    short: 'Energie ins Gebäude.',
    description:
      'Hoch-, Mittel- und Niederspannung. Netzberechnung, Verteilungen, Notstrom bis zur Übergabe an den Netzbetreiber.',
    illustration: 'beam',
    imageSrc: '/images/services/starkstromtechnik.jpg',
    alt: 'Hochspannungsverteilung in einer Trafostation',
  },
  {
    title: 'Beleuchtungstechnik',
    short: 'Licht, das wirtschaftlich bleibt.',
    description:
      'Herstellerunabhängige Lichtplanung für Innen- und Außenbereiche, normgerecht und mit Blick auf Stromverbrauch und Wartung.',
    illustration: 'pulse',
    imageSrc: '/images/services/beleuchtungstechnik.jpg',
    alt: 'Beleuchtungskonzept in einem öffentlichen Gebäude',
  },
  {
    title: 'Brandmelde- und Sicherheit',
    short: 'Schutz nach Vorschrift.',
    description:
      'BMA, EMA, Videosicherheit, Zutrittskontrolle. Geplant nach DIN 14675 und den Anforderungen der Bauordnung Brandenburg.',
    illustration: 'pulse',
    imageSrc: '/images/services/brandmelde-sicherheit.jpg',
    alt: 'Brandmeldezentrale mit Anzeigetableau',
  },
  {
    title: 'Daten- und Kommunikationstechnik',
    short: 'Vom Patchpanel zum Rechenzentrum.',
    description:
      'Strukturierte Verkabelung, Netzwerk, IT-Schränke. Vom Patchpanel bis zum Rechenzentrum.',
    illustration: 'nodes',
    imageSrc: '/images/services/daten-kommunikation.jpg',
    alt: 'Strukturierte Verkabelung in einem Serverraum',
  },
  {
    title: 'Gebäudeautomation',
    short: 'Schnittstellenoffen geplant.',
    description:
      'MSR- und Bustechnik für Heizung, Lüftung, Beschattung. Schnittstellenoffen, herstellerneutral.',
    illustration: 'circuit',
    imageSrc: '/images/services/gebaeudeautomation.jpg',
    alt: 'Schaltschrank für Gebäudeautomation',
  },
  {
    title: 'Beratung und Gutachten',
    short: 'Eine zweite Meinung.',
    description:
      'Bestandsaufnahmen und Sanierungskonzepte. Auch als zweite Meinung zu laufenden Planungen anderer Büros.',
    illustration: 'grid',
    imageSrc: '/images/services/beratung-gutachten.jpg',
    alt: 'Begehung mit Planungsunterlagen vor Ort',
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
  { lp: 'LP 8', title: 'Objektüberwachung', desc: 'Bauleitung vor Ort. Termine, Kosten und Qualität bleiben im Griff.' },
  { lp: 'LP 9', title: 'Dokumentation', desc: 'Bestandspläne und Übergabe. Wir bleiben Ansprechpartner in der Gewährleistung.' },
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
  imageSrc: string
  alt: string
}> = [
  {
    category: 'Öffentlich',
    title: 'Historisches Verwaltungsgebäude',
    location: 'Potsdam, Altstadt',
    scope: 'Elektroplanung Bestand, Denkmalverträgliche Beleuchtung',
    year: '2019',
    imageSrc: '/images/references/01-altes-rathaus-potsdam.jpg',
    alt: 'Historisches Verwaltungsgebäude im Stadtzentrum Potsdam',
  },
  {
    category: 'Öffentlich',
    title: 'Forschungseinrichtung Telegrafenberg',
    location: 'Potsdam',
    scope: 'Sanierung Elektrotechnik im Bestand, Brandmeldeanlage',
    year: '2020',
    imageSrc: '/images/references/02-telegrafenberg-potsdam.jpg',
    alt: 'Wissenschaftliches Institutsgebäude auf dem Telegrafenberg in Potsdam',
  },
  {
    category: 'Bildung',
    title: 'Sportschule Potsdam',
    location: 'Potsdam',
    scope: 'Elektroplanung Hallenneubau, Sicherheitsbeleuchtung',
    year: '2021',
    imageSrc: '/images/references/03-sportschule-potsdam.jpg',
    alt: 'Sportschule Friedrich Ludwig Jahn in Potsdam',
  },
  {
    category: 'Öffentlich',
    title: 'Museumsanbau mit Glasfassade',
    location: 'Brandenburg',
    scope: 'Lichtplanung Ausstellungsräume, Mediensteuerung',
    year: '2022',
    imageSrc: '/images/references/04-museum-glasanbau.jpg',
    alt: 'Moderner Glasanbau an historisches Museumsgebäude',
  },
  {
    category: 'Bildung',
    title: 'Schulneubau mit Sporthalle',
    location: 'Brandenburg an der Havel',
    scope: 'Stark- und Schwachstrom, Notbeleuchtung, BMA',
    year: '2022',
    imageSrc: '/images/references/05-schule-brandenburg.jpg',
    alt: 'Schulneubau mit farbiger Fassade in Brandenburg an der Havel',
  },
  {
    category: 'Industrie',
    title: 'Produktionshalle mit Lagerlogistik',
    location: 'Werder (Havel)',
    scope: 'NS-Verteilung, Hallenbeleuchtung, Prozesssteuerung',
    year: '2023',
    imageSrc: '/images/references/06-industriehalle.jpg',
    alt: 'Industriehalle mit Stahlträger-Konstruktion und Hochregallager',
  },
  {
    category: 'Gesundheit',
    title: 'Ärztehaus mit Empfangsfoyer',
    location: 'Potsdam',
    scope: 'Mieterausbau, Medizingerätekonzept, Rufanlage',
    year: '2023',
    imageSrc: '/images/references/07-aerztehaus-foyer.jpg',
    alt: 'Modernes Foyer in einem Ärztehaus mit Empfangstresen',
  },
  {
    category: 'Öffentlich',
    title: 'Verwaltungsgebäude Landkreis',
    location: 'Potsdam-Mittelmark',
    scope: 'Elektroplanung LP 1–9, BMA, Sicherheitstechnik',
    year: '2024',
    imageSrc: '/images/references/08-verwaltungsgebaeude.jpg',
    alt: 'Neubau Verwaltungsgebäude eines Landkreises in Brandenburg',
  },
]

export const testimonials = [
  {
    quote:
      'HELLPLAN hat unsere Schulsanierung im laufenden Betrieb begleitet. Termine und Kosten gehalten, kein Schüler hat etwas davon gemerkt.',
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
    a: 'In der Regel innerhalb von zwei Werktagen. Wenn Sie eine Ausschreibung mit knapper Frist haben, rufen Sie uns an. Wir finden eine Lösung.',
  },
] as const

export const navItems = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Prozess', href: '#prozess' },
  { label: 'Referenzen', href: '#referenzen' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Karriere', href: '#karriere' },
] as const
