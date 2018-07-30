<template>
    <vue-date-picker lang="en"
                     format="MM/DD/YY hh:mm"
                     width="100%"
                     placeholder="Select date"
                     v-model="val"
                     :not-before="new Date()"
                     :type="dataType"
                     :minute-step="5"
                     :confirm="true"></vue-date-picker>
</template>

<script>
    import VueDatePicker from 'vue2-datepicker'

    export default {
        components: {
            VueDatePicker,
        },

        props: {
            value: {},
            dataType: {
                type: String,
                default: 'datetime'
            }
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
        },
    }
</script>

<style lang="scss">
    @import "~@variables";

    .mx-datepicker {
        .mx-input-wrapper {
            .mx-input {
                height: 4rem;
                border-radius: 3px;
                -webkit-box-shadow: none;
                box-shadow: none;
                font-size: 1.6rem;

                &::placeholder {
                    color: $grey;
                }
            }
        }
    }
</style>
