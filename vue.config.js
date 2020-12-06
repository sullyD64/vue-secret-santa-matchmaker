module.exports = {
  pluginOptions: {
    lintStyleOnBuild: false,
    stylelint: {}
  },
  publicPath: process.env.NODE_ENV === "production" ? "/vue-secret-santa-matchmaker/" : "/"
}
