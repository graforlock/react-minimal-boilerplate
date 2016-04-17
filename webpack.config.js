module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/js/',
    filename: 'main.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: ['flow-comments'],
        presets: ['es2015', 'react'],
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
