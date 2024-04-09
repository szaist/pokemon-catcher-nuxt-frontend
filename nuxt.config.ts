// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 4000,
  },
  runtimeConfig: {
      public: {
        API_URL: process.env.API_URL,
        POKEMON_API_URL: process.env.POKEMON_API_URL,
      },
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@pinia/nuxt'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  imports: {
    dirs: ["components/ui", "composables/**"]
  }
})
