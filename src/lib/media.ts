// Manifest of images that have actually been added to /public/images/.
// Until a path appears here, the corresponding component renders the
// designed SVG placeholder instead of a broken <Image>.
//
// Workflow when HellPlan delivers a photo:
//   1. Drop the file into /public/images/... at the path defined in
//      src/lib/content.ts (e.g. /public/images/references/01-...jpg)
//   2. Add that path to AVAILABLE_IMAGES below.
//   3. Commit. The placeholder is automatically replaced by the real photo.

export const AVAILABLE_IMAGES: ReadonlySet<string> = new Set<string>([
  '/images/hero/hero.jpg',
  '/images/about/team.jpg',
  '/images/services/starkstromtechnik.jpg',
  '/images/services/beleuchtungstechnik.jpg',
  '/images/services/brandmelde-sicherheit.jpg',
  '/images/services/daten-kommunikation.jpg',
  '/images/services/gebaeudeautomation.jpg',
  '/images/services/beratung-gutachten.jpg',
  '/images/references/01-altes-rathaus-potsdam.jpg',
  '/images/references/02-telegrafenberg-potsdam.jpg',
  '/images/references/03-sportschule-potsdam.jpg',
  '/images/references/04-museum-glasanbau.jpg',
  '/images/references/05-schule-brandenburg.jpg',
  '/images/references/06-industriehalle.jpg',
  '/images/references/07-aerztehaus-foyer.jpg',
  '/images/references/08-verwaltungsgebaeude.jpg',
])

export function imageAvailable(src?: string): boolean {
  return !!src && AVAILABLE_IMAGES.has(src)
}
