const webpack = require("webpack");
const path = require("path");

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
    new WorkboxPlugin({
      cacheName: "fvcproductions",
      globDirectory: "dist",
      globPatterns: ["**/*.{html,jss,css,svg,png,jpg}"],
      swDest: path.join("dist", "service-worker.js"),
      maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|gif|jpg)$/,
          handler: "cacheFirst",
          options: {
            cacheName: "fvcproductions-image-cache",
            cacheExpiration: {
              maxEntries: 20
            }
          }
        },
        {
          urlPattern: new RegExp("https://cdn.embedly.com/widgets/platform.js"),
          handler: "staleWhileRevalidate"
        },
        {
          urlPattern: new RegExp("https://cdn.onesignal.com/sdks/OneSignalSDK.js"),
          handler: "staleWhileRevalidate"
        }
      ]
    })
  ],
  resolve: {
    alias: {
      jquery: "jquery/src/jquery",
      isotope: "isotope-layout"
    }
  },
  context: path.join(__dirname, "src"),
  entry: {
    ie: ["./js/components/ie"],
    app: ["./js/app"]
  },
  output: {
    path: path.join(__dirname, "dist/assets/js"),
    publicPath: "/dist/assets/js/",
    filename: "[name].js"
  }
};
