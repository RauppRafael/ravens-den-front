<template>
    <vue-multiselect :options="fees"
                     :multiple="dataMultiple"
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
            fees() {
                return [
                    '$ 0.01',
                    '$ 0.05',
                    '$ 0.10',
                    '$ 0.25',
                    '$ 0.50',
                    '$ 1.00',
                    '$ 5.00',
                    '$ 10.00',
                ]
            },
        },

        mixins: [vModel],
    }
</script>

<style scoped>

</style>
