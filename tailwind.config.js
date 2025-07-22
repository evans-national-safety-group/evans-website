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
        'evans-blue': '#1e3a8a',
        'evans-slate': '#64748b', 
        'evans-green': '#059669',
        'evans-orange': '#ea580c',
        'evans-cream': '#fef7ed',
      },
      backgroundImage: {
        'evans-gradient-primary': 'linear-gradient(135deg, #1e3a8a 0%, #64748b 50%, #059669 100%)',
        'evans-gradient-blue': 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        'evans-gradient-green': 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
        'evans-gradient-orange': 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
        'evans-gradient-slate': 'linear-gradient(135deg, #64748b 0%, #94a3b8 100%)',
      }
    },
  },
  plugins: [],
}
