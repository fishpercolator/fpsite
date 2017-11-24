var theme = '#660080';
var name = 'Fish Percolator';
var lang = 'en-GB';

module.exports = {
  /*
  ** Manifest
  */
  manifest: {
    name: name,
    short_name: 'Fish Perco',
    lang: lang,
    background_color: '#bbf3f4',
    theme_color: theme,
    description: 'Helping startups get started - software development house in Leeds, UK',
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: lang
    },
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: theme },
  /*
  ** Disable some of the tags put there by the meta module
  */
  meta: {
    description: undefined,
    ogTitle: undefined,
    ogDescription: undefined
  },
  /*
  ** Nuxt modules & plugins
  */
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {id: 'UA-66641490-1'}]
  ],
  plugins: [
    '~/plugins/globals.js'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },
  generate: {
    // Generate a route for each project
    routes: ['/404'].concat(require('./assets/projects.json').map((p) => `/project/${p.slug}`))
  }
}
