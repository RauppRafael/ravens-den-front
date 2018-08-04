<template>
    <vue-multiselect :options="servers"
                     :multiple="dataMultiple"
                     :custom-label="label"
                     track-by="region"
                     placeholder="Select server"
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
            servers() {
                return this.$store.state.servers || []
            },
        },

        methods: {
            label(option) {
                return option.region
            }
        },

        mixins: [vModel],
    }
</script>

<style scoped>

</style>
