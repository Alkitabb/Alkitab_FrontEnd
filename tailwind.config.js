/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {


    fontSize: {

      // Headers ==========>>>>>>>>>>

      'h1': '64px',
      'h2': '52px',
      'h3': '44px',


      // Sub Headers ==========>>>>>>>>>>

      'sub-heading-1': '32px',
      'sub-heading-2': '28px',
      'sub-heading-3': '20px',


      // Paragraph ==========>>>>>>>>>>
      'paragraph-1': '16px',
      'paragraph-2': '14px',


      // Label ==========>>>>>>>>>>
      'label-1': '12px',
      'label-2': '11px',
      'label-3': '10px',


      // Label ==========>>>>>>>>>>
      'label-1': '12px',
      'label-2': '11px',



      'sm': '1rem',
      'md': '1.25rem',
      'xl': '2.75rem',
      '2xl': '64px',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },

    colors: {

      // Primary #5570F1 ==========>>>>>>>>>>

      'primary-100': '#5570F1',
      'primary-90': '#6078EC',
      'primary-80': '#6D83EC',
      'primary-70': '#7C8FEC',
      'primary-60': '#8899E9',
      'primary-50': '#97A5EB',
      'primary-40': '#ABB5E9',
      'primary-30': '#B6BFE8',
      'primary-20': '#C4CAE8',
      'primary-10': '#DBDEEE',


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

      'go': '#519C66',
      'stop': '#CC5F5F',
      'background': '#F4F5FA',


    },
    extend: {

    },
  },
  plugins: [],
}
