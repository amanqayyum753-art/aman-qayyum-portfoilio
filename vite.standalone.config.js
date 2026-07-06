import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import path from 'node:path'

// This is a SEPARATE build config, only for producing a standalone version
// of the site that can be opened by double-clicking index.html in Chrome
// (or any browser) with no server and no Base44 backend required.
//
// The original vite.config.js is untouched, so the project can still be
// opened back up in Base44 normally. The @base44/vite-plugin is deliberately
// NOT included here, since it exists to talk to Base44's platform — this
// build has zero Base44 code in it at all.
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      // Normally provided by @base44/vite-plugin; declared manually here
      // since that plugin isn't part of this standalone build.
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    // Inlines all JS/CSS into index.html itself (no separate /assets files,
    // no <script type="module" src="..."> pointing at external files).
    // This is what avoids Chrome's file:// CORS restriction on ES modules.
    viteSingleFile(),
  ],
  build: {
    outDir: 'dist-standalone',
  }
});
