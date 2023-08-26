/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {


    fontSize: {

      // Headers ==========>>>>>>>>>>
      'h1': '4rem',
      'h2': '3.25rem',
      'h3': '2.75rem',

      // Sub Headers ==========>>>>>>>>>>
      'sub-heading-1': '2rem',
      'sub-heading-2': '1.75rem',
      'sub-heading-3': '1.25rem',

      // Paragraph ==========>>>>>>>>>>
      'paragraph-1': '1rem',
      'paragraph-2': '0.875rem',

      // Label ==========>>>>>>>>>>
      'label-1': '0.75rem',
      'label-2': '0.6875rem',
      'label-3': '0.625rem',

      // Label ==========>>>>>>>>>>
      'label-1': '0.75rem',
      'label-2': '0.6875rem',

      'sm': '1rem',
      'md': '1.25rem',
      'xl': '2.75rem',
      '2xl': '4rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',

    },

    colors: {

      // Primary #7017E0 ==========>>>>>>>>>>

      // 'primary-100': '#',
      'primary-100': '#7017E0',
      'primary-90': '#7725E8',
      'primary-80': '#7E32F0',
      'primary-70': '#8540F7',
      'primary-60': '#8C4EFF',
      'primary-50': '#935DFF',
      'primary-40': '#9A6BFF',
      'primary-30': '#A179FF',
      'primary-20': '#A886FF',
      'primary-10': '#AF94FF',
      
      
      


      // Secondary #FFCC91 ==========>>>>>>>>>>

      'secondary-100': '#FFCC91',
      'secondary-90': '#FFD29E',
      'secondary-80': '#FFDAAE',
      'secondary-70': '#FFDFBA',
      'secondary-60': '#FFE5C8',
      'secondary-50': '#FFEAD1',
      'secondary-40': '#FFF0DE',
      'secondary-30': '#FFF2E2',
      'secondary-20': '#FEF5EA',
      'secondary-10': '#FEF9F2',


      // Black #1C1D22 ==========>>>>>>>>>>

      'black-100': '#1C1D22',
      'black-90': '#2C2D33',
      'black-80': '#33343A',
      'black-70': '#37393F',
      'black-60': '#45464E',
      'black-50': '#53545C',
      'black-40': '#6E7079',
      'black-30': '#8B8D97',
      'black-20': '#A6A8B1',
      'black-10': '#BEC0CA',

      // White #FFFFFF ==========>>>>>>>>>>
      'white': '#FFFFFF',


      // Actions ==========>>>>>>>>>>

      'go': '#89E100',
      'stop': '#FD2A82',
      'background': '#F8F9F9',


    },
    extend: {

    },
  },
  plugins: [],
}
