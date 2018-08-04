import Vue from 'vue'
import VueRouter from 'vue-router'

// Tabs
import Home from '@views/home/Home'
import Matchmaking from '@views/matchmaking/Matchmaking'
import Help from '@views/help/Help'
import LogIn from '@views/login/Login'

// Matches
import Matches from '@views/matches/Matches'
import MatchesList from '@views/matches/components/List'
import CreateMatch from '@views/matches/components/Create'

// User
import User from '@views/user'
import Profile from '@views/user/Profile'
import Deposit from '@views/user/Deposit'
import Withdraw from '@views/user/Withdraw'
import Settings from '@views/user/Settings'

Vue.use(VueRouter)

const router = new VueRouter({

        mode: 'history',

        linkActiveClass: 'active',

        routes: [
            {
                path: '/',
                component: Home,
                name: 'home'
            },
            {
                path: '/login',
                component: LogIn,
                name: 'login'
            },
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
                component: User,
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
