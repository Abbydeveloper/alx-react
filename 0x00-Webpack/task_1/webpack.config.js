const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "",
    }),
  ],
  entry: {
    main: path.resolve(__dirname, './js.dashboard_main.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(_dirname, 'public'),
  },
  mode: 'production',
}
