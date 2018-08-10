<template>
    <div class="box">

        <div class="box-header">
            <h3>Create Match</h3>
        </div>

        <form @submit="create" class="box-body">

            <v-layout>

                <div style="width: 50%;" md6>
                    <vue-date-picker></vue-date-picker>
                    <vue-time-picker></vue-time-picker>
                </div>

                <div style="width: 50%;" md6>
                    <div class="form-group">
                        <server-select v-model="match.server" :data-multiple="false"></server-select>
                    </div>

                    <div class="form-group">
                        <entry-fee-select v-model="match.entry" :data-multiple="false"></entry-fee-select>
                    </div>
                </div>

            </v-layout>

            <button class="btn btn-primary" :disabled="!valid">CREATE</button>

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
                name: null,
                test: null,
                focus: null,
                menu2: false,
                match: {
                    server: null,
                    entry: null,
                    gameMode: null,
                    date: null,
                    time: null,
                },
            }
        },

        computed: {
            valid() {
                return this.match.server && this.match.entry && this.match.gameMode && this.match.when
            }
        },

        methods: {
            create(event) {
                event.preventDefault()

                if (!this.valid)
                    return

                const data = {
                    serverId: this.match.server.id,
                    entry: this.match.entry,
                    gameModeId: this.match.gameMode.id,
                    when: this.match.when,
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
    }
</style>
