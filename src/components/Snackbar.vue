<template>
    <v-snackbar
        v-model="snackbar"
        :top="y === 'top'"
        :right="x === 'right'"
        :bottom="y === 'bottom'"
        :left="x === 'left'"
        :multi-line="mode === 'multi-line'"
        :vertical="mode === 'vertical'">

        {{ message }}

        <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>

    </v-snackbar>
</template>

<script>
    import EventBus from '@packages/event-bus'

    export default {
        components: {},

        data() {
            return {
                snackbar: true,
                message: null,
                mode: null,
                x: 'right',
                y: 'top',
            }
        },

        mounted() {
            EventBus.$on('show-snackbar',
                (payload) => {
                    this.message = payload.message
                    this.snackbar = true
                }
            )
        }
    }
</script>

<style lang="scss" scoped>

    @media only screen and (min-width: 600px) {
        .v-snack--left.v-snack--top, .v-snack--right.v-snack--top {
            transform: translateY(75px);
        }
    }
</style>
