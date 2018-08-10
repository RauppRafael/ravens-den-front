<template>
    <v-snackbar
        v-model="snackbar"
        :top="y === 'top'"
        :right="x === 'right'"
        :bottom="y === 'bottom'"
        :left="x === 'left'"
        :color="mode === 'error' ? 'red' : null">

        {{ message }}

        <v-btn :color="mode === 'error' ? 'white' : 'pink'"
               @click="snackbar = false"
               flat>

            Close
            
        </v-btn>

    </v-snackbar>
</template>

<script>
    import EventBus from '@packages/event-bus'

    export default {
        components: {},

        data() {
            return {
                snackbar: false,
                message: null,
                mode: null,
                x: 'right',
                y: 'top',
            }
        },

        mounted() {
            EventBus.$on('show-snackbar',
                (payload) => {
                    this.mode = null
                    this.message = payload.message
                    this.snackbar = true
                }
            )

            EventBus.$on('show-error',
                (message) => {
                    this.mode = 'error'
                    this.message = message
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
