module.exports = {
  env: {
    production: {
      plugins: ['next/babel', 'emotion']
    },
    development: {
      plugins: [['next/babel', 'emotion', { sourceMap: true }]]
    }
  }
}
