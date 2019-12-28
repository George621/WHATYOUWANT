// webpack.base.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
	console.log(path.resolve(__dirname, '..', '/src/index.js'), '===')
	return path.resolve(__dirname, '..', dir)
}

module.exports = {
	entry: path.join(__dirname, '/src/index.js'),        // 入口文件指定
	output: {
		path: path.join(__dirname, 'dist'),             // 打包后文件存放位置
		filename: 'bundle.js'                            // 打包后文件名字
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(scss|sass)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin('版权所有，翻版必究,george'),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "/src/template.html")// new一个这个插件的实例，并传入相关的参数
		}),
		new webpack.HotModuleReplacementPlugin() // 热更新插件 
	]
}