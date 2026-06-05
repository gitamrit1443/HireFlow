/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './app/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        hireflow: {
          primary: '#4F46E5',
          secondary: '#0EA5E9',
          accent: '#14B8A6',
          neutral: '#0F172A',
          'base-100': '#FFFFFF',
          info: '#3B82F6',
          success: '#22C55E',
          warning: '#F59E0B',
          error: '#EF4444'
        }
      }
    ]
  }
};
