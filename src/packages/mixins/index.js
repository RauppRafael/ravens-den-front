import Vue from 'vue'

export default {

    install (Vue, options) {
        Vue.prototype.$mixins = Vue.mixins = this
    },

    // filledLabel(field) {
    //     return this.focus === field || this[field]
    // },

}
