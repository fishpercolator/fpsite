var theme = '#660080';
var name = 'Fish Percolator';
var lang = 'en-GB';

// Generate routes for all the project pages in addition to the main site -
// we'll also generate routes for the excluded items below that don't go into
// the sitemap
var routes = require('./assets/projects.json').map((p) => `/project/${p.slug}`)

// Pages to exclude from the sitemap - these are redirects (plus the 404 page)
var excluded = [
  '/404', '/about/ethos', '/about/rich-cv',
  '/project/mapsheet-working-title', '/project/gsoh', '/project/jelly',
  '/project/lif-backend-integration-for-mighty',
  '/services', '/services/software-from-scratch',
  '/services/software-consultancy', '/services/business-technology'
]

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
    ['@nuxtjs/google-analytics', {id: 'UA-66641490-1'}],
    '@nuxtjs/sitemap'
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
    routes: routes.concat(excluded),
  },
  sitemap: {
    generate: true,
    hostname: 'https://www.fishpercolator.co.uk',
    routes: routes,
    exclude: excluded
  }
}
