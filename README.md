## ACS – Next.js App (Enterprise-ready baseline)

This repository is a Next.js 15 project with an App Router-first setup, enterprise-leaning structure, Tailwind v4 styling, and DX tooling (ESLint, Prettier, Husky).

## Quick start

1. Install dependencies (npm, pnpm, yarn or bun)
2. Dev server: `npm run dev`
3. Build: `npm run build` → `npm start`

Environment variables go in `.env` (see `.env.example`). Static assets are in `public/`.

## Architecture overview

- App Router: `src/app/` (root layout and routes). The home route `/` lives in `src/app/page.tsx`.
- Pages Router: `src/pages/` is present and serves `src/pages/Landing.tsx` at `/Landing` (no overlap with App Router routes).
- Providers
  - ThemeProvider `src/providers/theme-provider.tsx`: manages semantic theme via `data-theme`.
  - LocaleProvider `src/providers/locale-provider.tsx`: manages `locale`, `switchLocale`, persists to `localStorage`, syncs `<html lang dir>`.
  - AppProvider `src/context/app-context.tsx`: app flags: `initialized`, `sidebarOpen`, and global `loading` state.
- UI components: `src/components/` (e.g., primitives under `components/ui/`).
- Config: `src/config/` (e.g., `site.ts`).
- Lib/Utils: `src/lib/` (e.g., `utils.ts`).
- Assets: `src/assets/` for imported non-public assets.

## Styling and theming

- Tailwind CSS v4 via `@tailwindcss/postcss` (see `postcss.config.mjs`).
- Tokens are CSS variables defined in `src/app/globals.css` (HEX values):
  - `--background`, `--foreground`, `--card`, `--primary`, `--accent`, etc.
  - Dark tokens are applied via `@media (prefers-color-scheme: dark)` and optionally via `data-theme="dark"`.
- Tailwind usage maps tokens directly, e.g.:
  - Background: `bg-background`, Text: `text-foreground`
  - Surfaces: `bg-card text-card-foreground border border-border`
  - Brand: `bg-primary text-primary-foreground`
- Fonts are provided by Next/font (Geist) and exposed as CSS vars used by Tailwind (`sans`, `mono`).

To toggle theme at runtime:

```ts
document.documentElement.setAttribute('data-theme', 'dark'); // or 'brand'
```

## Global state and hooks

- Theme
  - Hook: `useTheme()` returns `{ theme, isDark, switchTheme }`.
  - Provider is mounted in `src/app/layout.tsx`.
- Locale
  - Hook: `useLocale()` returns `{ locale, setLocale, switchLocale }`.
  - Persists `app:locale` to `localStorage`, and syncs `<html lang dir>`.
- App
  - Hook: `useApp()` returns `{ initialized, sidebarOpen, setSidebarOpen, loading, setLoading }`.
  - Use `loading` to coordinate global loading UX (spinners/overlays) in future work.

## Routing

- App Router routes live under `src/app/`. The home page is `src/app/page.tsx`.
- Pages Router is also enabled for the single route `src/pages/Landing.tsx` → `/Landing`.
- This mixed setup is safe as long as routes don’t overlap.

## Tooling and DX

- ESLint (flat config) + Prettier
  - Config: `eslint.config.mjs` (extends Next core-web-vitals/TS) with `no-explicit-any` turned off.
  - Run on commit via Husky + lint-staged.
- EditorConfig and Prettier configuration ensure consistent formatting.
- Tailwind config: `tailwind.config.ts` maps Tailwind colors to CSS vars and sets fonts/border radii.

## Scripts

- Dev: `npm run dev`
- Build: `npm run build` → `npm start`
- Lint: `npm run lint` (also runs pre-commit on staged files)
- Format: `npm run format`
- Reset:
  - macOS: `npm run reset:mac`
  - Windows: `npm run reset:win`

## Operational notes

- Hydration warnings: the root layout suppresses hydration attribute mismatches on `<html>`/`<body>` to avoid noise from browser extensions that inject attributes before React hydrates.
- Theming and tokens currently use HEX values for colors.
- Keep App and Pages routes non-overlapping if you add more pages.

## File map (key)

- `src/app/layout.tsx` – Root layout mounting Theme, Locale, and App providers.
- `src/app/page.tsx` – Home page (App Router).
- `src/pages/Landing.tsx` – Landing page (Pages Router) served at `/Landing`.
- `src/app/globals.css` – CSS variables for tokens; base styles.
- `src/providers/theme-provider.tsx` – Theme context + hook.
- `src/providers/locale-provider.tsx` – Locale context + hook.
- `src/context/app-context.tsx` – App context + hook (initialized, sidebar, loading).
- `tailwind.config.ts` – Tailwind theme setup using CSS vars.
- `postcss.config.mjs` – Tailwind v4 PostCSS plugin.
- `next.config.ts` – Next.js config (headers, etc.).
- `.husky/` – pre-commit hook for lint-staged.
# acs-website
