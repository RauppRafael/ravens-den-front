import Vue from 'vue'

import entries from './entries'
import gameModes from './gameModes'
import matches from './matches'
import servers from './servers'
import users from './users'

export default {

    install(Vue, options) {
        Vue.prototype.$api = Vue.api = this
    },

    entries,
    gameModes,
    matches,
    servers,
    users,

}
