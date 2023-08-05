/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'ap-',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
    './.storybook/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        lg: '1280px',
        pc: '1024px',
        tb: '768px',
        sp: '425px',
      },
      spacing: {
        lg: '1280px',
        pc: '1024px',
        tb: '768px',
        sp: '425px',
        21: '5.25rem',
        18: '4.5rem',
      },
      maxWidth: {
        lg: '1280px',
        pc: '1024px',
        tb: '768px',
        sp: '425px',
      },
    },
    fontSize: {
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      28: '1.75rem',
      32: '2rem',
      36: '2.25rem',
      40: '2.5rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      clear: '#FFF',
      dim: '#000',
      grey: {
        DEFAULT: '#9A9A9A',
        10: '#F9F9F9',
        30: '#E7E7E7',
        50: '#9A9A9A',
        70: '#606060',
        90: '#262626',
      },
      primary: {
        DEFAULT: '#CC112B',
        10: '#FCD8CE',
        30: '#EF726B',
        50: '#CC112B',
        70: '#920835',
        90: '#610333',
      },
      secondary: {
        DEFAULT: '#00B8B9',
        10: '#C9FBEA',
        30: '#5DEAD2',
        50: '#00B8B9',
        70: '#006D85',
        90: '#003958',
      },
      success: {
        DEFAULT: '#69B20A',
        10: '#EEFBCB',
        30: '#BAE764',
        50: '#69B20A',
        70: '#3F8005',
        90: '#225501',
      },
      info: {
        DEFAULT: '#006DD3',
        10: '#CAEEFC',
        30: '#60BAF1',
        50: '#006DD3',
        70: '#003E97',
        90: '#001F65',
      },
      warning: {
        DEFAULT: '#FCB900',
        10: '#FEF6CB',
        30: '#FEDD65',
        50: '#FCB900',
        70: '#B57B00',
        90: '#784B00',
      },
      danger: {
        DEFAULT: '#9A9A9A',
        10: '#FDE6D1',
        30: '#F49E74',
        50: '#DD3D1C',
        70: '#9F100E',
        90: '#6A0512',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(({ addComponents }) => {
      addComponents({
        '.prose-h1': {
          fontSize: '2.5rem',
        },
        '.prose-h2': {
          fontSize: '2rem',
        },
        '.prose-h3': {
          fontSize: '1.75rem',
        },
        '.prose-h4': {
          fontSize: '1.5rem',
        },
        '.prose-h5': {
          fontSize: '1.25rem',
        },
        '.prose-h6': {
          fontSize: '1rem',
        },
        '.prose-xl': {
          fontSize: '2rem',
        },
        '.prose-lg': {
          fontSize: '1.25rem',
        },
        '.prose-md': {
          fontSize: '1rem',
        },
        '.prose-sm': {
          fontSize: '0.875rem',
        },
        '.prose-xs': {
          fontSize: '0.75rem',
        },
      })
    }),
  ],
}
