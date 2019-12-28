// webpack.base.js
const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //引入分离插件

module.exports = {
	entry: {    // 入口文件指定
		index: path.join(__dirname, '..', '/src/index.js'), 
		index2: path.join(__dirname, '..', '/src/index2.js'), 
	},       
	output: { // 打包后文件存放位置
		path: path.join(__dirname,'..', 'dist'),             
		filename: '[name].js'                         // 打包后文件名字
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   hmr: process.env.NODE_ENV === 'development',
            // },
          },
          'css-loader',
          // 'postcss-loader',
          'sass-loader',
        ],
			},
			{
				test: /\.(png|jpg|jpeg|svg|gif)$/,  // 正则匹配图片格式名
				use: [
						{ 
							loader: 'url-loader' ,
							options: {
								limit: 1000,  // 限制只有小于1kb的图片才转为base64，例子图片为1.47kb,所以不会被转化
								outputPath: 'images',  // 设置打包后图片存放的文件夹名称
							},
					}// 使用url-loader
				]
		},

		]
	},
	plugins: [
		new webpack.BannerPlugin('版权所有，翻版必究,george'),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '..', "/src/template.html")// new一个这个插件的实例，并传入相关的参数
		}),
		new webpack.HotModuleReplacementPlugin(), // 热更新插件 
		new MiniCssExtractPlugin({
			filename: "css/index.css"
		}),
	]
}