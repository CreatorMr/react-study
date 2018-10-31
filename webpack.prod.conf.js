const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

console.log(__dirname);
module.exports = merge(baseConfig, {
    mode: 'production'
});
