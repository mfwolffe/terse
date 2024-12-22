import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'ubuntu-mono': ['Ubuntu Mono', 'monospace'],
        'source-code-pro': ['Source Code Pro', 'monospace'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
} satisfies Config;
