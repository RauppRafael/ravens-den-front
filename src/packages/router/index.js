import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import Component from 'components/Component.vue'

const router = new VueRouter({

    mode: 'history',

    routes: [
      // {path: '/component', component: Component},
    ]

  }
)

export default router
