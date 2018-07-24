import Vue from 'vue'
import App from './App.vue'

import store from './packages/store'
import router from './packages/router'

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
