<template>
    <div class="box">

        <div class="box-header">
            <h3>Create Match</h3>
        </div>

        <div class="box-body">

            <div class="flex">

                <div class="half">
                    <div class="form-group">
                        <label>Game Mode</label>
                        <game-mode-select v-model="match.gameMode" :data-multiple="false"></game-mode-select>
                    </div>

                    <div class="form-group">
                        <label>Date</label>
                        <vue-date-picker v-model="match.date" @input="log"></vue-date-picker>
                    </div>

                    <!--<div class="form-group">-->
                        <!--<input type="text"-->
                               <!--class="form-control"-->
                               <!--v-model="name"-->
                               <!--v-form-control="'name'">-->
                        <!--<label for="" class="label" :class="{filled: filledLabel('name')}">DISPLAY NAME *</label>-->
                    <!--</div>-->
                </div>

                <div class="half">
                    <div class="form-group">
                        <label>Server</label>
                        <server-select v-model="match.serve" :data-multiple="false"></server-select>
                    </div>

                    <div class="form-group">
                        <label>Entry Fee</label>
                        <entry-fee-select v-model="match.entryFee" :data-multiple="false"></entry-fee-select>
                    </div>
                </div>

            </div>

            <button class="btn btn-primary">CREATE</button>

        </div>

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
                    serve: null,
                    entryFee: null,
                    gameMode: null,
                    date: null,
                },
            }
        },

        methods: {
            log(e) {
                console.log(e)
            },
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
