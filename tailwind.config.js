/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#EEF2FF',
          100: '#E0E7FF',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
        }
      },
      boxShadow: {
        'card':       '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        'card-hover': '0 4px 16px 0 rgb(0 0 0 / 0.10), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
        'sidebar':    '-4px 0 24px rgb(0 0 0 / 0.12)',
      },
      screens: {
        'xs': '375px',
      },
      spacing: {
        '18': '4.5rem',
        '76': '19rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl':  '0.875rem',
        '2xl': '1.125rem',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'shimmer': 'shimmer 1.5s infinite',
        'fadeIn':  'fadeIn 0.2s ease forwards',
        'toast':   'toastIn 0.2s ease forwards',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-800px 0' },
          '100%': { backgroundPosition: '800px 0' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        toastIn: {
          from: { opacity: '0', transform: 'translateX(-50%) translateY(12px)' },
          to:   { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
        },
      },
      minWidth: { '0': '0' },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{
      hireflow: {
        "primary":          "#4F46E5",
        "primary-content":  "#ffffff",
        "secondary":        "#6366F1",
        "accent":           "#10B981",
        "neutral":          "#0F172A",
        "base-100":         "#F8FAFC",
        "base-200":         "#F1F5F9",
        "base-300":         "#E2E8F0",
        "base-content":     "#0F172A",
        "info":             "#3B82F6",
        "success":          "#10B981",
        "warning":          "#F59E0B",
        "error":            "#EF4444",
      }
    }],
    logs: false,
  }
};
