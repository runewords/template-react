const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 开发模式
    mode: 'development',
    // 入口
    entry: {
        app: './src/main.js'
    },
    // 输出
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
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
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/../template/index.html'
        })
    ]
}
