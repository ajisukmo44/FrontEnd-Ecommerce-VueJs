import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import CaraPemesanan from '../views/CaraPemesanan.vue'
import Referensi from '../views/Referensi.vue'
import Size from '../views/Size.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Success from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    props: true,
    name: 'product',
    component: Product
  },
  {
    path: '/carapemesanan',
    props: true,
    name: 'carapemesanan',
    component: CaraPemesanan
  },
  {
    path: '/referensi',
    props: true,
    name: 'referensi',
    component: Referensi
  },
  {
    path: '/size',
    props: true,
    name: 'size',
    component: Size
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCart
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  }
]

const router = new VueRouter({
  routes
})

export default router
