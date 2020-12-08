module.exports = {
  runtimeCompiler: true,
  lintOnSave: false, //禁止ESlint 警告
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) =>
        Object.assign(options, {
          transformAssetUrls: {
            audio: 'src'
          }
        })
      );
  }
};
