const path = require('path');

module.exports = {
    entry: {
        'build/js/background'           : './src/background/background.js',
        'build/js/browser_action'       : './src/browser_action/browser_action.js',
        'build/js/inject'               : './src/inject/inject.js',
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js'
    }
};


