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
    devtool: 'inline-source-map'
}

const worker = {
    target: 'webworker',
    entry: {
        bundle: path.join(__dirname, './src/engine/calcengine.worker.ts'),
    },

    mode: "development",

    output: {
        filename: 'workerbundle.js',
        webassemblyModuleFilename: "[modulehash].wasm",
        path: path.join(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['wasm', '.ts', '.tsx', '.js', '.json'],
        plugins: [],
    },

    module: {
        rules: [
            {
                test: /\.wasm$/,
                type: "webassembly/experimental"
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
        ],
    },
    devtool: 'inline-source-map',
}

module.exports = [app, worker];