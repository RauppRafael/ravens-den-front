export const state = {

    user: null,

    matchmaking: {
        matches: null,

        filters: {
            sortBy: 'DATE',
            dateRangeStart: null,
            dateRangeEnd: null,
            entries: null,
            players: null,
            servers: null,
            gameModes: null,
        },
    },

    matches: {
        // TODO use getter instead
        upcoming: null,
        history: null,
    },

    entries: null,

    gameModes: null,

    servers: null,

}
