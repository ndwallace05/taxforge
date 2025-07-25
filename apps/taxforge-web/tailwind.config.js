/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'tax-blue': '#1e3a8a',
        'sidebar-bg': '#f8fafc',
        'sidebar-border': '#e2e8f0',
      },
      spacing: {
        '56': '14rem',
        '240': '60rem',
      },
      maxWidth: {
        '1280': '80rem',
      },
      fontSize: {
        '20': '1.25rem',
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-sky-100',
    'text-sky-800',
    'border-b-2',
    'border-blue-600',
    'text-blue-600',
    'text-gray-400',
    'hover:text-blue-600',
    'even:bg-slate-50',
  ],
}