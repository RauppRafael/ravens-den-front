<template>
    <vue-multiselect :options="gameModes"
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
