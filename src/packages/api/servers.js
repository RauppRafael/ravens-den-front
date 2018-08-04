import Vue from 'vue'

export default {

    URL_SERVERS: '/servers',

    all() {
        return new Promise(
            (resolve, reject) => {
                Vue.http.get(this.URL_SERVERS)
                    .then(res => resolve(res))
                    .catch(error => reject(error))
            }
        )
    },
}
