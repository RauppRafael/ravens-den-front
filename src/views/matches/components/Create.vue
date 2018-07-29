<template>
    <div class="box">

        <div class="box-header">
            <h3>Create Match</h3>
        </div>

        <div class="box-body">

            <div class="form-group">
                <label>Server</label>
                <div>
                    <server-select v-model="match.serve" :data-multiple="false"></server-select>
                </div>
            </div>

            <div class="form-group">
                <label>Game Mode</label>
                <game-mode-select v-model="match.gameMode" :data-multiple="false"></game-mode-select>
            </div>

            <div class="form-group">
                <label>Entry Fee</label>
                <entry-fee-select v-model="match.entryFee" :data-multiple="false"></entry-fee-select>
            </div>

        </div>

    </div>
</template>

<script>
    import ServerSelect from '@components/selects/Server'
    import EntryFeeSelect from '@components/selects/EntryFee'
    import GameModeSelect from '@components/selects/GameMode'

    export default {
        components: {
            ServerSelect,
            EntryFeeSelect,
            GameModeSelect,
        },

        data() {
            return {
                match: {
                    serve: null,
                    entryFee: null,
                    gameMode: null,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>


</style>
