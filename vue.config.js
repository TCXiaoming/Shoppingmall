module.exports = {
    publicPath: '/',
    outputDir: 'dist', // 打包的目录
    lintOnSave: true, // 在保存时校验格式
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    devServer: {
        open: false, // 启动服务后是否打开浏览器
        host: '0.0.0.0',
        port: 8080, // 服务端口
        https: false,
        hotOnly: false,
        proxy: {
        "/api": {
            target: "http://192.168.31.112:3030/",
            pathRewrite: {"^/api" : "/api"} //后面可以使重写的新路径，一般不做更改
            }
        }, // 设置代理
        before: app => { }
    },
    configureWebpack: config => {
        
        
    },
    
}