var theme = "#660080"
var name = "Fish Percolator"
var lang = "en-GB"
var canonical = "https://www.fishpercolator.co.uk"

// Generate routes for all the project pages in addition to the main site -
// we'll also generate routes for the excluded items below that don't go into
// the sitemap
var routes = require("./assets/projects.json").map(p => `/project/${p.slug}`)

// Pages to exclude from the sitemap - these are redirects (plus the 404 page)
var excluded = [
  "/404",
  "/about/ethos",
  "/about/rich-cv",
  "/project/mapsheet-working-title",
  "/project/gsoh",
  "/project/jelly",
  "/project/lif-backend-integration-for-mighty",
  "/services",
  "/services/software-from-scratch",
  "/services/software-consultancy",
  "/services/business-technology"
]

module.exports = {
  target: 'static',
  /*
   ** Manifest
   */
  manifest: {
    name: name,
    short_name: "Fish Perco",
    lang: lang,
    background_color: "#bbf3f4",
    theme_color: theme,
    description:
      "Helping startups get started - software development house in Leeds, UK"
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: lang
    },
    link: [{ rel: "shortcut icon", href: "/favicon.ico" }],
    meta: [
      { name: "og:url", property: "og:url", content: canonical },
      {
        name: "og:image",
        property: "og:image",
        content: `${canonical}/fbimage.jpg`
      },
      {
        name: "og:image:alt",
        property: "og:image:alt",
        content: "A laptop displaying the Fish Percolator website"
      },
      { name: "og:locale", property: "og:locale", content: lang },
      { name: "og:site_name", property: "og:site_name", content: name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@fishpercolator" },
      { name: "twitter:image", content: `${canonical}/twimage.jpg` },
      {
        name: "twitter:image:alt",
        content: "A laptop displaying the Fish Percolator website"
      },
      { name: "fb:app_id", property: "fb:app_id", content: "129961957696166" }
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
   ** Nuxt modules & pluginsmeta;
   */
  modules: [
    ["@nuxtjs/pwa", { clientsClaim: false }],
    ["@nuxtjs/google-gtag", { id: "G-H72BHTMVXM" }],
    "@nuxtjs/sitemap"
  ],
  plugins: [
    "~/plugins/globals.js",
    "~/plugins/jsonld.js"
  ],
  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: routes.concat(excluded)
  },
  sitemap: {
    hostname: canonical,
    routes: routes,
    exclude: excluded
  }
}
