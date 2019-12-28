// webpack.dev.js
const path = require('path');
const merge = require('webpack-merge')
const base = require('./webpack.base.js')


module.exports = merge(base, {
	devServer: {
		contentBase: path.join(__dirname,'..', "dist"),
		hot: true,
		port: '8899',
		inline: true,
		// open: true,
		overlay: true,
	}
})




