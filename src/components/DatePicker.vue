<template>
    <v-menu ref="menu"
            :close-on-content-click="false"
            v-model="menu"
            :return-value.sync="date"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px">

        <v-select slot="activator"
                  content-class="no-display"
                  v-model="date"
                  label="Date"></v-select>

        <v-date-picker v-model="date" @input="$refs.menu.save(date)"></v-date-picker>

    </v-menu>
</template>

<script>
    export default {
        data() {
            return {
                menu: false,
                date: null,
            }
        }
    }
</script>

<style>
    .no-display {
        display: none !important;
    }
</style>
