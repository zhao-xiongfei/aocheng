import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import duobao from '@/components/duobao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: {
        name: 'index',
      }
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/duobao',
      name: 'duobao',
      component: duobao
    }
  ]
})
