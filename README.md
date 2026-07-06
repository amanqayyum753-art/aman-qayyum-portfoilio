# Aman Qayyum Web Design

A standalone React + Vite site. This project is fully independent — it has
no connection to Base44 or any other third-party platform/backend.

## Prerequisites

1. Install dependencies: `npm install`.

## Run Locally

```bash
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build              # normal build for hosting (Netlify/Vercel/etc.) -> dist/
npm run build:standalone   # single-file, double-click-to-open version -> dist-standalone/index.html
```

## Contact Form

The contact form has no backend attached. Submitting it opens the visitor's
email client with the message pre-filled, addressed to
`amanqayyum753@gmail.com`. If you want it saved to a database or sent through
a form service (Formspree, EmailJS, your own server, etc.), that can be
wired up separately.
