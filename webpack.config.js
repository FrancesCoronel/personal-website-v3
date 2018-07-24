const webpack = require("webpack");
const path = require("path");

// Workbox
const WorkboxPlugin = require("workbox-webpack-plugin");
// Brotli
const BrotliPlugin = require("brotli-webpack-plugin");
// GZip
const CompressionPlugin = require("compression-webpack-plugin");
// UglifyJS
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "production",
  module: {
    rules: [{
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader",
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-c9])?$/,
      loader: "url-loader",
    },
    {
      test: /\.js?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      query: {
          cacheDirectory: true,
        },
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
          },
        ],
    },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.ProvidePlugin({
      fetch: "imports-loader?this=>global!exports?global.fetch!whatwg-fetch",
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new BrotliPlugin(),
    new CompressionPlugin(),
    new WorkboxPlugin({
      cacheId: "fvcproductions",
      globDirectory: "dist",
      globPatterns: ["index.html", "404.html", "**/*.{html,css,png,gif,jpg,svg,xml,js,ico,json}"],
      globStrict: false,
      swDest: path.join("dist", "sw.js"),
      maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
        urlPattern: /\.(?:html)$/,
        handler: "networkFirst",
      },
      {
        urlPattern: /\.(?:css|png|gif|jpg|svg|xml|js|ico|jso)$/,
        handler: "staleWhileRevalidate",
      },
      {
        urlPattern: new RegExp("https://cdn.embedly.com"),
        handler: "staleWhileRevalidate",
      },
      {
        urlPattern: new RegExp("https://fvcproductions.disqus.com"),
        handler: "staleWhileRevalidate",
      },
      {
        urlPattern: new RegExp("https://cdn.onesignal.com"),
        handler: "staleWhileRevalidate",
      },
      {
        urlPattern: new RegExp("https://imgur.com"),
        handler: "staleWhileRevalidate",
      },
      {
        urlPattern: new RegExp("https://google-analytics.com"),
        handler: "staleWhileRevalidate",
      },
      {
        urlPattern: new RegExp("https://twitter.github.io"),
        handler: "networkFirst",
      },
      ],
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: true,
          ecma: 6,
          output: {
            comments: false,
          },
          sourceMap: false,
        },
      }),
    ],
  },
  context: path.join(__dirname, "src"),
  entry: {
    app: ["./js/app"],
    filter: ["./js/components/filter.js"],
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist/assets/js"),
    publicPath: "/dist/assets/js/",
  },
};
