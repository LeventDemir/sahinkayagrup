export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sahinkaya-grup',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-mobile-web-app-title', content: 'Şahinkaya Grup' },
      { name: 'application-name', content: 'Şahinkaya Grup' },
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bulma',
    '@fortawesome/fontawesome-free/css/all.css',
    '~/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/@nuxtjs/toast
    '@nuxtjs/toast',
  ],

  serverMiddleware: [
    {
      path: 'api',
      handler: '~/server/index.js'
    }
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:3000/api',
  },

  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'success',
        message: message => message,
        options: {
          type: 'success',
          theme: 'outline',
          duration: 3000
        }
      },
      {
        name: 'error',
        message: message => message,
        options: {
          type: 'error',
          theme: 'outline',
          duration: 3000
        }
      },
    ]
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
