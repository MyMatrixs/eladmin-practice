const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
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
})
