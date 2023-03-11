const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: config => {
   
  },
  chainWebpack: config => {
    config.externals({
      // 'element-ui': 'ELEMENT',
    })
  }
})
