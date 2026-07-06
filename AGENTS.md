# AGENTS.md

## Project Context

This is a standalone React + Vite site (originally scaffolded from a Base44
project, now fully detached — no Base44 SDK, plugin, or backend calls remain
anywhere in the code). Treat it as ordinary user-owned application code, keep
changes focused on the user's request, and preserve existing project
conventions.

Start with `README.md` for local setup and build commands.

## Key Files

- `src/`: frontend application source.
- `src/pages/Home.jsx` + `src/components/portfolio/`: the single-page site content.
- `vite.config.js`: standard Vite + React config for normal builds (dev server, hosted builds).
- `vite.standalone.config.js`: separate config that inlines everything into one `index.html` (no server needed, works via `file://`).

## Working Notes

- There is no backend and no auth — the site is static/client-only. The contact form opens the visitor's email client instead of posting to a server.
- Use `npm run dev` for local development.
- Use `npm run build` for a normal hosted build, or `npm run build:standalone` for a single-file version.
- Run the relevant checks from `package.json` (e.g. `npm run lint`) before finishing code changes.
