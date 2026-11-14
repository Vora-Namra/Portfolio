# Namra Vora — Portfolio

A responsive, single-page software engineering portfolio built with React, Vite and Tailwind CSS. The visual direction is an engineer's notebook meets a system blueprint: warm paper, a fine grid, ink-navy type and a leaf-green accent.

## Stack

- React 18 + Vite
- Tailwind CSS
- Lucide React icons
- Fraunces, Inter and JetBrains Mono fonts

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production site to `dist/`.

## Deploy

**Vercel:** Import this repository. Use build command `npm run build` and output directory `dist`.

**Netlify:** Import this repository. The included `netlify.toml` contains the build command and publish directory.

## Portfolio assets

- Profile portrait: `public/assets/namra-portrait.webp`
- Open Graph image: `public/og-image.jpg`
- Favicon: `public/favicon.svg`

Add the actual resume PDF as `public/assets/Namra-Vora-Resume.pdf`, then set `resume` in `src/data.js` to `'/assets/Namra-Vora-Resume.pdf'`. The resume button remains disabled until the real document is supplied.

Project cards use clearly identified conceptual system maps, not fabricated product screenshots. Live demo buttons are shown only for projects with a supplied live URL.

## Contact

The contact section uses email and phone links. No contact API is configured in this static portfolio.
