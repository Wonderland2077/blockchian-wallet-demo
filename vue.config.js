const { defineConfig } = require('@vue/cli-service')

const webpack = require('webpack');

const NodePolyfillWebpackPlugin = require('node-polyfill-webpack-plugin')
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new NodePolyfillWebpackPlugin(),
      ComponentsPlugin( { resolvers: [ VantResolver() ]} ),
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: [ 'buffer', 'Buffer' ]
      })
    ],
    devtool: 'source-map'
  }
})
