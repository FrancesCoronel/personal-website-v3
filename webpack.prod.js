const webpack = require("webpack");
const path = require("path");

// Workbox
const WorkboxPlugin = require("workbox-webpack-plugin");
// Brotli
const BrotliPlugin = require("brotli-webpack-plugin");
// GZip
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "production",
  module: {
    rules: [{
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-c9])?$/,
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
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.ProvidePlugin({
      fetch: "imports-loader?this=>global!exports?global.fetch!whatwg-fetch"
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new BrotliPlugin(),
    new CompressionPlugin(),
    new WorkboxPlugin.InjectManifest({
      swDest: "sw.js",
      globDirectory: "./dist",
      globPatterns: ["index.html", "404.html", "**/*.{js,css,png,svg,jpg,jpeg}"],
    }),
    new WorkboxPlugin.GenerateSW({
      cacheId: "fvcproductions",
      offlineGoogleAnalytics: true,
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
          urlPattern: /index.html/,
          handler: "NetworkFirst"
        },
        {
          urlPattern: /\.(?:html)$/,
          handler: "NetworkFirst",
          options: {
            cacheName: "fvcproductions-posts-cache",
            expiration: {
              maxEntries: 50
            },
          }
        },
        {
          urlPattern: /\.(?:png|gif|jpg|svg|ico|jpeg|css|js)$/,
          handler: "CacheFirst",
          options: {
            cacheName: "fvcproductions-images-cache",
            expiration: {
              maxEntries: 20,
            },
          },
        },
        {
          urlPattern: new RegExp("https://twemoji.maxcdn.com"),
          handler: "StaleWhileRevalidate"
        },
        {
          urlPattern: new RegExp("https://i.imgur.com"),
          handler: "StaleWhileRevalidate"
        },
        {
          urlPattern: new RegExp("https://www.google-analytics.com"),
          handler: "StaleWhileRevalidate"
        }
      ]
    })
  ],
  context: path.join(__dirname, "assets"),
  entry: {
    app: ["./js/app"]
  },
  output: {
    filename: path.join("assets", "js", "[name].js"),
    path: path.join(__dirname, "dist"),
  }
};