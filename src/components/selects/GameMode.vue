<template>
    <vue-multiselect :options="gameModes"
                     :multiple="dataMultiple"
                     :custom-label="label"
                     track-by="name"
                     v-model="val"
                     placeholder="Select game mode"></vue-multiselect>
</template>

<script>
    import VueMultiselect from 'vue-multiselect'
    import vModel from '@mixins/v-model'

    export default {
        components: {
            VueMultiselect,
        },

        props: {
            dataMultiple: {
                type: Boolean,
                default: true
            },
        },

        computed: {
            gameModes() {
                return this.$store.state.gameModes
            },
        },

        methods: {
            label(option) {
                return option.name
            }
        },

        mixins: [vModel],
    }
</script>

<style scoped>

</style>
