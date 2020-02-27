const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: {
        app: './src/index.js'
    },

    output: {
        filename: 'js/app-[hash:7].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },

    devServer: {
        overlay: true,
        stats: 'errors-only',
        contentBase: './public',
        port: 3000,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                query: { compact: false },
                loader: 'babel-loader',
            },


        ],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
    ],

};