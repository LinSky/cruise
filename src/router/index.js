import Vue from 'vue'
import Router from 'vue-router'
import agent from '@/pages/agent/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'agent',
      component: agent
    }
  ]
})
