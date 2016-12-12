'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name]-[hash].min.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: 'client/src/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('[name]-[hash].min.css'),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false //remove all comments
            },
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                'presets': ['react', 'es2015', 'stage-0']
            }
        },{
            test:/\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css!modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
        },{
            test: /\.(jpg|png|svg)$/, 
            loader: "url?limit=8192"
        }]
    },
    postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
    ]
}