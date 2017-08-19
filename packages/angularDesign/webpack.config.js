var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: {
    'app': './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'src',
    filename: '[name].min.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname,
    port: 8080,
    hot: true,
    inline: true,
    stats: 'minimal'
  },
  resolve: {
    extensions: ['.js', '.ts', '.scss'],
    alias: {
      _resources: path.resolve(__dirname, 'resources')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        loaders: [{loader: 'awesome-typescript-loader',
        options: { tsconfig:  __dirname + '/tsconfig.json' } } , 'angular2-template-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['raw-loader','sass-loader']
      }
    ]
  }
};
