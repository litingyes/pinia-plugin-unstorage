import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createPiniaUnstorage } from '../../../src'
import App from './App.vue'
import './style.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(createPiniaUnstorage())
app.use(pinia)

app.mount('#app')
