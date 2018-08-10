<template>
    <v-menu ref="menu"
            v-model="menu"
            min-width="290px"
            transition="scale-transition"
            :close-on-content-click="false"
            :return-value.sync="time"
            lazy
            offset-y
            full-width>

        <v-select slot="activator"
                  content-class="no-display"
                  v-model="time"
                  label="Time"></v-select>

        <v-time-picker v-model="time" @input="$refs.menu.save(time)"></v-time-picker>

    </v-menu>
</template>

<script>
    export default {
        data() {
            return {
                menu: false,
                time: null,
            }
        }
    }
</script>

<style scoped>

</style>
