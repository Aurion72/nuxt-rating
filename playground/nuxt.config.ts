export default defineNuxtConfig({
  app: {
    head: {
      script: [{ src: 'https://cdn.tailwindcss.com' }]
    }
  },
  modules: ['../src/module'],
  devtools: { enabled: true }
})
