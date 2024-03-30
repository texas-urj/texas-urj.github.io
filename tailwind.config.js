/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ...
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  plugins: [
    // ...
    require('flowbite/plugin'),
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'redumber': '#603026',
      'copper': '#C17239',
      'wolfgrey': '#D6DBD2',
      'ivory': '#F2F5EA',
      'charcoal': '#38302E',
    },}
};