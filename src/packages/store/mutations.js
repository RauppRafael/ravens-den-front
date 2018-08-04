export const mutations = {
    SET_MATCHMAKING_DATA: (state, payload) => {
        state.matchmaking.matches = payload
    },

    SET_MATCHMAKING_FILTER: (state, payload) => {
        state.matchmaking.filters[payload.key] = payload.value
    },

    SET_ENTRIES: (state, payload) => {
        state.entries = payload
    },

    SET_GAME_MODES: (state, payload) => {
        state.gameModes = payload
    },

    SET_SERVERS: (state, payload) => {
        state.servers = payload
    },

    SET_USER: (state, payload) => {
        state.user = payload
    },

    LOGOUT: (state, payload) => {
        state.user = null
    },

    SET_BALANCE: (state, payload) => {
        state.balance = payload
    },

}
