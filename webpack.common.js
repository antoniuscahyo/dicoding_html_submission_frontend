const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); //dipasang via npm

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    mode: "production",
    module: {

        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    
    plugins: [
        // HTML Webpack Plugin
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}