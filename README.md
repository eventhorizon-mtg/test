# Sito statico Astro + Tailwind (esempio)

Questo repository contiene un semplicissimo scaffold per un sito statico basato su Astro, Markdown e Tailwind CSS, pronto per essere deployato su GitHub Pages tramite GitHub Actions.

Comandi principali (richiede Node.js installato):

```powershell
cd C:\Users\giorg\OneDrive\Documenti\GitHub\test
npm install
npm run dev       # avvia dev server (http://localhost:3000)
npm run build     # builda la cartella statica 'dist'
npm run preview   # preview della build locale
```

Note:
- Se deploy su GitHub Pages per il repo `test` (utente/organizzazione `eventhorizon-mtg`), considera di impostare `site` in `astro.config.mjs` a `https://eventhorizon-mtg.github.io/test`.
- Il workflow GitHub Actions (/.github/workflows/pages.yml) è già configurato per buildare e pubblicare `./dist` usando le Actions ufficiali Pages.
