//webpack.prod.js

const path = require('path');
const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const PurifyCssWebpack = require('purifycss-webpack'); // 引入PurifyCssWebpack插件
// const glob = require('glob');  // 引入glob模块,用于扫描全部html文件中所引用的css

module.exports = merge(base, {
    // devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: 'dist'
        }),
        // new PurifyCssWebpack({
        //     paths: glob.sync(path.join(__dirname, '..', '')) // 同步扫描所有html文件中所引用的css
        // })
    ]
})



