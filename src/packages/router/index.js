import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Matchmaking from '@views/matchmaking/Matchmaking'

const router = new VueRouter({

        mode: 'history',

        routes: [
            {path: '/matchmaking', component: Matchmaking},
            {path: '*', redirect: '/matchmaking'},
        ]

    }
)

export default router
