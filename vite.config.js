import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// Custom plugin: serve /legacy/* straight from the root legacy/ folder
// without any Vite transformation
function serveStaticLegacy() {
  const legacyRoot = path.resolve(__dirname, 'legacy')
  return {
    name: 'serve-static-legacy',
    configureServer(server) {
      server.middlewares.use('/legacy', (req, res, next) => {
        const urlPath = req.url.split('?')[0]
        const filePath = path.join(legacyRoot, urlPath === '/' ? 'index.html' : urlPath)
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath).toLowerCase()
          const mime = {
            '.html': 'text/html',
            '.js': 'application/javascript',
            '.css': 'text/css',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon',
          }[ext] || 'application/octet-stream'
          res.setHeader('Content-Type', mime)
          fs.createReadStream(filePath).pipe(res)
        } else {
          next()
        }
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), serveStaticLegacy()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  },
})
