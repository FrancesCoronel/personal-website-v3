const webpack = require("webpack");
const path = require("path");

export default {
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      },
      {
        loader: "babel-loader",
        test: /\.js?$/,
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
    })
  ],
  resolve: {
    alias: {
      jquery: "jquery/src/jquery",
      masonry: "masonry-layout",
      isotope: "isotope-layout"
    }
  },
  context: path.join(__dirname, "src"),
  entry: {
    // isotope: ["./js/components/isotope"],
    ie: ["./js/components/ie"],
    app: ["./js/app"]
  },
  output: {
    path: path.join(__dirname, "dist/assets/js"),
    publicPath: "/dist/assets/js/",
    filename: "[name].js"
  },
  externals: [/^vendor\/.+\.js$/]
};
