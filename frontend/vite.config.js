import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),

    // 🌍 Sitemap Configuration (Optimized for Ahrefs & GSC)
    sitemap({
      hostname: 'https://devzore.com',
      dynamicRoutes: [
        '/',
        '/about',
        '/contact',
        '/blog',
        '/allservices',
        '/web-development',
        '/mobile-apps',
        '/ecommerce',
        '/backend-api',
        '/mern-stack-development',
        '/saas-product-development',
        '/reactdevelopment',
        '/ui-ux-design',
        '/startup-mvp',
        '/privacy-policy',
        '/terms-and-conditions'
      ]
    })
  ]
})