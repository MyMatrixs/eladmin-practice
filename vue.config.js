const path = require('path')
const { defineConfig } = require('@vue/cli-service')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const port = 88
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port:port,
    open:true,
    proxy:{
      '/api':{
        target:'http://localhost:9000/',
        changeOrigin:true,
        pathRewrite:{
          '^/api':"api"
        }
      },
    }
  },
  configureWebpack() {
    return {
      resolve: {
        fallback: {
          "url": false,
          "zlib": false,
          "https": false,
          "http": false
        },
      },
    }
  },
  chainWebpack(config){
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    .end()
  }
})
