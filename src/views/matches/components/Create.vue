<template>
    <div class="box">

        <div class="box-header">
            <h3>Create Match</h3>
        </div>

        <form @submit="create" class="box-body">

            <div class="flex">

                <div class="half">
                    <div class="form-group">
                        <label>Game Mode</label>
                        <game-mode-select v-model="match.gameMode" :data-multiple="false"></game-mode-select>
                    </div>

                    <div class="form-group">
                        <label>When</label>
                        <vue-date-picker v-model="match.when"></vue-date-picker>
                    </div>
                </div>

                <div class="half">
                    <div class="form-group">
                        <label>Server</label>
                        <server-select v-model="match.server" :data-multiple="false"></server-select>
                    </div>

                    <div class="form-group">
                        <label>Entry</label>
                        <entry-fee-select v-model="match.entry" :data-multiple="false"></entry-fee-select>
                    </div>
                </div>

            </div>

            <button class="btn btn-primary" :disabled="!valid">CREATE</button>

        </form>

    </div>
</template>

<script>
    import ServerSelect from '@components/selects/Server'
    import EntryFeeSelect from '@components/selects/EntryFee'
    import GameModeSelect from '@components/selects/GameMode'
    import VueDatePicker from '@components/DatePicker'
    import Form from '@mixins/form'

    export default {
        components: {
            ServerSelect,
            EntryFeeSelect,
            GameModeSelect,
            VueDatePicker
        },

        data() {
            return {
                name: null,
                test: null,
                match: {
                    server: null,
                    entry: null,
                    gameMode: null,
                    when: null,
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
