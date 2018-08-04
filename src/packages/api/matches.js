import Vue from 'vue'

export default {

    URL_MATCHES: '/matches',
    URL_JOIN_MATCH: '/matches/:matchId/join',
    URL_MATCHMAKING: '/matchmaking',

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

    create(cid, data) {
        //
    },

    update(cid, id, data) {
        //
    },

    delete(cid, id) {
        //
    },

    // ASYNC / AWAIT
    //
    // async matchmaking(filters) {
    //     return await Vue.http.get(this.URL_MATCHMAKING, filters)
    // }
}
