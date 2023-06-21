/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '-1': '-1'
      },
      colors: {
        // Background color
        'c-bg-1000': '#0A0707',
        // Neutral Colors
        'c-neutral-1000': '#0A0D14',
        'c-neutral-900': '#1B1F27',
        'c-neutral-800': '#23272F',
        'c-neutral-700': '#3F444D',
        'c-neutral-300': '#E1E6EF',
        'c-neutral-200': '#F1F3F9',
        'c-neutral-100': '#F8F9FC',
        'c-neutral-0': '#FFFFFF',

        // Primary Colors
        'c-primary-900': '#FDB74B',
        'c-primary-800': '#FDCF72',
        'c-primary-700': '#FEE2A9',
        'c-primary-100': '#FFF1D6',
        'c-primary-50': '#FFF8EB',

        // Text and Icon Colors
        'c-text-disabled': 'rgba(255, 255, 255, 0.6)',
        'c-text-secondary': 'rgba(255, 255, 255, 0.75)',
        'c-text-primary': 'rgba(255, 255, 255, 1)',
        'c-text-disabled-2': 'rgba(29, 36, 51, 0.65)',
        'c-text-secondary-2': 'rgba(29, 36, 51, 0.8)',
        'c-text-primary-2': 'rgba(29, 36, 51, 1)',
      },
      boxShadow: {
        'c-btn': '6px 6px 0 rgba(29, 36, 51, 0.3)',
        'c-btn-2': '3px 3px 0 rgba(29, 36, 51, 0.3)'
      }
    },
    fontFamily: {
      almaria: ["almaria", "sans"],
      sf: ["sf", "sans"]
    },

  },
  plugins: [],
}


/** NOTE
* ? HOW TO CALL LOCAL FONT INTO TILWINDCSS
* ! LINK: https://www.geeksforgeeks.org/how-to-use-font-from-local-files-globally-in-tailwind-css/
*/