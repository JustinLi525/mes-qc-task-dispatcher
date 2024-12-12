import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

// element plus
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

const app = createApp(App)

// // Register components globally
// app.component('ModelListSelect', ModelListSelect)
// app.component('ModelMultiSelect', ModelMultiSelect)

// Apply Vue Router
app.use(router)
app.use(ElementPlus)
// Mount the app
app.mount('#app')
