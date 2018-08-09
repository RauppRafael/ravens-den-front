import Vue from 'vue'

export default {

    URL_USERS: '/users',
    URL_LOGIN: '/users/login',
    URL_BALANCE: '/users/balance',

    user() {
        return new Promise(
            (resolve, reject) => {
                Vue.http.get(this.URL_USERS)
                    .then(res => resolve(res))
                    .catch(error => reject(error))
            }
        )
    },

    login(data) {
        return new Promise(
            (resolve, reject) => {
                Vue.http.post(this.URL_LOGIN, data)
                    .then(res => resolve(res))
                    .catch(error => reject(error))
            }
        )
    },

    create(data) {
        return new Promise(
            (resolve, reject) => {
                Vue.http.post(this.URL_USERS, data)
                    .then(res => resolve(res))
                    .catch(error => reject(error))
            }
        )
    },

    update(id, data) {
        return new Promise(
            (resolve, reject) => {
                Vue.http.put(this.URL_USERS + '/' + id, data)
                    .then(res => resolve(res))
                    .catch(error => reject(error))
            }
        )
    },

    balance() {
        return new Promise(
            (resolve, reject) => {
                Vue.http.get(this.URL_BALANCE)
                    .then(res => resolve(res))
                    .catch(error => reject(error))
            }
        )
    },

}
