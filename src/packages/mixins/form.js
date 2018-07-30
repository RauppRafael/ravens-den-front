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
        'form-control': {
            inserted: (el, binding, vnode) => {
                el.addEventListener('focus', () => {
                    vnode.context.focus = binding.value
                })
                el.addEventListener('blur', () => {
                    vnode.context.focus = null
                })
            }
        },

        // 'form-label': {
        //     update: (el, binding, vnode) => {
        //         console.log(el)
        //         if (vnode.context.filledLabel(binding.value)) {
        //             el.classList.add('filled')
        //         } else {
        //             el.classList.remove('filled')
        //         }
        //     }
        // }
    }

}
