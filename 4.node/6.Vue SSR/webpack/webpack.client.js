const merge = require('webpack-merge');
const baseWebpack = require('./webpack.config.js');

module.exports = merge(baseWebpack, {
    entry: './entry/client-entry.js',
    output: {
        filename: 'client.bundle.js'
    }
})