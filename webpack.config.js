const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
    // print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'The Bluesman - You Can Play The Blues (Web Audio API)',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      // 加载 CSS
      {
        // test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      // 加载 images 图像
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          // 我也遇到了图片资源超过limit，就变成[object Module]的问题；
          // 这是因为新版file-loader使用了ES Module模块化方式，
          // 将esModule配置为false就可以解决这个问题。可以看一下file-loader的change Log。
          options: {
            esModule: false
          }
        }
      },
      // 加载 mp3 图像
      {
        test: /\.(mp3)$/,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false
          }
        }
      },
      // 加载 fonts 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      // 加载数据
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'audio:src']
          }
        }
      }
    ]
  }
};
