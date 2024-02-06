import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Detalhes from '../pages/BarChart.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/detalhes', component: Detalhes  },
  ]

  const router = createRouter({
     history: createWebHistory(),
    routes,  
  })

  export default router 