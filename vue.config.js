const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: config => {

  },
  chainWebpack: config => {
    config.externals({
      // 'element-ui': 'ELEMENT',
    })
  },
  devServer: {
    port: 8090,
    proxy: {
      '/api': {
        target: 'https://sjfx.top:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/api': '/api' }
      }
    }
  }
})
