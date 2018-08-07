import Vue from 'vue'
import axios from 'axios'
import env from '@env'

export default {

    install(Vue, options) {

        // Add request interceptor
        axios.interceptors.request.use(
            (request) => {
                request.url = env.API_URL + request.url
                return request;
            },
            (error) => {
                return Promise.reject(error);
            }
        )

        // Add response interceptor
        axios.interceptors.response.use(
            (response) => {
                return response.data
            },
            (error) => {
                // TODO add error to state
                return Promise.reject(error)
            }
        )

        Vue.prototype.$http = Vue.http = axios
        Vue.prototype.$axios = Vue.axios = axios
    },

}
