import Vue from 'vue'
import store from '@packages/store'

export default {

    user() {
        return new Promise(
            (resolve, reject) => {
                Vue.api.users.user().then(
                    (data) => {
                        store.commit('SET_USER', data)
                        resolve(data)
                    }
                ).catch(
                    (error) => {
                        Vue.auth.logout()
                        reject(error)
                    }
                )
            }
        )
    },

    login(credentials) {
        return new Promise(
            (resolve, reject) => {
                Vue.api.users.login(credentials).then(
                    (data) => {
                        Vue.auth.token(data.token)
                        this.user()
                        resolve(data)
                    }
                )
            }
        )
    },

    balance() {
        return new Promise(
            (resolve, reject) => {
                Vue.api.users.balance().then(
                    (data) => {
                        store.commit('SET_BALANCE', data)
                        resolve(data)
                    }
                ).catch(
                    (error) => {
                        reject(error)
                    }
                )
            }
        )
    }

}

