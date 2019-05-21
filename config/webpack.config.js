const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = process.env.NODE_ENV;

// plugins
let plugins = [
    new HtmlWebpackPlugin({
        title: 'output management',
        template: __dirname + '/../template/index.html'
    })
];
if(env === 'development') {
    plugins = plugins.concat([
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ])
} else {
    plugins = plugins.unshift(new CleanWebpackPlugin(['dist']));
}

module.exports = {
    // 开发模式
    mode: 'development',
    // 入口
    entry: {
        app: './src/main.js'
    },
    // 开发工具
    devtool: env === 'development' ? 'inline-source-map' : false,
    // 输出
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    // 对各种文件类型(模块)进行处理
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                // 排除 `node_modules`目录
                exclude: /node_modules/
            }
        ]
    },
    plugins
}
