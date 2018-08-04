import Vue from 'vue'
import store from '@packages/store'
import _ from 'lodash'

export default {

    matchmaking(filters) {
        filters = _.transform(filters,
            (result, value, key) => {
                if (!value)
                    return

                switch (key) {
                    case 'gameModes':
                        result['gameModeIds'] = _.map(value, 'id')
                        break
                    case 'servers':
                        result['serverIds'] = _.map(value, 'id')
                        break
                    default:
                        result[key] = value
                        break
                }
            }
        )

        return new Promise(
            (resolve, reject) => {
                Vue.api.matches.matchmaking(filters).then(
                    (matches) => {
                        store.commit('SET_MATCHMAKING_DATA', matches)
                        resolve(matches)
                    }
                )
            }
        )
    },

    all() {
        return new Promise(
            (resolve, reject) => {
                Vue.api.matches.all().then(
                    (matches) => {
                        store.commit('SET_MATCHES', matches)
                        resolve(matches)
                    }
                )
            }
        )
    },

}
