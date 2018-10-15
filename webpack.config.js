const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});


const app = {
    entry: {
        bundle: path.join(__dirname, './src/Index.tsx'),
    },

    mode: "development",

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        plugins: [],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
        ],
    },
    plugins: [htmlPlugin],
}

const worker = {
    target: 'webworker',
    entry: {
        bundle: path.join(__dirname, './src/calcengine.worker.ts'),
    },

    mode: "development",

    output: {
        filename: 'workerbundle.js',
        path: path.join(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        plugins: [],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
        ],
    },
}

module.exports = [app, worker];