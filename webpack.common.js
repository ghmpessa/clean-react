const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main/index.tsx', // a partir de onde gero o meu bundle
  output: { // outuput é onde vamos gerar o bundle
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'main-bundle-[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'], // extensões que serão dado suporte
    alias: {
      '@': path.join(__dirname, '/src') // faz com que o react entenda como estão feitos os imports
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
