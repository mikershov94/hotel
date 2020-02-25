const path = require('path');

module.exports = {

    entry: {
        app: './src/index.js'
    },

    output: {
        filename: 'js/app-[hash:7].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

};