<template>
    <vue-multiselect :options="servers"
                     :multiple="dataMultiple"
                     :custom-label="label"
                     track-by="short"
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
            value: {
            }
        },

        computed: {
            servers() {
                return [
                    {short: 'BR', name: 'Brazil'},
                    {short: 'US-W', name: 'United States - West'},
                    {short: 'US-E', name: 'United States - East'},
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

        methods: {
            label (option) {
                return `${option.short} - ${option.name}`
            }
        }
    }
</script>

<style scoped>

</style>
