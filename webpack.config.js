const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { DefinePlugin } = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx', // a partir de onde gero o meu bundle
  output: { // outuput é onde vamos gerar o bundle
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'], // extensões que serão dado suporte
    alias: {
      '@': path.join(__dirname, '/src') // faz com que o react entenda como estão feitos os imports
    }
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true // para acessar classes criadas através do js
        }
      },
      {
        loader: 'sass-loader'
      }]
    }]
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
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      'process.env.API_URL': 'http://fordevs.herokuapp.com/ap'
    })
  ]
}
