import Vue from 'vue'
import store from '@packages/store'

export default {

    all() {
        return new Promise(
            (resolve, reject) => {
                Vue.api.servers.all().then(
                    (data) => {
                        store.commit('SET_SERVERS', data)
                        resolve(data)
                    }
                )
            }
        )
    },

}

