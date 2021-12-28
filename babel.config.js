const importAlias = {
  static: './static',
  types: './src/types',
  pages: './src/pages',
  styles: './src/styles',
  '@types': './src/@types',
  components: './src/components'
}

module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [['module-resolver', { alias: importAlias }]]
  }
}
