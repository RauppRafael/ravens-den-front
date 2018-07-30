import Vue from 'vue'
import env from '/.env'

export default {

    install (Vue, options) {
        Vue.prototype.$loader = Vue.loader = this
    },

}
