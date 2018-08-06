import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@packages/store'

// Tabs
import Home from '@views/home/Home'
import Matchmaking from '@views/matchmaking/Matchmaking'
import Help from '@views/help/Help'
import Login from '@views/auth/Login'
import Register from '@views/auth/Register'

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
                name: 'Home',
                path: '/',
                component: Home,
                meta: {requiresAuth: false}
            },
            {
                name: 'Login',
                path: '/login',
                component: Login,
                meta: {requiresAuth: false}
            },
            {
                name: 'Register',
                path: '/register',
                component: Register,
                meta: {requiresAuth: false}
            },
            {
                name: 'Matchmaking',
                path: '/matchmaking',
                component: Matchmaking,
                meta: {requiresAuth: true}
            },
            {
                name: 'Help',
                path: '/help',
                component: Help,
                meta: {requiresAuth: false},
            },
            {
                path: '/matches',
                component: Matches,
                children: [
                    {
                        name: 'Upcoming Matches',
                        path: '/',
                        component: MatchesList,
                    },
                    {
                        name: 'Match History',
                        path: 'history',
                        component: MatchesList,
                    },
                    {
                        name: 'Create Match',
                        path: 'create',
                        component: CreateMatch,
                    }
                ],
                meta: {requiresAuth: true},
            },
            {
                path: '/profile',
                component: User,
                children: [
                    {
                        name: 'Profile',
                        path: '/',
                        component: Profile,
                    },
                    {
                        name: 'Withdraw',
                        path: 'withdraw',
                        component: Withdraw,
                    },
                    {
                        name: 'Deposit',
                        path: 'deposit',
                        component: Deposit,
                    },
                    {
                        name: 'Settings',
                        path: 'settings',
                        component: Settings,
                    },
                ],
                meta: {requiresAuth: true},
            },
            {
                path: '*',
                redirect: '/matchmaking',
            },
        ]
    }
)

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user)
        next('/login')

    next()
})

export default router
