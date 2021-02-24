export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { mode: "client", src: "~/plugins/vue-burger-menu" },
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
      // Nom du font que vous souhaitez utiliser
      Poppins: true
    },
    // Optionel, mais FORTEMENT conseillé pour des raisons de performance
    display: "swap"
  },
  optimizedImages: {
    optimizeImages: true
  },

  ngrok: {
    authtoken: process.env.NGROK_TOKEN,
    // Optionnel, seulement si vous souhaitez limiter l'accès avec un utilisateur / mot de passe
    // auth: process.env.NGROK_AUTH
  },
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxt/http"],
  router: {
    middleware: ["mobile"]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // vendor: ['vue-burger-menu'],
  },

  loading: {
    color: "orange",
    height: "8px"
  },
};
