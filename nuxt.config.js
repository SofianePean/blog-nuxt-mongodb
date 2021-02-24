export default {
  head: {
    title: "Feel Good",
    htmlAttrs: {
      lang: "fr"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: [],
  plugins: [
    { mode: "client", src: "~/plugins/vue-burger-menu" }
    // { src: "~/plugins/vuex-persist", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/google-fonts",
    "@aceforth/nuxt-optimized-images",
    "@nuxtjs/ngrok",
    "@nuxtjs/fontawesome"
  ],

  googleFonts: {
    families: {
      Poppins: true
    },
    display: "swap"
  },
  optimizedImages: {
    optimizeImages: true
  },

  ngrok: {
    authtoken: process.env.NGROK_TOKEN
  },
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  modules: ["@nuxtjs/axios", "@nuxt/http"],
  router: {
    middleware: ["mobile"]
  },

  // build: {
  //   src: "nuxt.config.js",
  //   use: "@nuxtjs/vercel-builder",
  //   config: {}
  // },

  loading: {
    color: "orange",
    height: "8px"
  }
};
