import Vue from 'vue'
import VueRouter from 'vue-router'

import Matchmaking from '@views/matchmaking/Matchmaking'
import Matches from '@views/matches/Matches'
import Help from '@views/help/Help'

// Profile
import ProfileIndex from '@views/profile'
import Profile from '@views/profile/Profile'
import Deposit from '@views/profile/Deposit'
import Withdraw from '@views/profile/Withdraw'
import Settings from '@views/profile/Settings'

Vue.use(VueRouter)

const router = new VueRouter({

        mode: 'history',

        linkActiveClass: 'active',

        routes: [
            {
                path: '/matchmaking',
                component: Matchmaking,
                name: 'matchmaking'
            },
            {
                path: '/help',
                component: Help,
                name: 'help'
            },
            {
                path: '/matches',
                component: Matches,
            },
            {
                path: '/matches/history',
                component: Matches,
            },
            {
                path: '/profile',
                component: ProfileIndex,
                children: [
                    {
                        path: '/',
                        component: Profile,
                    },
                    {
                        path: 'withdraw',
                        component: Withdraw,
                    },
                    {
                        path: 'deposit',
                        component: Deposit,
                    },
                    {
                        path: 'settings',
                        component: Settings,
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
