
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/' : '/',
    productionSourceMap: process.env.NODE_ENV === 'production' ?
        false : true,
        devServer: {
            open: true, // 自动启动浏览器
            host: '0.0.0.0', // localhost
            port: 8080, // 端口号
            https: false,
            hotOnly: true, // 热更新
          },
}