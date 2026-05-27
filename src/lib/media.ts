// Manifest of images that have actually been added to /public/images/.
// Until a path appears here, the corresponding component renders the
// designed SVG placeholder instead of a broken <Image>.
//
// Workflow when HellPlan delivers a photo:
//   1. Drop the file into /public/images/... at the path defined in
//      src/lib/content.ts (e.g. /public/images/references/01-verwaltungsgebaeude.jpg)
//   2. Add that path to AVAILABLE_IMAGES below.
//   3. Commit. The placeholder is automatically replaced by the real photo.

export const AVAILABLE_IMAGES: ReadonlySet<string> = new Set<string>([
  // Add image paths here as they become available, e.g.:
  // '/images/hero/hero.jpg',
  // '/images/references/01-verwaltungsgebaeude.jpg',
])

export function imageAvailable(src?: string): boolean {
  return !!src && AVAILABLE_IMAGES.has(src)
}
