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
            ,

            /* babel loader */
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    },
    
    plugins: [
        // HTML Webpack Plugin
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html"
        })
    ]
}