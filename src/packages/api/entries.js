import Vue from 'vue'

export default {

    URL_ENTRIES: '/entries',

    all() {
        return new Promise(
            (resolve, reject) => {
                Vue.http.get(this.URL_ENTRIES)
                    .then(res => resolve(res))
                    .catch(error => reject(error))
            }
        )
    },
}
