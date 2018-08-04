import Vue from 'vue'

export default {

    URL_GAME_MODES: '/gameModes',

    all() {
        return new Promise(
            (resolve, reject) => {
                Vue.http.get(this.URL_GAME_MODES)
                    .then(res => resolve(res))
                    .catch(error => reject(error))
            }
        )
    },
}
