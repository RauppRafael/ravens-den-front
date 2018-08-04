import Vue from 'vue'
import store from '@packages/store'

export default {

    all() {
        return new Promise(
            (resolve, reject) => {
                Vue.api.entries.all().then(
                    (data) => {
                        store.commit('SET_ENTRIES', data)
                        resolve(data)
                    }
                )
            }
        )
    },

}

