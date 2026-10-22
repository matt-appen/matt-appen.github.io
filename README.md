# Mätt – hemsida

Hemsidan för Mätt, appen för dig som behandlas med GLP-1. En statisk sida utan byggsteg, publicerad med GitHub Pages.

## Filer

- `index.html` – startsidan
- `integritet.html` – integritetspolicy (utkast)
- `styles.css` – all stil, med färger och mått från Mätts brandbook
- `script.js` – väntelistan och kontaktadressen
- `assets/` – logotyper och typsnitt (Bricolage Grotesque och Figtree, båda SIL Open Font License)

## Att fylla i

Överst i `script.js`:

- `vantelistaUrl` – adressen dit väntelistan skickas, till exempel ett formulär hos Formspree. Så länge den är tom sparas inga adresser, och besökaren får veta det.
- `kontaktEpost` – e-posten i kontaktlänkarna.

## Egen domän

Hemsidan nås på https://mätt.app (tekniskt namn xn--mtt-qla.app, se filen `CNAME`). DNS ligger hos Loopia: fyra A-poster mot GitHub Pages och www som CNAME mot matt-appen.github.io.
