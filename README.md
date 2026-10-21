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

När domänen är köpt: lägg till en fil `CNAME` med domännamnet och peka domänens DNS mot GitHub Pages.
