import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code', 'monospace'], // Add Fira Code as a Tailwind font
      },
      colors: {
        background: '#282C33',
        primary: '#C778DD',
        gray: '#ABB2BF',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
} satisfies Config;
