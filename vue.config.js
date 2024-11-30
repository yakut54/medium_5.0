const { defineConfig } = require('@vue/cli-service')
const pageName = 'medium-spa-5.1.10'

const outputDir = pageName
const publicPath = process.env.NODE_ENV === 'production'
  ? `/recieve/${pageName}`
  : '/'

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath,
  outputDir,
  devServer: {
    host: 'localhost'
  }
})
