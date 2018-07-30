export default {

    data() {
        return {
            focus: null
        }
    },

    methods: {
        filledLabel(field) {
            return this.focus === field || this[field]
        },
    },

    directives: {
        focus: {
            inserted: (el, binding, vnode) => {
                let self = this
                el.addEventListener('focus', () => {
                    vnode.context.focus = binding.value
                })
            }
        }
    }

}
