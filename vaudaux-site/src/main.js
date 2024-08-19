import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './assets/output.css'

// Import GSAP and ScrollSmoother
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register the plugin
gsap.registerPlugin(ScrollSmoother);


const app = createApp(App);

// Initialize ScrollSmoother after the app is mounted
app.mixin({
  mounted() {
    if (!this.$root.$scrollSmoother) {
      this.$root.$scrollSmoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5, // Adjust the smoothness
        effects: true, // Enable additional effects like parallax
      });
    }
  }
});

app.use(router);
app.mount('#app');
