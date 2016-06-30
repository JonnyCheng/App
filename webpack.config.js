var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackDevServer = require("webpack-dev-server");
var react = require('react');

module.exports = {

    devtool: 'source-map',
    
    devServer: {
        colors: true,
        hot: true,
        inline: true
    },

    entry: [
        'webpack-hot-middleware/client',
        './src/javascript/index'
    ],
    
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $ : 'jquery'
        }),
        new webpack.BannerPlugin('Created by zhenghongju')
    ],
    
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/, /styles/],
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }]
    }
};