<template>
    <div class="box">
        <div class="box-body">
            <v-form @submit="submit">

                <v-text-field label="Email"
                              name="email"
                              v-model="email"
                              v-validate="'required|email'"
                              :rules="[errors.first('email') || true]"
                              required></v-text-field>

                <v-text-field name="password"
                              label="Password"
                              type="password"
                              ref="password"
                              v-model="password"
                              v-validate="'required|min:6'"
                              :rules="[errors.first('password') || true]"
                              required></v-text-field>

                <v-text-field name="confirm"
                              label="Password Confirmation"
                              type="password"
                              v-model="confirm"
                              v-validate="'required|min:6|confirmed:password'"
                              :rules="[errors.first('confirm') || true]"
                              required></v-text-field>

                <div class="footer">
                    <div>
                        <router-link to="#" class="text-sm">Create account</router-link>
                        <br>
                        <router-link to="#" class="text-sm">Forgot you password?</router-link>
                    </div>

                    <button class="btn btn-primary" :disabled="errors.any()">Register</button>
                </div>

            </v-form>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},

        data() {
            return {
                email: null,
                password: null,
                confirm: null,
            }
        },

        computed: {
            user() {
                return this.$store.state.user
            },
        },

        methods: {
            submit(event) {
                event.preventDefault()

                if (this.errors.any())
                    return

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
