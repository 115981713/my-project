import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import My from '@/components/My'
import I from '@/components/i'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },    
    {
      path: '/i',
      name: 'I',
      component: I
    },
  ]
})
