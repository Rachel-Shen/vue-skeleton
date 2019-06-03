const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = {
  configureWebpack: (config)=>{
    // vue骨架屏插件配置
    config.plugins.push(new SkeletonWebpackPlugin({
      webpackConfig: {
        entry: {
          app: path.join(__dirname, './src/entry-skeleton.js'),
        },
      },
      minimize: true,
      quiet: true,
    }))
  },

  css: {
    extract: true, // css拆分ExtractTextPlugin插件，默认true - 骨架屏需要为true
  },
}
