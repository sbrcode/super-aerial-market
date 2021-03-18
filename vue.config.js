module.exports = {
  lintOnSave: true,
  devServer: {
    proxy: 'http://localhost:3000',
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
}