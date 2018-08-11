<template>
    <div class="box create-match">

        <div class="box-header">
            <h3>Create Match</h3>
        </div>

        <form @submit="create" class="box-body">

            <v-layout>

                <div class="half">
                    <div class="form-group">
                        <server-select v-model="server" :data-multiple="false"></server-select>
                    </div>

                    <div class="form-group">
                        <game-mode-select v-model="gameMode" :data-multiple="false"></game-mode-select>
                    </div>

                    <div class="form-group">
                        <entry-fee-select v-model="entry" :data-multiple="false"></entry-fee-select>
                    </div>
                </div>

                <div class="half">
                    <vue-date-picker v-model="date"></vue-date-picker>

                    <vue-time-picker v-model="time"></vue-time-picker>

                    <div class="btn-wrapper">
                        <v-btn type="submit" color="primary">CREATE</v-btn>
                    </div>
                </div>

            </v-layout>



        </form>

    </div>
</template>

<script>
    import ServerSelect from '@components/selects/Server'
    import EntryFeeSelect from '@components/selects/EntryFee'
    import GameModeSelect from '@components/selects/GameMode'
    import VueDatePicker from '@components/DatePicker'
    import VueTimePicker from '@components/TimePicker'
    import Form from '@mixins/form'

    export default {
        components: {
            ServerSelect,
            EntryFeeSelect,
            GameModeSelect,
            VueDatePicker,
            VueTimePicker,
        },

        data() {
            return {

                    server: null,
                    entry: null,
                    gameMode: null,
                    date: null,
                    time: null,

            }
        },

        computed: {
            valid() {
                return this.server &&
                    this.entry &&
                    this.gameMode &&
                    this.date &&
                    this.time
            }
        },

        methods: {
            create(event) {
                event.preventDefault()

                // if (!this.valid)
                //     return

                console.log(this.server)

                const data = {
                    serverId: this.server.id,
                    entry: this.entry,
                    gameModeId: this.gameMode.id,
                    // when: this.when,
                }

                this.$api.matches.create(data).then(
                    (match) => {
                        this.$auth.loadUserData()
                        this.$router.push('/matches#' + match.id)
                    }
                )
            },

            setFocus(field) {
                this.focus = field
            }
        },

        mixins: [Form]
    }
</script>

<style lang="scss" scoped>
    @import "~@variables";

    .half {
        width: 50%;

        &:first-child {
            padding-right: 1rem;
        }

        &:last-child {
            padding-left: 1rem;
        }

        .btn-wrapper {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            margin-top: 1.5rem;
        }
    }
</style>
