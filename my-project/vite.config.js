import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/CHOWDECK/",
  plugins: [
    tailwindcss(),
    svelte(),
  ],
})

import { svelte } from '@sveltejs/vite-plugin-svelte'   