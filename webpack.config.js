const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/main/index.tsx', // a partir de onde gero o meu bundle
    output: { // outuput é onde vamos gerar o bundle
      path: path.join(__dirname, 'public/js'),
      publicPath: '/public/js',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'], // extensões que serão dado suporte 
      alias: {
        '@': path.join(__dirname, '/src') // faz com que o react entenda como estão feitos os imports
      },
      devServer: {
        contentBase: './public', // inicializar o server a partir da pasta public
        writeToDisk: true,
        historyApiFallback: true // permite rotear tudo
      },
      externals: {
        // tudo dentro do externals, webpack não coloca no bundle
        react: 'React',
        'react-dom': 'ReactDOM' 
      }
    },
    plugins:[
      new CleanWebpackPlugin()
    ]
}