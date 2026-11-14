# Wortschatz-Piraten

Rechtschreib-Lern-App für Kinder, als Web-App (PWA) für Android-Tablets und iPad.

- `index.html` – die ganze App
- `manifest.webmanifest`, `icons/` – Name und Akubine-Symbol für den Startbildschirm
- `sw.js` – Zwischenspeicher, damit die App offline startet und Updates beim nächsten Öffnen ankommen

## Veröffentlichen
Netlify oder Cloudflare Pages mit diesem Repository verbinden, Zweig `main`, kein Build-Befehl, Ordner `/`. Jede Änderung auf `main` wird automatisch veröffentlicht.
