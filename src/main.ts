import { createApp } from 'vue'

import App from './App.vue'
import { useAllPlugins } from './plugins'

const app = createApp(App)

import './style/app.scss'
useAllPlugins(app)
app.mount('#app')
