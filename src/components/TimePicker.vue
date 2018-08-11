<template>
    <v-menu ref="menu"
            v-model="menu"
            min-width="290px"
            transition="scale-transition"
            :close-on-content-click="false"
            :return-value.sync="val"
            lazy
            offset-y
            full-width>

        <v-text-field slot="activator"
                      v-model="val"
                      label="Time"
                      append-icon="timer"
                      readonly></v-text-field>

        <v-time-picker v-model="val"
                       :allowed-minutes="allowed"
                       @input="(val) => $refs.menu.save(val)"></v-time-picker>

    </v-menu>
</template>

<script>
    import vModel from '@mixins/v-model'

    export default {
        data() {
            return {
                menu: false,
            }
        },

        methods: {
            allowed: (min) => min % 5 === 0
        },

        mixins: [vModel],
    }
</script>

<style scoped>

</style>
