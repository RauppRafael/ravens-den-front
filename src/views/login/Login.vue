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

            <button class="btn btn-primary" @click="login">Log In</button>

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

        computed: {
            user() {
                return this.$store.state.user
            }
        },

        methods: {
            login() {
                this.$loader.users.login({email: this.email, password: this.password}).then(
                    () => {
                        this.$loader.users.user()
                    }
                )
            }
        },

        watch: {
            user(val) {
                if(val)
                    console.log('Logged in. Now redirect')
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

        .box-body {
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            .form-group {
                width: 100%;
            }
        }
    }
</style>
