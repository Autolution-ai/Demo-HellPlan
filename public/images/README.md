# Bilder-Manifest HELLPLAN

Diese Liste zeigt alle Bilder, die die Website nutzt. Bis ein Bild geliefert
ist, rendert die Seite an dieser Stelle eine designte SVG-Illustration als
Platzhalter ("Foto folgt").

## Workflow für ein neues Bild

1. Datei mit dem unten genannten Dateinamen in den passenden Ordner unter
   `/public/images/` legen.
2. In `src/lib/media.ts` den Pfad zu `AVAILABLE_IMAGES` hinzufügen.
3. Commit + Push. Vercel deployt automatisch.

Empfohlenes Format: **JPEG**, sRGB, optimiert (max. 400 KB pro Datei). Wer
WebP/AVIF liefert: gerne, aber dann Pfad-Endung anpassen.

---

## Benötigte Bilder

### Hero (1 Bild)

Großformatige Aufnahme aus einem Projekt, ruhig und sachlich. Zum Beispiel
Schaltschrank-Closeup, Trafostation, Beleuchtung in einer fertigen Halle.

| Datei | Format | Inhalt |
|---|---|---|
| `hero/hero.jpg` | 1920×1200 (Querformat) | Hero-Bild (sitzt hinter Text) |

### About / Team (1 Bild)

Hochformatige Aufnahme im Standort Potsdam — Team, Geschäftsführer am
Plantisch, oder Hausansicht Seestraße 11A.

| Datei | Format | Inhalt |
|---|---|---|
| `about/team.jpg` | 1200×1500 (4:5 Hochformat) | Team oder Geschäftsführer |

### Leistungen (6 Bilder)

Je Gewerk eine ausdrucksstarke Aufnahme aus einem realen Projekt. Querformat.

| Datei | Format | Inhalt |
|---|---|---|
| `services/starkstromtechnik.jpg` | 1600×1000 | Hochspannung, Verteilung, Trafostation |
| `services/beleuchtungstechnik.jpg` | 1600×1000 | Beleuchtungskonzept in Räumlichkeit |
| `services/brandmelde-sicherheit.jpg` | 1600×1000 | BMA-Zentrale, Anzeigetableau |
| `services/daten-kommunikation.jpg` | 1600×1000 | Serverraum, strukturierte Verkabelung |
| `services/gebaeudeautomation.jpg` | 1600×1000 | Schaltschrank, SPS, MSR |
| `services/beratung-gutachten.jpg` | 1600×1000 | Begehung mit Planungsunterlagen |

### Referenzen (8 Bilder)

Je Projekt ein Repräsentationsbild — vorzugsweise Außen- oder Innenansicht
des Gebäudes. Querformat.

| Datei | Format | Inhalt |
|---|---|---|
| `references/01-verwaltungsgebaeude.jpg` | 1600×1200 | Verwaltungsgebäude Potsdam-Mittelmark |
| `references/02-schulneubau.jpg` | 1600×1200 | Schule mit Sporthalle Brandenburg/Havel |
| `references/03-pflegezentrum.jpg` | 1600×1200 | Pflegezentrum Potsdam |
| `references/04-produktionserweiterung.jpg` | 1600×1200 | Produktionserweiterung Werder |
| `references/05-quartiersentwicklung.jpg` | 1600×1200 | Quartier Berlin-Brandenburg |
| `references/06-feuerwache.jpg` | 1600×1200 | Sanierte Feuerwache |
| `references/07-kita.jpg` | 1600×1200 | Kita mit Außenanlage Potsdam |
| `references/08-aerztehaus.jpg` | 1600×1200 | Ärztehaus mit Apotheke |

---

## Hinweise zu Urheberrecht

- Eigene Fotografien von HellPlan sind unproblematisch.
- Bilder von Architekten/Fotografen nur mit schriftlicher Freigabe für
  Nutzung auf hellplan.de übernehmen.
- Keine Stockfotos aus dubiosen Quellen. Bei Bedarf zu Pexels, Unsplash
  oder Pixabay (CC0).
- Personen auf Bildern: schriftliche Einwilligung gemäß DSGVO.
