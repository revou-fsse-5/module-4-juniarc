/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'gray-dark': '#232323',
        'green-light': '#468585',
        'green-dark': '#1B5252',
        'green-medium': '#40534C',
        'yellow-medium': '#D6BD98',
        'red-dark': '#FA5858'
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Platypi', 'serif'],
      },
      fontSize: {
        'hero': ['9rem', '1.1'],
      },
      maxHeight: {
        'large': '1024px'
      }
    },
  },
  plugins: [],
}