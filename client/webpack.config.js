const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin')

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'landing page'
      }),
      new workboxPlugin.GenerateSW()
    ],
// added loader for css
module: {
  rules: [
    // ... existing rules
    {
      test: /\.css$/, // Matches all CSS files
      use: ['style-loader', 'css-loader'] // Use style-loader and css-loader
    },
    {
      test: /\.m?js$/, // Matches all Js files
      exclude: /(node_modules | bower_components)/, //Ignore these
      use:{
        loader: "babel-loader",
        options:{
          presets:['@babel/preset-env']
        }
      }
    },
    // {
    //   test: /\.html$/,
    //   use:
    // }
  ]
}
  };
};
