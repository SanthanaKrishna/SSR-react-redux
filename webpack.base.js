module.exports = {
    //tell webpack to run babel on every file it runs through
    //babel config
    module: {
        rules: [
            {
                test: /\.js?$/,    //only run js file
                loader: 'babel-loader', //run loader( webpack loader module) excute babel to transplier our code
                exclude: /node_modules/,  // tell to webpack that do not run babel over given directory(node modules floder) 
                options: {          //options to pass along babel loader
                    presets: [      //run 
                        'react',        //to run react code
                        'stage-0',       //to run async code
                        ['env', { targets: { browsers: ['last 2 versions'] } }]  //'env': run all different transform rules need latest 2 version for all browser
                    ]
                }
            }
        ]
    }
}