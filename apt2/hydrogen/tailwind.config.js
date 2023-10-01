import formsPlugin from '@tailwindcss/forms'
import typographyPlugin from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  plugins: [formsPlugin, typographyPlugin],
  theme: {
    extend: {
      colors: {
        black: '#252525',
        primary: '#006BB6',
        secondary: '#ED1847',
        success: '#28a745',
        warning: '#ffc107',
        info: '#99C4E2',
        error: '#ED1847',
        caption: '#555555',
        'dark-gray': '#EBEBEB',
        'light-gray': '#F9F9F9',
      },
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1025px',
      xxl: '1241px',
      xxxl: '1441px',
      xxxxl: '1920px',
      xxxxxl: '2180px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
        sm: '15px',
        md: '30px',
        xxl: '60px',
        xxxxl: '6.25vw',
      },
    },
    fontFamily: {
      heading: 'var(--font-family-heading)',
      body: 'var(--font-family-body)',
    },
  },
}
