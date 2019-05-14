const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExtenals = require('webpack-node-externals');

const config = {
    // Inform webpack that we're building a bundle 
    //for nodeJS, rather than for the browser
    target: 'node',

    //Tell webpack the root file of our server application
    entry: './src/index.js',

    //Is going to tell webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    //this rule going to tell to webpack do not bundle any libaries in output bunldle.js file if the libraries exist in node modules floder
    //library exist inside node modules folder will not include server side bundle
    externals: [webpackNodeExtenals()]
};

module.exports = merge(baseConfig, config);