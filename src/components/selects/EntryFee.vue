<template>
    <vue-multiselect :options="fees"
                     :multiple="dataMultiple"
                     v-model="val"></vue-multiselect>
</template>

<script>
    import VueMultiselect from 'vue-multiselect'

    export default {
        components: {
            VueMultiselect,
        },

        props: {
            dataMultiple: {
                type: Boolean,
                default: true
            },
            value: {}
        },

        computed: {
            fees() {
                return [
                    '$ 0.01',
                    '$ 0.05',
                    '$ 0.10',
                    '$ 0.50',
                    '$ 1',
                ]
            },

            val: {
                get() {
                    return this.value
                },
                set(val) {
                    this.$emit('input', val)
                },
            }
        },
    }
</script>

<style scoped>

</style>
