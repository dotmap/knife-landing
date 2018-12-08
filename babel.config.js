module.exports = {
  env: {
    production: {
      presets: ['next/babel'],
      plugins: ['emotion']
    },
    development: {
      presets: ['next/babel'],
      plugins: [['emotion', { sourceMap: true }]]
    },
    test: {
      presets: ['next/babel'],
      plugins: ['emotion']
    }
  }
}
