module.exports = {
  plugins: {
    // Recent Tailwind versions moved the PostCSS plugin to a separate package
    // Install @tailwindcss/postcss and keep autoprefixer
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
