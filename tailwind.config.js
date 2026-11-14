/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: 'hsl(var(--paper))',
        paper2: 'hsl(var(--paper-2))',
        ink: 'hsl(var(--ink))',
        muted: 'hsl(var(--muted))',
        leaf: 'hsl(var(--leaf))',
        line: 'hsl(var(--line))',
        card: 'hsl(var(--card))',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        paper: '0 18px 42px -28px hsl(var(--ink) / .36)',
      },
    },
  },
  plugins: [],
};