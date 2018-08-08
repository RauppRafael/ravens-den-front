<template>
    <v-select
        :items="servers"
        :multiple="dataMultiple"
        :label="dataMultiple ? 'Servers' : 'Server'"
        :small-chips="true"
        :deletable-chips="dataMultiple"
        max-height="350"
        item-text="region"
        item-value="id"
        return-object></v-select>
</template>

<script>
    import vModel from '@mixins/v-model'

    export default {
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

        mixins: [vModel],
    }
</script>

<style scoped>

</style>
