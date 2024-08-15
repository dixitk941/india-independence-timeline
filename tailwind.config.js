module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        saffron: '#FF9933',
        green: '#138808',
        ashoka: '#000080',
        'ashoka-dark': '#002366', // For the GenZ touch in other components
      },
      backgroundImage: theme => ({
        'indian-flag': 'linear-gradient(to right, #FF9933, white, #138808)',
      }),
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideUp: 'slideUp 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
