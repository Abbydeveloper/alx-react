const path = require("path");
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: {
    header: {
      import: './modules/header/header.js'),
      dependOn: 'shared'
    },
    body: {
      import: './modules/body/body.js',
      dependOn: 'shared'
    },
    footer: {
      import: './modules/footer/footer.js',
      dependOn: 'shared'
    },
    shared: 'jquery',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    static: path.join(__dirname, './public'),
    open: true,
    port 8564,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp)$/i,
        type: 'asset/resource',
        use: [
    	  'file-loader',
          {
            loader: 'image-webpack-loader',
    	    options: {
	      bypassOnDebug: true,
              disable: true,
  	    }
          }
        ],
      },
    ],
  },
  performance: {
    hints: false,
    masEntrypointSize: 512000,
    masAssetSize: 512000,
  }
}
