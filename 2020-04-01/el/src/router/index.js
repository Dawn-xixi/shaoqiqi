import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyFind from '../views/MyFind.vue'
import MyOrder from '../views/MyOrder.vue'
import MyInfo from '../views/MyInfo.vue'
import MyAddress from '../views/MyAddress.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/find',
    name: 'MyFind',
    component: MyFind
  },
  {
    path: '/order',
    name: 'MyOrder',
    component: MyOrder
  },
  {
    path: '/my',
    name: 'MyInfo',
    component: MyInfo
  },
  {
    path: '/address',
    name: 'MyAddress',
    component: MyAddress
  }
  
]

const router = new VueRouter({
  routes
})

export default router
