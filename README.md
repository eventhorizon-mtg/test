# Sito statico Astro + Tailwind (scheletro solido)

Questo repository fornisce uno scheletro minimale ma completo per un sito statico basato su Astro 5, Markdown e Tailwind CSS 4, ottimizzato con content collections tipizzate, sitemap e feed RSS, pronto per il deploy su GitHub Pages.

## Requisiti

- Node.js 20+ (LTS)

## Script

```powershell
cd C:\\Users\\giorg\\OneDrive\\Documenti\\GitHub\\test
npm install
npm run dev       # dev server (http://localhost:4321)
npm run build     # produce la build statica in ./dist
npm run preview   # anteprima della build locale
```

## Struttura

- `src/layouts/Base.astro`: layout principale con meta di base, favicon e navigazione.
- `src/pages/index.astro`: home con lista dei post generata automaticamente.
- `src/content/posts/*.md`: articoli in Markdown (content collections) con schema tipizzato (`title`, `pubDate`, `description`).
- `src/pages/posts/[slug].astro`: route dinamica per i post.
- `src/pages/posts/index.astro`: indice del blog.
- `src/pages/404.astro`: pagina 404.
- `src/styles/global.css`: Tailwind base + piccoli default.
- `public/`: asset statici (favicon, robots.txt).
- `.github/workflows/pages.yml`: pipeline GitHub Pages aggiornata.
- `src/pages/rss.xml.js`: feed RSS generato da `@astrojs/rss`.

## GitHub Pages (project pages)

Il repo è impostato per il deploy su `https://eventhorizon-mtg.github.io/test`.

- `astro.config.mjs`:
  - `site: 'https://eventhorizon-mtg.github.io/test'`
  - `base: '/test/'`
- I link nel layout usano `import.meta.env.BASE_URL` per essere compatibili con il sottopercorso.
- Il workflow usa Node 20 e carica `./dist` con le Actions Pages aggiornate.

Se usi un nome utente/organizzazione diverso o un repo differente, aggiorna `site` e `base` di conseguenza.

## Note su Tailwind 4

- Non è più necessario configurare `content` nella config.
- Il file `tailwind.config.cjs` è opzionale e lasciato vuoto; per personalizzazioni semplici usa `@theme` direttamente in CSS.
- Tipografia dei post: la classe `prose` è abilitata via `@plugin '@tailwindcss/typography';` in `src/styles/global.css`.

## Aggiungere un post

1. Crea un file Markdown in `src/content/posts/nuovo-post.md` con frontmatter:

   ```md
   ---
   title: "Titolo"
   description: "Descrizione breve"
   pubDate: 2025-01-01
   ---

   Contenuto del post...
   ```

2. Verrà indicizzato automaticamente nella home e in `/posts/` e avrà la pagina `/posts/nuovo-post/`.

## Sitemap e RSS

- Sitemap generata automaticamente da `@astrojs/sitemap` (richiede `site` e `base` corretti in `astro.config.mjs`).
- Feed RSS disponibile su `/rss.xml`.
