import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './assets/output.css'
import gsap from 'gsap';

createApp(App).use(router).use(router).mount('#app')
