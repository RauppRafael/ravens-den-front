<template>
    <vue-multiselect :options="gameModes"
                     :multiple="dataMultiple"
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
                return [
                    'Playground 1v1',
                    'Playground 2v2',
                    'Playground Free For All',
                    'Solo',
                    'Duo',
                    'Squad',
                ]
            },
        },

        mixins: [vModel],
    }
</script>

<style scoped>

</style>
