import Vue from 'vue'
import store from '@packages/store'

export default {

    login(credentials) {
        return new Promise((resolve, reject) => {
            Vue.api.users
                .login(credentials)
                .then((data) => {
                    Vue.auth.token(data.token)
                    resolve(data)
                })
        })
    },

    logout() {
        localStorage.removeItem('token')
    },

}

