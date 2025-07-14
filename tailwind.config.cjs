/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:      '#2563eb',
        primaryLight: '#93c5fd',
        primaryDark:  '#1e40af',
        accent:   '#f97316',
        success:  '#22c55e',
        danger:   '#ef4444',
        text:         '#1f2937',
        textLight:    '#4b5563',
        surface:      '#ffffff',
        surfaceDark:  '#111827',
        glass: 'rgba(255,255,255,.1)',
        ring:   'rgba(37, 99, 235, .4)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Inter', 'ui-sans-serif']
      },
      borderRadius: {
        'xl': '0.75rem',
      }
    },
  },
  plugins: [],
}; 