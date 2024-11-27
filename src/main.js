import { createApp } from 'vue'
import App from './App.vue'
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
import router from '@/router/index.js'
import './style/base.scss'


const app = createApp(App)
app.use(NutUI);
app.use(router);
app.mount('#app');
