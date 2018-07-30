import Vue from 'vue'
import App from './App.vue'

import store from './packages/store'
import router from './packages/router'
import Mixins from './packages/mixins'

import VTooltip from 'v-tooltip'

Vue.use(Mixins)
Vue.use(VTooltip)

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
