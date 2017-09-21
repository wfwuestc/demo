const path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
    HtmlWebPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin')
const jquery = ['jquery']

module.exports = {

//入口    
  entry: {
    bundle: './src/js/index.js',
    jquery: jquery
  },
//导出
  output: {
    //导出目录   导出文件名
    path: path.resolve(__dirname, 'dist'),
    hashDigestLength: 3,  //hash位数
    filename: '[name].[chunkhash].js'
  },
  //插件
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // vendor 的意义和之前相同
      // manifest文件是将每次打包都会更改的东西单独提取出来，保证没有更改的代码无需重新打包，这样可以加快打包速度
      names: ['jquery', 'manifest'],
      // 配合 manifest 文件使用
      minChunks: Infinity
    }),
    new CleanWebpackPlugin(['dist/bundle.*.js','dist/manifest.*.js','dist/main.*.css'], {
      // 打印 log
      verbose: true,
      // 删除文件
      dry: false
    }),
    //其他less等文件   转码  生成css文件
    new ExtractTextPlugin('main.[chunkhash].css'),
    //压缩js
    new UglifyJSPlugin(),
    new HtmlWebPlugin({
      template: 'index.html'
    })
  ],


//模块
  module: {
    rules: [

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      //js[x]文件  编译内容后 依旧是js文件 所以不需要 ExtractTextPlugin
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}