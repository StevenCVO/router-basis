import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Over from './views/Over.vue'
import Contact from './views/Contact.vue'
import Producten from './views/Producten.vue'
import ProductDetails from './views/ProductDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/over',
      name: 'over',
      component: Over
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/producten',
      name: 'producten',
      component: Producten
    },
    {
      path: '/producten/:productId',
      name: 'product-details',
      component: ProductDetails,
      // props: true zorgt ervoor dat de dynamische argumenten
      // als prop worden doorgegeven aan de component
      props: true 
    }
  ]
})
