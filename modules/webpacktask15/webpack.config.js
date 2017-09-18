
const path = require('path'),
ExtractTextPlugin = require("extract-text-webpack-plugin"),
UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
HtmlWebPlugin= require('html-webpack-plugin');


module.exports={
    
//入口    
    entry: './src/js/index.js',
//导出
    output:{
       //导出目录   导出文件名
        path: path.resolve(__dirname, 'dist'),
        //hashDigestlength:2,  //hash位数
        filename: 'bundle.js',
       
       
    },
   

   
    //插件
    plugins:[
    
        //其他less等文件   转码  生成css文件
        new ExtractTextPlugin('main.css'),
        //压缩js
        new UglifyJSPlugin(),
        new HtmlWebPlugin({
            template: 'index.html'
        })
    ],


//模块
    module:{
        rules:[

            {
                test: /\.css$/,
                use:  ExtractTextPlugin.extract({
                    fallback :'style-loader',
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