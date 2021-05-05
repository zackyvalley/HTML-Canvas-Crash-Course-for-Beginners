const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const Pages = require(path.resolve('.config/webpack/pages.js'));


module.exports = {
  entry: {
    'assets/js/main': ['../src/assets/es6/main.es6'],
    // 'assets/js/react': ['../src/pages/react/_app.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|es6)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
                url: false // url()を変換しない
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: true
            },
          },
          {
            loader: 'import-glob-loader'
          }
        ]
      },
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
    extensions: [ '.mjs', '.js','.jsx', '.es6'],
  },
  plugins: [
    ...Pages.map(({template, filename, relativePath}) => new HtmlWebpackPlugin({
        chunks: ['assets/js/main'],
        template,
        filename,
        relativePath,
        inject: 'body'
      })),
    ...[
      new MiniCssExtractPlugin({
        filename: 'assets/css/main.css'
      }),
      new BeautifyHtmlWebpackPlugin(),
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['../dist'] },
        // files: ['assets/*.css', 'assets/*.js', '../source/html/*.html']
      })
    ]
  ]
}
