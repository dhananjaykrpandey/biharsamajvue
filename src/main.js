// import './assets/main.css'
import './assets/styles.scss';

import { createApp } from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import router from './router' // <---

createApp(App).use(VueScrollTo)

createApp(App).use(router).mount('#app')