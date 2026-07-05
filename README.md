# InsureAuto Agency

Marketing site for InsureAuto Agency, an independent auto & home insurance brokerage. Built with React, Vite, and React Router.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it locally.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — build for production into `dist/`
- `npm run preview` — preview the production build locally

## Structure

- `src/pages` — Home, Coverage, About, and Quote pages
- `src/components` — shared Header, Footer, language toggle, and UI pieces
- `src/i18n` — English/Spanish copy (`translations.js`) and the language context that powers the site-wide EN/ES toggle
- `src/data/content.js` — language-neutral data (contact info, service-area cities, coordinates)

## Language toggle

The site ships in English and Spanish. A prominent EN/ES slider in the header
switches all on-page copy instantly; the choice is saved to `localStorage`, and
first-time visitors whose browser is set to Spanish land in Spanish
automatically. To edit or add copy, update the mirrored `en` / `es` objects in
`src/i18n/translations.js`.
