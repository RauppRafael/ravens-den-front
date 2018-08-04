import Vue from 'vue'
import store from '@packages/store'

export default {

    all() {
        return new Promise(
            (resolve, reject) => {
                Vue.api.gameModes.all().then(
                    (data) => {
                        store.commit('SET_GAME_MODES', data)
                        resolve(data)
                    }
                )
            }
        )
    },

}

