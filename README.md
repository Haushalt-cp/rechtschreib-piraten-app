# Wortschatz-Piraten

Rechtschreib-Lern-App für Kinder, als Web-App (PWA) für Android-Tablets und iPad.

- `index.html` – die ganze App
- `manifest.webmanifest`, `icons/` – Name und Akubine-Symbol für den Startbildschirm
- `sw.js` – Zwischenspeicher, damit die App offline startet und Updates beim nächsten Öffnen ankommen

## Veröffentlichen
Netlify oder Cloudflare Pages mit diesem Repository verbinden, Zweig `main`, kein Build-Befehl, Ordner `/`. Jede Änderung auf `main` wird automatisch veröffentlicht.

## Live- und Testversion
- **Live (Kinder):** Zweig `main` → https://rechtschreib-piraten-app.netlify.app, Server `rechtschreib-piraten-app` (Supabase, Zürich).
- **Test:** Zweig `test` → https://test--rechtschreib-piraten-app.netlify.app (Netlify «Branch deploy»), Server `rechtschreib-piraten-test` (Supabase, Zürich).
- Die App erkennt die Version an der Adresse: Nur die Live-Adresse nutzt den Live-Server; jede andere Adresse nutzt den Test-Server und zeigt ein oranges Band «TESTVERSION».
- Ablauf: Neues zuerst auf `test`, prüfen, dann `test` in `main` übernehmen.
