/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#fdfbf7',
        pencil: '#2d2d2d',
        'pencil-light': '#555555',
        muted: '#e5e0d8',
        marker: '#ff4d4d',
        'marker-dark': '#e63e3e',
        pen: '#2d5da1',
        postit: '#fff9c4',
        terminal: {
          green: '#00FF41',
          dim: '#00CC33',
          bg: '#0a0a0a',
        },
      },
      fontFamily: {
        hand: ['Kalam', 'cursive'],
        body: ['Patrick Hand', 'cursive'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        card: '12px',
        wobbly: '255px 15px 225px 15px / 15px 225px 15px 255px',
        'wobbly-md': '15px 255px 15px 225px / 225px 15px 255px 15px',
        'wobbly-sm': '185px 10px 165px 10px / 10px 165px 10px 185px',
      },
      boxShadow: {
        'sketch': '4px 4px 0px 0px #2d2d2d',
        'sketch-sm': '3px 3px 0px 0px rgba(45, 45, 45, 0.1)',
        'sketch-lg': '8px 8px 0px 0px #2d2d2d',
        'sketch-hover': '2px 2px 0px 0px #2d2d2d',
        'sketch-active': '0px 0px 0px 0px #2d2d2d',
        'sketch-lift': '6px 6px 0px 0px rgba(45, 45, 45, 0.15)',
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'bounce-gentle': 'gentleBounce 3s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0) rotate(2deg)' },
          '50%': { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
      },
    },
  },
  plugins: [],
};
