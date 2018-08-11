<template>
    <v-menu ref="menu"
            :close-on-content-click="false"
            v-model="menu"
            :return-value.sync="val"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px">

        <v-text-field slot="activator"
                      v-model="val"
                      label="Date"
                      append-icon="event"
                      readonly></v-text-field>

        <v-date-picker v-model="val"
                       @input="(val) => $refs.menu.save(val)"></v-date-picker>
    </v-menu>
</template>

<script>
    import vModel from '@mixins/v-model'

    export default {
        data() {
            return {
                menu: false,
                date: null,
            }
        },

        mixins: [vModel],
    }
</script>

<style scoped>

</style>
