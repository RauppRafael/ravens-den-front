import Vue from 'vue'
import App from './App.vue'
import store from './packages/store'
import router from './packages/router'

// API
import Http from './packages/http'
import Auth from './packages/auth'
import Api from './packages/api'
import Loader from './packages/loader'

//
import Mixins from './packages/mixins'
import VTooltip from 'v-tooltip'

Vue.use(Http)
Vue.use(Auth)
Vue.use(Api)
Vue.use(Loader)

Vue.use(Mixins)
Vue.use(VTooltip)

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
