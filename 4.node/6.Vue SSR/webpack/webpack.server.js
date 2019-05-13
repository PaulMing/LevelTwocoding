const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const baseWebpack = require('./webpack.config.js');
const merge = require('webpack-merge');
module.exports = merge(baseWebpack, {
    entry: './entry/server-entry.js',
    target: 'node',
    output: {
        filename: 'server.bundle.js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new VueSSRServerPlugin()
    ]
})