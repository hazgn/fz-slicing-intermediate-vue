import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import store from './vuex/store'
import './style.css'

createApp(App).use(routes).use(store).mount('#app')
