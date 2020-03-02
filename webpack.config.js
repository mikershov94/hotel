const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist')
}

module.exports = {

    entry: {
        app: PATHS.src + '/index.js'
    },

    output: {
        filename: 'js/app-[hash:7].js',
        path: PATHS.dist,
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
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }
                ]
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

            {
                test: /\.(woff|woff2|otf|ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/fonts/[name].[ext]',
                        }
                    },
                ],
            },

            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/obj/[name].[ext]',
                        }
                    },
                ],
            },

            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/img/[name].[ext]',
                        }
                    },
                ],
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
        }),
        new CopyWebpackPlugin([
            { from: './public/fonts', to: `${PATHS.dist}/fonts` },
            { from: './public/icons', to: `${PATHS.dist}/obj` },
            { from: './public/img', to: `${PATHS.dist}/img` },
            { from: './public/objects', to: `${PATHS.dist}/obj` }
        ]),
    ],

};