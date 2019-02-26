const path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/index.js',
    output: {
        filename: 'index.min.js',
        path: path.resolve(__dirname, 'js')
    }
};