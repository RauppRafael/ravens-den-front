<template>
    <div class="sidebar">
        <ul>
            <li>
                <h5>Sort By</h5>
                <vue-multiselect :options="configs.sortBy.options"
                                 :allow-empty="false"
                                 :value="filters.sortBy"
                                 @input="(val) => commit('sortBy', val, true)"></vue-multiselect>
            </li>

            <li>
                <h5>Servers</h5>
                <server-select :value="filters.servers"
                               @input="(val) => commit('servers', val, true)"></server-select>
            </li>

            <li>
                <h5>Date</h5>
                <vue-date-range i18n="EN"
                                format="MMM/DD/YY"
                                :captions="configs.dateRange.captions"
                                @selected="setDateRange"></vue-date-range>
            </li>

            <li>
                <h5>Entry fee</h5>
                <entry-fee-select :value="filters.entries"
                                  @input="(val) => commit('entries', val, true)"></entry-fee-select>
            </li>

            <li>
                <h5>Mode</h5>
                <game-mode-select :value="filters.gameModes"
                                  @input="(val) => commit('gameModes', val, true)"></game-mode-select>
            </li>

            <li>
                <h5>Signed Players</h5>
                <vue-multiselect :options="configs.players.options"
                                 :value="filters.players"
                                 @input="(val) => commit('players', val, true)"></vue-multiselect>
            </li>
        </ul>
    </div>
</template>

<script>
    import VueMultiselect from 'vue-multiselect'
    import VueDateRange from 'vue-rangedate-picker'
    import ServerSelect from '@components/selects/Server'
    import EntryFeeSelect from '@components/selects/EntryFee'
    import GameModeSelect from '@components/selects/GameMode'

    export default {
        components: {
            VueMultiselect,
            VueDateRange,
            ServerSelect,
            EntryFeeSelect,
            GameModeSelect,
        },

        data() {
            return {
                configs: {
                    sortBy: {
                        options: [
                            'DATE',
                            'BUY-IN',
                            'PRIZE',
                        ],
                    },

                    dateRange: {
                        captions: {
                            'title': null,
                            'ok_button': 'Apply'
                        },
                        presetRanges: {}
                    },

                    players: {
                        options: [
                            '25+',
                            '50+',
                            '75+',
                            '90+',
                        ]
                    }
                },
            }
        },

        computed: {
            filters() {
                return this.$store.state.matchmaking.filters
            }
        },

        methods: {
            commit(key, value, load) {
                if (value.length === 0)
                    value = null

                this.$store.commit('SET_MATCHMAKING_FILTER', {key, value})

                if (load)
                    this.load()
            },

            setDateRange(range) {
                this.commit('dateRangeStart', range.start, false)
                this.commit('dateRangeEnd', range.end, false)
                this.load()
            },

            load() {
                this.$emit('load')
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "~@variables";
    @import "~@scss-mixins";

    .sidebar {
        li {
            margin-bottom: 2rem;

            > *:first-child {
                @include text-shadow;
                color: $white;
                margin-bottom: .5rem;
            }
        }
    }
</style>
