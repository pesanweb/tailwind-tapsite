const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point untuk aplikasi Anda
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output ke folder "dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Pastikan Anda memiliki Babel untuk mendukung ES6+
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Membersihkan folder "dist" sebelum build baru
    new HtmlWebpackPlugin({
      template: './index.html', // Template HTML Anda
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Folder untuk file statis
    },
    compress: true,
    port: 8080, // Port server
    open: true, // Buka browser secara otomatis
  },
  mode: 'development',
};
