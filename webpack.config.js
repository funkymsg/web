const path = require('path');

module.exports = {
    entry: './js/index.js',
    output: {
        filename: 'index.min.js',
        path: path.resolve(__dirname, 'js')
    }
};