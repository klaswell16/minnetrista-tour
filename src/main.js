import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

createApp(App).use(router).mount('#app')

App.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
