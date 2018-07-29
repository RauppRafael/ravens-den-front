import Vue from 'vue'
import App from './App.vue'

import store from './packages/store'
import router from './packages/router'

import VTooltip from 'v-tooltip'
Vue.use(VTooltip)

// import VueMq from 'vue-mq'
//
// Vue.use(VueMq, {
//     breakpoints: {
//         sm: 450,
//         md: 1250,
//         lg: Infinity,
//     }
// })

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
