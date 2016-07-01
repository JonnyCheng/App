var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackDevServer = require("webpack-dev-server");
var babel = require('babel-core');

module.exports = {

    devtool: 'source-map',
    
    devServer: {
        colors: true,
        hot: true,
        inline: true
    },

    entry: [
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
        new webpack.BannerPlugin('Created by zhenghongju'),

    ],
    
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/, /styles/],
            loader: 'babel'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }]
    }
};