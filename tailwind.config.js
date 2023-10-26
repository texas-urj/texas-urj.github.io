// import type { Config } from 'tailwindcss'

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/flowbite-react/**/*.js', 
    './pages/**/*.{ts,tsx}', 
    './public/**/*.html',
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
  plugins: [],
}
export default config
