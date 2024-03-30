/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        
        'naranja': 'hsl(25, 97%, 53%)',

        'blanco': 'hsl(0, 0%, 100%)',
        'gris-claro': 'hsl(217, 12%, 63%)',
        'gris-medio': 'hsl(216, 12%, 54%)',
        'azul-oscuro': 'hsl(213, 19%, 18%)',
        'azul-muy-oscuro': 'hsl(216, 12%, 8%)'
      }
    },
  },
  plugins: [],
}
