import Vue from 'vue'
import Router from 'vue-router'
import SearchResult from '@/components/View/SearchResult'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SearchResult',
      component: SearchResult
    }
  ]
})
