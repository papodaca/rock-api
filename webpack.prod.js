var path = require("path");

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  target: 'node',
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
    }]
  }
};


/*

var path = require('path');

module.exports = {
  entry: {
    first: './first.js',
    second: './second.js'
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
};

*/
