<template>
    <div class="filters">
        <ul>
            <li>
                <h4>Sort By</h4>
                <vue-multiselect :options="configs.sortBy.options"
                                 :allow-empty="false"
                                 v-model="filters.sortBy"></vue-multiselect>
            </li>

            <li>
                <h4>Servers</h4>
                <vue-multiselect :options="configs.servers.options"
                                 :multiple="true"
                                 :custom-label="configs.servers.label"
                                 track-by="short"
                                 v-model="filters.servers"></vue-multiselect>
            </li>

            <li>
                <h4>Date</h4>
                <vue-date-range i18n="EN"
                                format="MMM/DD/YY"
                                :captions="configs.dateRange.captions"
                                @selected="dateSelected"></vue-date-range>
            </li>

            <li>
                <h4>Buy In</h4>
                <vue-multiselect :options="configs.buyIn.options"
                                 :multiple="true"
                                 v-model="filters.buyIn"
                                 @input="log"></vue-multiselect>
            </li>

            <li>
                <h4>Registered Players</h4>
                <vue-multiselect :options="configs.players.options"
                                 v-model="filters.players"></vue-multiselect>
            </li>
        </ul>
    </div>
</template>

<script>
  import VueMultiselect from 'vue-multiselect'
  import VueDateRange from 'vue-rangedate-picker'

  import 'vue-multiselect/dist/vue-multiselect.min.css'

  export default {
        components: {
            VueMultiselect,
            VueDateRange,
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

                    servers: {
                        options: [
                            {short: 'BR', name: 'Brazil'},
                            {short: 'US-W', name: 'United States - West'},
                            {short: 'US-E', name: 'United States - East'},
                        ],

                        label: (option) => {
                            return `${option.short} - ${option.name}`
                        }
                    },

                    dateRange: {
                        captions: {
                            'title': null,
                            'ok_button': 'Apply'
                        },
                        presetRanges: {}
                    },

                    buyIn: {
                        options: [
                            '$ 0.01',
                            '$ 0.05',
                            '$ 0.10',
                            '$ 0.50',
                            '$ 1',
                        ]
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
                }
            }
        },

        methods: {
            dateSelected(event) {
                console.log(event)
            },

            log(event) {
                console.log(event)
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "~@variables";
    @import "~@animations";

    .filters {
        background-color: $light-blue;
        width: 35rem;
        height: $sidebar-height;
        padding: 2rem 2.5rem;
        animation: sidebar-slide-in .6s ease-out;
        box-shadow: $shadow;

        li {
            margin-bottom: 2rem;
            color: $white;

            h4 {
                text-shadow: 1px 1px 1px $darker-grey;
            }
        }
    }
</style>
