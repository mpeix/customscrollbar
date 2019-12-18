const path = require('path');

//Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',    
    context: path.resolve(__dirname, 'app'),
    //For multipage application, every page has his entry point
    entry: path.resolve(__dirname, 'app/index.js'),
    output:{
        path: path.resolve(__dirname, 'public'),
        filename: '[id].[contenthash].js',
        auxiliaryComment: 'Scroll output comment webpack comment'
    },
    plugins:[
        new HtmlWebpackPlugin({
            //title: 'Custom template',
            // Load a custom template (lodash by default see the FAQ for details)
            template: 'index.html',
            minify:true
          }),
          new MiniCssExtractPlugin({
            filename: '[id].[contenthash].css',            
        })
    ],
    module:{
        rules: [
            /* 
                BABEL Loader
            */
            {
                test: /\.js*/,
                exclude: /(node_modules)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets: ['@babel/preset-env'],
                        cacheDirectory:(__dirname,'cache_webpack')
                    }
                }
            },
            /*
                SASS LOADER
            */
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: [
                    MiniCssExtractPlugin.loader, //For style loader we use the loader from MiniCssExtractPlugin 'style-loader'
                    'css-loader',
                     'sass-loader',                        
                ]
            }    
        ]
    },
}