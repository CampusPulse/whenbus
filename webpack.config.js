const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for Webpack
  output: {
    filename: 'bundle.js', // The output file
    path: __dirname + '/dist', // The output directory
  },
  devServer: {
    // contentBase: './dist', // Serve the content from the dist directory
    open: true, // Open browser after server starts
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use this HTML template
    }),
  ],
  mode: 'development', // Set mode to development for easier debugging
};
