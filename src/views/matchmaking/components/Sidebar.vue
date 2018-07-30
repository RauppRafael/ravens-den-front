<template>
    <div class="sidebar">
        <ul>
            <li>
                <h5>Sort By</h5>
                <vue-multiselect :options="configs.sortBy.options"
                                 :allow-empty="false"
                                 v-model="filters.sortBy"></vue-multiselect>
            </li>

            <li>
                <h5>Servers</h5>
                <server-select v-model="filters.servers"></server-select>
            </li>

            <li>
                <h5>Date</h5>
                <vue-date-range i18n="EN"
                                format="MMM/DD/YY"
                                :captions="configs.dateRange.captions"
                                @selected="log"></vue-date-range>
            </li>

            <li>
                <h5>Entry fee</h5>
                <entry-fee-select v-model="filters.buyIn"></entry-fee-select>
            </li>

            <li>
                <h5>Mode</h5>
                <game-mode-select v-model="filters.gameMode"></game-mode-select>
            </li>

            <li>
                <h5>Signed Players</h5>
                <vue-multiselect :options="configs.players.options"
                                 v-model="filters.players"></vue-multiselect>
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

                filters: {
                    sortBy: 'DATE',
                    dateRange: {
                        start: null,
                        end:
                            null
                    },
                    buyIn: null,
                    players: null,
                    servers: null,
                    gameMode: null,
                }
            }
        },

        methods: {

            log(event) {
                console.log(event)
            }
        }

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
