const { name } = require('./package');

module.exports = {
    lintOnSave: false,
    css: {
        extract: true,
    },
    devServer: {
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        port: 7100,
        host: '0.0.0.0',
        compress: true,
    },
    chainWebpack: config => {
        config.plugins.delete('prefetch')
    },
    configureWebpack: {
        output: {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
        },
    },
}