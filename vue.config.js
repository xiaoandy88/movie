module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.h5yjy.com',
        changeOrigin: true
      }
    }
  }
}
