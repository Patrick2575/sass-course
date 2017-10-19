const path = require('path');

const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 

module.exports = {
    entry: {
        app: './src/js/app.js'
    }, // ---- end entry

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    }, // ---- end output

    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'html-loader'}
                ]
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    }, // ---- end module

    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({ template: './src/index.html'})
    ]
};