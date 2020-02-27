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

            {
                test: /\.sass$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: { path: __dirname }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    },
                ]
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
        new MiniCssExtractPlugin({
            filename: 'css/main-[hash:7].css'
        })
    ],

};