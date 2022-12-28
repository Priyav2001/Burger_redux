const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//plugins
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const HTML_TEMPLATE_PATH = path.resolve(__dirname, 'src', 'index.html');

//constants
const ENVIRONMENT = 'development';

//paths
const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const SVG_DIR = path.resolve(__dirname, 'src', 'assets', 'images', 'svg');
module.exports = {
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  context: __dirname,
  target: 'web',
  entry: {
    app: ['babel-polyfill', SRC_DIR + '/index.tsx']
  },
  output: {
    filename: 'js/[name]-[hash:6].js',
    chunkFilename: 'js/[name].bundle-[hash:6].js',
    path: DIST_DIR
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
    new Visualizer(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /es|lt|lv|en|ru/),
    //this is so that envs are accessible inside .ts
    new webpack.EnvironmentPlugin({
      NODE_ENV: ENVIRONMENT,
    }),
    //this is needed for index.html
    new HtmlWebpackPlugin({
      env: ENVIRONMENT,
      template: HTML_TEMPLATE_PATH,
    })
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /(\.css|\.scss|\.sass)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=assets/images/[name].[ext]' },
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?prefix=font/&limit=5000&name=assets/fonts/[name].[ext]' },
      { test: /\.(woff2?)$/, loader: 'file-loader?prefix=font/&limit=5000&name=assets/fonts/[name].[ext]' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=image/svg+xml&name=assets/svgs/[name].[ext]' },
    ]
  },
  node: {
    console: false,
    global: true,
    process: true,
    Buffer: false,
    setImmediate: false
  }
};
