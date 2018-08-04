export const state = {

    user: null,

    balance: null,

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

    // TODO use getter here to split next and history
    matches: null,

    entries: null,

    gameModes: null,

    servers: null,

}
