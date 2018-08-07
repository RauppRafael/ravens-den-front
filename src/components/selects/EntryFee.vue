<template>
    <!--<vue-multiselect :options="entries"-->
                     <!--:multiple="dataMultiple"-->
                     <!--:custom-label="label"-->
                     <!--placeholder="Select entry fee"-->
                     <!--v-model="val"></vue-multiselect>-->

    <v-select
        :items="entries"
        :multiple="dataMultiple"
        :label="dataMultiple ? 'Entry Fees' : 'Entry Fee'"
        :small-chips="true"
        item-text="entry"
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
            entries() {
                return this.$store.state.entries || []
            },
        },

        mixins: [vModel],
    }
</script>

<style scoped>

</style>
