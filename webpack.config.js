
module.exports = {
    entry: './coffeeBreak/main.js',
    output: {
        filename: './web/coffeeBreak.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!styles'
            }
        ]
    }
};
