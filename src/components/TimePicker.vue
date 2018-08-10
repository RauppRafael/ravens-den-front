<template>
    <v-menu ref="menu2"
            :close-on-content-click="false"
            v-model="menu2"
            :nudge-right="40"
            :return-value.sync="date"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px">

        <v-text-field
            slot="activator"
            v-model="date"
            label="Time"
            readonly></v-text-field>

        <v-time-picker v-model="date" @input="$refs.menu2.save(date)"></v-time-picker>

    </v-menu>
</template>

<script>
    export default {
        data() {
            return {
                menu2: false,
                date: null,
            }
        }
    }
</script>

<style scoped>

</style>
