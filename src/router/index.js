import Vue from 'vue'
import Router from 'vue-router'
import SearchResult from '@/components/View/SearchResult'
import ProductDetail from '@/components/View/ProductDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/product/:productID',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
