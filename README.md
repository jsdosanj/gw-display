# gw-display

A premium Astro + Tailwind + TypeScript kiosk display for exploring the Panj Pyare and Panj Takht in a bilingual museum-style interface.

## Commands

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run validate`

## Structure

- `src/pages/index.astro` — Astro kiosk shell
- `src/scripts/kiosk.ts` — touch-first kiosk interactions and rendering
- `src/data/display-content.ts` — typed bilingual content and review metadata
- `src/lib/kiosk-state.ts` — kiosk state helpers with tests
- `src/styles/global.css` — Tailwind theme and premium display styling

## Content workflow

The display labels migrated content as created by AI and pending scholar review so historical summaries are not presented as authoritative until a human review board approves them.
