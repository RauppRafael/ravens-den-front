export const mutations = {
    SET_MATCHMAKING_DATA: (state, payload) => {
        state.matchmaking.matches = payload
    },

    SET_MATCHMAKING_FILTER: (state, payload) => {
        state.matchmaking.filters[payload.key] = payload.value
    },

    SET_USER: (state, payload) => {
        state.user = payload
    },

    LOGOUT: (state, payload) => {
        state.user = null
    },
}
