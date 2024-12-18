import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "fatahchan",
    project: "test-sentry-release",
    release: {
      name: `${process.env.VITE_RELEASE_NAME}`,
      deploy: {
        env: `${process.env.GITHUB_ENVIRONMENT || 'local'}`
      }
    }
  
  })],

  build: {
    sourcemap: true
  }
})