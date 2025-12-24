
import { createApp } from 'vue'
import App from '@/App.vue'
import '@styles/style.scss'
import { registerPlugins } from './utils/plugins'
import { vMaska } from "maska/vue"

// Create vue app
const app = createApp(App)


// Register plugins
registerPlugins(app)

app.directive("maska", vMaska)

// Mount vue app
app.mount('#app')
