import Vue from 'vue'
import store from '@packages/store'

export default {

    matchmaking(filters) {
        return new Promise((resolve, reject) => {
            Vue.api.matches
                .matchmaking(filters)
                .then((tickets) => {
                    store.commit('SET_MATCHMAKING_DATA', tickets)
                    resolve(tickets)
                })
        })
    },

    // ASYNC / AWAIT
    //
    // async matchmaking(filters) {
    //     let data = await Vue.api.matches.matchmaking(filters)
    //     store.commit('SET_MATCHMAKING', data)
    //     return data
    // },

}
