export default {

    props: {
        value: {}
    },

    computed: {
        val: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            },
        }
    }

}
