const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js', // Entry point of your application
  },
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: '/', // Ensure the server serves from the root
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Load CSS files
      },
      ,
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  devtool: 'source-map', // Enable source maps for debugging
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve content from the "dist" directory
    },
    compress: true, // Enable gzip compression
    port: 9000, // Port to run the server on
    open: true, // Open the browser after server had been started
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Template HTML file
      filename: 'index.html', // Output HTML file
    }),
  ],
};