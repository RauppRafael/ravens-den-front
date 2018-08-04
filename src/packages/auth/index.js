import Vue from 'vue'
import store from '@packages/store'

export default {

    install(Vue, options) {

        // Add a request interceptor
        Vue.http.interceptors.request.use(
            (request) => {
                if (this.token() && !request.headers.Authorization)
                    this.setAuthHeader(request)

                return request;
            },
            (error) => {
            }
        );

        Vue.prototype.$auth = Vue.auth = this
    },

    token(token) {
        if (!token)
            return localStorage.getItem('token')

        localStorage.setItem('token', token)

        return this
    },

    login(credentials) {
        if (this.token())
            this.loadUserData()

        if (!credentials)
            return

        Vue.loader.users.login(credentials).then(
            () => {
                this.loadUserData()
            }
        )
    },

    loadUserData() {
        Vue.loader.users.user()
        Vue.loader.users.balance()

        // TODO load matchmaking
        // TODO load matches
        // TODO load setting
        // TODO load profile
    },

    logout() {
        localStorage.removeItem('token')
        store.commit('LOGOUT')
    },

    setAuthHeader(request) {
        request.headers.Authorization = 'Bearer ' + this.token()
    },
}
