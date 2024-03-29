import { createApp } from 'vue'
import VueApexCharts from "vue3-apexcharts";
import App from './App.vue'
import router from './routes/routes'
 
import './style.css' 


createApp(App)
.use(router) 
.use(VueApexCharts) 
.mount('#app')
   