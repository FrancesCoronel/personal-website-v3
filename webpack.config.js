const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

export default {
  module: {
    rules: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      },
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.ProvidePlugin({
      fetch: "imports-loader?this=>global!exports?global.fetch!whatwg-fetch"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      }
    }),
    new WorkboxPlugin({
      globDirectory: "dist",
      globPatterns: ["**/*.{html,js,css}"],
      swDest: path.join("dist", "sw.js"),
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  resolve: {
    alias: {
      jquery: "jquery/src/jquery",
      masonry: "masonry-layout",
      isotope: "isotope-layout",
      lightgallery: "lightgallery"
    }
  },
  context: path.join(__dirname, "src"),
  entry: {
    // OneSignalSDKUpdaterWorker: ["./js/service-worker/OneSignalSDKUpdaterWorker"],
    // OneSignalSDKWorker: ["./js/service-worker/OneSignalSDKWorker"],
    ie: ["./js/components/ie"],
    app: ["./js/app"]
  },
  output: {
    path: path.join(__dirname, "dist/assets/js"),
    publicPath: "/dist/assets/js/",
    filename: "[name].js"
  }
};
