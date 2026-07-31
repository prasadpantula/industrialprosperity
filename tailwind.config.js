module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest': {
          '900': '#0d2b1a',
          '800': '#1B4332',
          '700': '#1a4d2e',
          '600': '#2e7d52',
          '500': '#2e7d52',
          '400': '#4caf73',
          '300': '#6fd98a',
          '200': '#b5d9c3',
          '100': '#e8f5ee',
          '50': '#f3f9f5',
        },
        'cream': {
          DEFAULT: '#f9f7f1',
          'dark': '#f3efe5',
          'border': '#d0ddd0',
        },
        'ink': {
          DEFAULT: '#0e1a0e',
          'muted': '#374151',
          'light': '#8a9a8a',
        },
        'gold': '#C9A84C',
        'gold-dark': '#b8922e',
        'blue-deep': '#1a5296',
        'purple-deep': '#5b2ea8',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'Georgia', 'serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'cairo': ['Cairo', 'system-ui', 'sans-serif'],
        'naskh': ['Noto Naskh Arabic', 'system-ui', 'sans-serif'],
        // Legacy aliases kept for backward compat
        'cormorant': ['Playfair Display', 'Georgia', 'serif'],
        'outfit': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
