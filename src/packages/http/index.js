import Vue from 'vue'
import axios from 'axios'
import env from '@env'

export default {

    install (Vue, options) {

        // Add request interceptor
        axios.interceptors.request.use(
            // TODO set loading animation
            // NProgress.start()

            function (config) {
                config.url = env.API_URL + config.url
                return config;
            },
            function (error) {
                // Do something with request error
                return Promise.reject(error);
            }
        )

        // Add response interceptor
        axios.interceptors.response.use((response) => {

            // TODO finish animation
            // NProgress.done()

            return response.data

        }, (error) => {

            // TODO finish animation
            // NProgress.done()
            // TODO check for invalid token

            return Promise.reject(error)
        });

        Vue.prototype.$http = Vue.http = axios
        Vue.prototype.$axios = Vue.axios = axios
    },

}
