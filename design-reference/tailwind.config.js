/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAFAF7',
        ink: '#111111',
        mustard: '#F2C240',
        royal: '#2F54D6',
        hot: '#F2468C',
        leaf: '#1FA85A',
        mint: '#BFE3C8',
        flame: '#F2642D',
        grid: '#8E8E8E',
      },
      fontFamily: {
        pixel: ['"Pixelify Sans"', 'system-ui', 'sans-serif'],
        hand: ['"Gochi Hand"', '"Caveat"', 'cursive'],
        scrawl: ['"Caveat"', 'cursive'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        polaroid: '0 1px 2px rgba(0,0,0,.08), 0 8px 24px -6px rgba(0,0,0,.22)',
        card: '0 2px 0 rgba(0,0,0,.04), 0 18px 40px -18px rgba(0,0,0,.35)',
      },
    },
  },
  plugins: [],
}
