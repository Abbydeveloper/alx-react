const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, './js/dashboard_main.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'production',
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp)$/i,
      type: 'asset/resource',
      use: ['file-loader'],
    }
  ],
}
