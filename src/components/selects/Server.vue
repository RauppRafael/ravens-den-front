<template>
    <vue-multiselect :options="servers"
                     :multiple="dataMultiple"
                     :custom-label="label"
                     track-by="short"
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
                return [
                    {short: 'BR', name: 'Brazil'},
                    {short: 'US-W', name: 'United States - West'},
                    {short: 'US-E', name: 'United States - East'},
                ]
            },
        },

        methods: {
            label(option) {
                return `${option.short} - ${option.name}`
            }
        },

        mixins: [vModel],
    }
</script>

<style scoped>

</style>
