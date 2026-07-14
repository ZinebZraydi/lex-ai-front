import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'lex-navy': '#0F172A',
        'lex-blue': '#1E40AF',
        'lex-gold': '#D4AF37',
        'lex-gold-light': '#E6C86E',
        'lex-white': '#FFFFFF',
        'lex-bg': '#F8FAFC',
        'lex-text': '#64748B',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;