var bg = '#bbf3f4';
var theme = '#660080';
var name = 'Fish Percolator';
var description = 'Helping startups get started - software development house in Leeds, UK';
var lang = 'en-GB';

module.exports = {
  /*
  ** Manifest
  */
  manifest: {
    name: name,
    short_name: name,
    lang: lang,
    background_color: bg,
    theme_color: theme,
    description: description,
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: lang
    },
    title: name,
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Override metadata from the meta module
  */
  meta: {
    description: description
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: theme },
  /*
  ** Nuxt modules & plugins
  */
  modules: [
    '@nuxtjs/pwa'
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
