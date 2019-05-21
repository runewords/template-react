const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = process.env.NODE_ENV;

// plugins
let plugins = [
    new HtmlWebpackPlugin({
        title: 'output management',
        template: 'template/index.html'
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
    mode: env,
    entry: {
        app: './src/main.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: env === 'development' ? 'inline-source-map' : false,
    devServer: {
        contentBase: './dist',
        hotOnly: false
    },
    plugins,
    module: {
        loaders: [
            {
                test: /\.jsx?$/i,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                }
            },
        ]
    },
    // externals: {
    //     'react': 'window.React',
    //     'react-dom': 'window.ReactDOM',
    //     'react-router': 'window.ReactRouter',
    //     'react-router-dom': 'window.ReactRouterDOM',
    // },
};
