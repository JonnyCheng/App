const path = require('path');
const webpack = require('webpack');

module.exports = {

    devtool: 'cheap-module-eval-source-map',
    
    entry: [
        'eventsource-polyfill',
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.ProvidePlugin({
            $ : 'jquery'
        })
    ],
    
    module: {
        loaders: [{
            test: /\.js?/,
            exclude: [/node_modules/, /styles/],
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }]
    }
};