/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        neutral: {
          50: '#F9F9F9',
          100: '#F4F4F4',
          200: '#E4E4E4',
          300: '#D3D3D3',
          400: '#A2A2A2',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
          1000: '#000000',
        },

        'twitter-blue': '#1D9BF0',
        'twitter-blue-hover': '#1871CA',
        'twitter-blue-disabled': '#1E5D87',

        /**
         * For modal background
         * * Use with 20% opacity */
        'blue-wash': 'rgba(117, 190, 239, 0.75)',
        'button-stroke': '#546A7A',
        'searchbar-fill': '#212327',
        'card-fill': '#16181C',
        secondary: 'rgba(255, 255, 255, 0.60)',
        success: '#00BE74',
        error: '#8B141A',
        stroke: 'rgba(29, 155, 240, 0.24)',
      },

      width: {
        // Naming things is hard...
        'almost-sm': '334px',
        'almost-sm-2': '348px',
        'almost-md': '426px',
        'almost-md-2': '434px',
        'almost-md-3': '442px',

        'logo-1': '137px',
        'logo-2': '455px',

        lg: '512px',
        'post-xl': '598px',
      },

      borderRadius: {
        '4xl': '1.875rem',
        '5xl': '4.0625rem',
        '6xl': '624.9375rem',
        '7xl': '12.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        '3xl': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
      },
      backdropBlur: {
        neutral: '23.67px',
      },
      borderWidth: {
        3: '3px',
      },
      fontSize: {
        '0.9rem': '0.9375rem',
        '0.8rem': '0.875rem',
        '1.6rem': '1.625rem',
        '1.9rem': '1.9375rem',
      },
    },
  },
  plugins: [],
};
