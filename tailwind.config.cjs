/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // blue-600
          light: '#60A5FA',   // blue-400
          dark: '#1D4ED8',    // blue-700
        },
        secondary: {
          DEFAULT: '#F97316', // orange-500
        },
        text: {
          DEFAULT: '#1F2937', // gray-800
          light: '#6B7280',   // gray-500
        },
        surface: {
          DEFAULT: '#FFFFFF',
          card: '#FFFFFF',
        },
        background: {
          DEFAULT: '#F9FAFB', // gray-50
        },
        border: {
          DEFAULT: '#E5E7EB', // gray-200
        },
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