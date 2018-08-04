<template>
    <vue-multiselect :options="entries"
                     :multiple="dataMultiple"
                     :custom-label="label"
                     placeholder="Select entry fee"
                     v-model="val"></vue-multiselect>
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
            entries() {
                return this.$store.state.entries || []
            },
        },

        methods: {
            label(option){
                return '$' + option
            }
        },

        mixins: [vModel],
    }
</script>

<style scoped>

</style>
