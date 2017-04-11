module.exports = {
    entry: ['babel-polyfill', './src/index'],
    output: {
        filename: './build/bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
        ],
    },
    devServer: {
        contentBase: './public',
        port: 3000,
    }
}