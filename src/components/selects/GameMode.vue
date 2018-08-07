<template>
    <v-select
        :items="gameModes"
        :multiple="dataMultiple"
        :label="dataMultiple ? 'Game Modes' : 'Game Mode'"
        :small-chips="true"
        max-height="350"
        item-text="name"
        item-value="id"
        return-object></v-select>
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
                return this.$store.state.gameModes || []
            },
        },

        mixins: [vModel],
    }
</script>

<style scoped>
</style>
