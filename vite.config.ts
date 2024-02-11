/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from "path"
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./src/__tests__/setup.ts"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})