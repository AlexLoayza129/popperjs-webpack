const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                    test: /\.js$/,
                    loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    { loader : "css-loader", options: { importLoaders : 1 }},
                    "postcss-loader",
                ],
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
           template: 'index.html' 
        })
    ]
}