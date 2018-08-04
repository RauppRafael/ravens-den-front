<template>
    <div class="box">
        <div class="box-body">

            <div class="form-group">
                <label for="email"
                       class="label"
                       :class="{filled: filledLabel('email')}">
                    Email
                </label>
                <input class="form-control"
                       id="email"
                       v-model="email"
                       v-form-control="'email'">
            </div>

            <div class="form-group">
                <label for="password"
                       class="label"
                       :class="{filled: filledLabel('password')}">
                    Password
                </label>
                <input class="form-control"
                       id="password"
                       type="password"
                       v-model="password"
                       v-form-control="'password'">
            </div>

            <button class="btn btn-primary">Log In</button>

        </div>
    </div>
</template>

<script>
    import Form from '@mixins/form'

    export default {
        components: {},

        data() {
            return {
                email: null,
                password: null,
                sending: false,
            }
        },

        mixins: [Form]
    }
</script>

<style lang="scss" scoped>
    .box {
        height: auto;
        width: 50rem;
        align-self: center;
        margin: auto;
    }
</style>
