/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    lineHeight: {
      '21': '21px',
      'low': '22.5px',
      'medium': '37.5px',
      'high': '48px',
    },
    letterSpacing: {
      'tightest': '-.02em',
      'middle': '-0.03em',
      'tight': '-.04em',
    },
    colors: {
      'off-white': '#F7F7F7',
      'white': '#fff',
      'blue': '#0147FF',
      'gray-light': '#F1F1F1',
      'gray-dark': '#282828',
    },
    extend: {
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'roboto-condensend': ['Roboto Condensed', 'sans-serif'],
        'roboto-flex': ['roboto flex', 'sans-serif'],
      }
    },
  },
  plugins: [],
}