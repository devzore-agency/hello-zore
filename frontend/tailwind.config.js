/** @type {import('tailwindcss').Config} */
export default {

  // ── Dark mode "class" strategy ──
  // Jab <html> pe "dark" class hogi tab dark mode on hoga
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // ── Brand Colors ──
        brand: {
          dark: "#030303",
          card: "#0A0A0A",
          purple: "#7c3aed",
          'purple-light': "#8b5cf6",
          'purple-dark': "#5b21b6",
          'purple-bg': "#ede9fe",
        },

        // ── Light Mode (60%) ──
        light: {
          bg: "#ffffff",
          'bg-secondary': "#fafafa",
          'bg-subtle': "#f3f4f6",
          border: "#e5e7eb",
          text: "#111827",
          'text-secondary': "#374151",
          muted: "#6b7280",
        },

        // ── Dark Mode ──
        dark: {
          bg: "#030303",
          'bg-secondary': "#0a0a0a",
          'bg-subtle': "#111111",
          border: "rgba(255,255,255,0.08)",
          text: "#ffffff",
          muted: "#9ca3af",
        },

        // ── Nav & Footer (30%) ──
        nav: {
          bg: "#111827",
        },
      },

      // ── Animations ──
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      transitionDuration: {
        '300': '300ms',
      },
    },
  },

  plugins: [],
}