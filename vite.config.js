import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANT: Update 'base' to match your GitHub repository name
// Example: If your repo is "portfolio", use base: '/portfolio/'
// Example: If your repo is "muneeb-portfolio", use base: '/muneeb-portfolio/'

export default defineConfig({
  plugins: [react()],
  base: '/muneeb-portfolio/', // 👈 Change this to YOUR repository name
})
