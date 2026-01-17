module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/sass/globals.scss";
        `
      }
    }
  },

  assetsDir: 'assets',

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true
  }
}