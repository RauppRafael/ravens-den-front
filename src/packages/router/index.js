import Vue from 'vue'
import VueRouter from 'vue-router'
import Matchmaking from '@views/matchmaking/Matchmaking'
import Profile from '@views/profile/Profile'

Vue.use(VueRouter)

const router = new VueRouter({

        mode: 'history',

        linkActiveClass: 'active',

        routes: [
            {
                path: '/matchmaking',
                component: Matchmaking,
            },
            {
                path: '/profile',
                component: Profile,
                children: [
                    {
                        path: 'withdraw',
                        component: Profile,
                    },
                    {
                        path: 'deposit',
                        component: Profile,
                    },
                    {
                        path: 'settings',
                        component: Profile,
                    },
                ],
            },
            {
                path: '*',
                redirect: '/matchmaking',
            },
        ]
    }
)

export default router
