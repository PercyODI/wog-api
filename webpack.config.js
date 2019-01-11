const path = require('path')
// const webpack = require('webpack')
// const gqlTagTransformer = require('ts-transform-graphql-tag').getTransformer

const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, 'dist');

module.exports = {
    target: "node",
    context: ROOT,
    devtool: 'source-map',
    entry: {
        'main': './server.ts'
    },

    output: {
        filename: 'server.js',
        path: DESTINATION,
        devtoolModuleFilenameTemplate        : '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },

    resolve: {
        extensions: ['.mjs', '.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },
            {
                loader: 'ts-loader',
                exclude: /node_modules/,
                test: /.tsx?$/,
                // options: {
                //     getCustomTransformers: () => ({
                //         before: [gqlTagTransformer()]
                //     })
                // }
            }
        ]
    }
}