import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import BackButton from '@/components/BackButton'

const app = createApp(App)

app.component('back-button', BackButton)
// app.component('Player', PlayerVue)

app
  .use(store)
  .use(router)
  .mount('#app')