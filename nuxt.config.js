export default {
  mode: "universal",
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "preconnect", href: "https://app.snipcart.com" },
      { rel: "preconnect", href: "https://cdn.snipcart.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com/css?family=Muli:400,700&display=swap" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Muli:400,700&display=swap",
      },
      { rel: "preconnect", href: "https://app.snipcart.com" },
      { rel: "preconnect", href: "https://cdn.snipcart.com" },
      {
        rel: "stylesheet",
        href: "https://cdn.snipcart.com/themes/v3.0/default/snipcart.css",
        defer: true
      },
    ],
    script: [
      { 
        src: "https://cdn.snipcart.com/themes/v3.0/default/snipcart.js", 
        defer: true, 
      },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    "@nuxt/typescript-build",
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/sentry"
  ],
  /*
  ** Sentry configuration
  */
  sentry: {
    dsn:
      "https://d6352c3a17124246a0effb6282e65e3e@o108936.ingest.sentry.io/5269230",
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        "postcss-url": false,
        "postcss-nested": {},
        "postcss-responsive-type": {},
        "postcss-hexrgba": {},
      },
      preset: {
        autoprefixer: {
          overrideBrowserslist: [
            "defaults",
          ],
          grid: true,
        },
      },
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  },
};
