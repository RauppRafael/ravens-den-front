import Vue from 'vue'
import matches from './matches'
import users from './users'

export default {

    install (Vue, options) {
        Vue.prototype.$api = Vue.api = this
    },

    matches,
    users,
}
