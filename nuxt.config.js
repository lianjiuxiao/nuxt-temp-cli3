const pkg = require('./package')
const domains = {
  production: (() => {
    // return  'http://192.168.4.52:9127',
    return 'http://hb.chelenet.com'
  })(),
  test: (() => {
    return 'http://192.168.4.52:9127' // 北京52服务器地址
  })(),
  local: (() => {
    return 'http://192.168.4.52:9127' // 北京52服务器地址
  })(),
  mock: 'https://www.easy-mock.com/mock/5bf50d687392ed1f6bff6f1b/mock-vue'// easyMock 网站提供的模拟地址,
}
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~plugins/init', ssr: true},
    {src: '~plugins/iview', ssr: true}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    //     // Doc: https://github.com/nuxt-community/axios-module#sage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  proxy: {
    '/webUser': {
      target: domains.production,  //目标接口域名
      changeOrigin: true,  //是否跨域
    },
    '/mock': {
      target: domains.mock,  //目标接口域名
      changeOrigin: true,  //是否跨域
      secure: false,
      pathRewrite: {
        '^/mock': ''
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          name: 'img/[name].[hash].[ext]'
        }
      }
    ],
    /*
    ** You can extend webpack config here
    */
    vendor: ['axios'],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
