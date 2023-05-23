// import './assets/main.css'
import './assets/styles.scss';
import '@morioh/v-lightbox/dist/lightbox.css';



import { createApp } from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import router from './router' // <---
import VueGallery from 'vue-gallery'

createApp(App).component('VGallery', VueGallery)

createApp(App).use(VueScrollTo)

createApp(App).use(router).mount('#app')