// https://nuxt.com/docs/api/configuration/nuxt-config
const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

export default defineNuxtConfig({
  alias: {},

  app: {
    pageTransition: { name: "page", mode: "in-out" },
  },

  dayjs: {
    locales: ["en", "de"],
    plugins: ["relativeTime", "utc", "timezone", "localizedFormat"],
    defaultLocale: "de",
    defaultTimezone: "Europe/Berlin",
  },

  devServer: {
    port: 3333,
  },

  devtools: { enabled: true },

  i18n: {
    locales: ["en", "de"],
    strategy: "prefix_and_default",
    defaultLocale: "de",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
      alwaysRedirect: true,
    },
    vueI18n: "./i18n.config.ts",
  },

  imports: {
    dirs: ["composables/*/index.{ts,js,mjs,mts}", "store/*.{ts,js}"],
  },

  modules: [
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@pinia-plugin-persistedstate/nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "dayjs-nuxt",
  ],

  runtimeConfig: {
    cookie: {
      name: process.env.COOKIE_NAME || "cosx",
      secret: process.env.COOKIE_SECRET || "secret",
      expires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_DAY.toString(), 10), // 1 day
      rememberMeExpires: parseInt(
        process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(),
        10
      ), // 7 days
      renewUrl: "/authentication/renew",
    },

    public: {
      api: {
        auth: {
          loginWithPassword: "/api/auth/loginWithPasword",
          logout: "/api/auth/logout",
          signUp: "/api/auth/signUp",
        },
        user: {
          profile: "/api/user/profile",
        },
      },

      cookie: {
        name: process.env.COOKIE_NAME || "cosx",
      },
    },
  },

  sourcemap: {
    server: true,
    client: true,
  },

  ui: { icons: "all" },
});
