const path = require('path');

module.exports = {

    entry: {
        app: './src/index.js'
    },

    output: {
        filename: 'js/app-[hash:7].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },

    devServer: {
        overlay: true,
        stats: 'errors-only',
        contentBase: './public',
        port: 3000,
    },

};