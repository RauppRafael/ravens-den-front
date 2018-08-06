<template>
    <div class="box">
        <div class="box-body">
            <form @submit="submit" v-if="this.form === 0">

                <div class="form-group">
                    <label for="email"
                           class="label"
                           :class="{filled: filledLabel('email')}">
                        Email
                    </label>
                    <input class="form-control"
                           id="email"
                           name="email"
                           v-model="email"
                           v-form-control="'email'"
                           v-validate="'required|email'">
                    <span class="text-danger text-sm">{{ errors.first('email') }}</span>
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

                <div class="form-group">
                    <label for="password-confirmation"
                           class="label"
                           :class="{filled: filledLabel('passwordConfirmation')}">
                        Confirm Password
                    </label>
                    <input class="form-control"
                           id="password-confirmation"
                           type="password"
                           v-model="passwordConfirmation"
                           v-form-control="'passwordConfirmation'">
                </div>

                <div class="footer">
                    <div>
                        <router-link to="#" class="text-sm">Create account</router-link>
                        <br>
                        <router-link to="#" class="text-sm">Forgot you password?</router-link>
                    </div>

                    <button class="btn btn-primary">Register</button>
                </div>

            </form>

            <form @submit="submit" v-if="this.form === 1">

                <input type="text" hidden>

                <div class="form-group">
                    <label for="epic"
                           class="label"
                           :class="{filled: filledLabel('username')}">
                        Epic Account Username
                    </label>
                    <input class="form-control"
                           id="epic"
                           v-model="username"
                           v-form-control="'username'">
                </div>

                <div class="footer">
                    <div>
                        <a href="javascript:void(0)" class="text-sm" @click="form = 0">
                            <i class="fa fa-chevron-left" style="display: inline"></i>
                            Back
                        </a>
                    </div>

                    <button class="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Form from '@mixins/form'

    export default {
        components: {},

        data() {
            return {
                form: 0,
                email: null,
                password: null,
                passwordConfirmation: null,
                username: null,
            }
        },

        computed: {
            user() {
                return this.$store.state.user
            }
        },

        methods: {
            submit(event) {
                event.preventDefault()

                if (!this.email || !this.password)
                    return

                if (this.password !== this.passwordConfirmation)
                    return

                if (this.form === 0) {
                    this.form = 1
                    return
                }

                const data = {
                    email: this.email,
                    password: this.password,
                    username: this.username
                }

                this.$api.users.create(data).then(() => {
                    this.$auth.login({email: this.email, password: this.password})
                })
            }
        },

        watch: {
            user(val) {
                if (val)
                    this.$router.push('/matchmaking')
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

            form {
                display: flex;
                flex-direction: column;
                align-items: flex-end;

                > * {
                    width: 100%;
                }

                .footer {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                }
            }
        }
    }
</style>
