import Vue from 'vue'

export default {

    URL_MATCHMAKING: '/matchmaking',

    matchmaking(filters) {
        return new Promise(
            (resolve, reject) => {
                Vue.http.get(this.URL_MATCHMAKING, filters)
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
