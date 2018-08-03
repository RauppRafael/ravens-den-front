import Vue from 'vue'

export default {

    install(Vue, options) {

        // Add a request interceptor
        Vue.http.interceptors.request.use(
            (request) => {
                // TODO set loading animation
                // NProgress.start()

                if (this.token() && !request.headers.Authorization)
                    this.setAuthHeader(request)

                return request;
            },
            (error) => {
            }
        );

        Vue.prototype.$auth = Vue.auth = this
    },

    token(token) {
        if (!token)
            return localStorage.getItem('token')

        localStorage.setItem('token', token)

        return this
    },

    setAuthHeader(request) {
        request.headers.Authorization = 'Bearer ' + this.token()

        // TODO check if it is needed to pass auth as query param
        // if (!request.params)
        //     request.params = {}
        // request.params.token = this._getToken()
    },
}
