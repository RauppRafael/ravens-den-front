import Vue from 'vue'
import VueRouter from 'vue-router'

import Matchmaking from '@views/matchmaking/Matchmaking'
import Help from '@views/help/Help'

// Matches
import Matches from '@views/matches/Matches'
import MatchesList from '@views/matches/components/List'
import CreateMatch from '@views/matches/components/Create'

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
                children: [
                    {
                        path: '/',
                        component: MatchesList,
                    },
                    {
                        path: 'create',
                        component: CreateMatch,
                    }
                ]
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
