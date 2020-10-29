module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        'black-overlay': 'rgba(0, 0, 0, 0.60)',
      },
    },
  },
  variants: {},
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [require('@tailwindcss/ui')],
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.ts',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
}
