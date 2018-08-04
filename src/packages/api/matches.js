import Vue from 'vue'

export default {

    URL_MATCHES: '/matches',
    URL_JOIN_MATCH: '/matches/:matchId/join',
    URL_MATCHMAKING: '/matches/matchmaking',

    all() {
        return new Promise(
            (resolve, reject) => {
                Vue.http.get(this.URL_MATCHES)
                    .then(res => resolve(res))
                    .catch(error => reject(error))
            }
        )
    },

    matchmaking(filters) {
        return new Promise(
            (resolve, reject) => {
                Vue.http.get(this.URL_MATCHMAKING, {params: filters})
                    .then(res => resolve(res))
                    .catch(error => reject(error))
            }
        )
    },

    join(matchId) {
        return new Promise(
            (resolve, reject) => {
                Vue.http.get(this.URL_JOIN_MATCH.replace(':matchId', matchId))
                    .then(res => resolve(res))
                    .catch(error => reject(error))
            }
        )
    },

    create(data) {
        return new Promise(
            (resolve, reject) => {
                Vue.http.post(this.URL_MATCHES, data)
                    .then(res => resolve(res))
                    .catch(error => reject(error))
            }
        )
    },

    update(id, data) {
        //
    },

    delete(id) {
        //
    },
}
