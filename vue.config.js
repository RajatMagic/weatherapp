module.exports = {
  devServer: { https: true },
  pwa: {
    name: 'Bellxcel',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      importScripts: ['idb.js'],
      // exclude: /\.js$/
    }
  },
  publicPath: ""
};




