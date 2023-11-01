import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      './node_modules/flowbite-react/**/*.js', 
      './pages/**/*.{ts,tsx}', 
      './public/**/*.html',
      "./node_modules/flowbite/**/*.js",
    ],
    theme: {
      extend: {
      colors: {
        "rose":"#CE796B",
        "snow":"#F6F4D2",
        "LGreen":"#CBDFBD",
        "DGreen":'#386150',
        "Ash":"#362417",
      },
      },
    },
    plugins: [ require('flowbite/plugin'), ],
  }
  const config: Config = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  }
  export default config
  