<template>
    <div class="box">
        <div class="box-body">
            <form @submit="login">

                <div class="form-group">
                    <v-text-field label="Email"
                                  name="email"
                                  v-model="email"
                                  v-validate="'required|email'"
                                  :rules="[errors.first('email') || true]"
                                  required></v-text-field>
                </div>

                <div class="form-group">
                    <v-text-field name="password"
                                  label="Password"
                                  type="password"
                                  v-model="password"
                                  v-validate="'required'"
                                  :rules="[errors.first('password') || true]"
                                  required></v-text-field>
                </div>

                <div class="footer">
                    <div>
                        <router-link to="/register" class="text-sm">Create account</router-link>
                        <br>
                        <router-link to="#" class="text-sm">Forgot you password?</router-link>
                    </div>

                    <button class="btn btn-primary">Log In</button>
                </div>

            </form>
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
                sending: false,
            }
        },

        computed: {
            user() {
                return this.$store.state.user
            },
        },

        methods: {
            login(event) {
                event.preventDefault()

                const credentials = {
                    email: this.email,
                    password: this.password
                }

                this.$auth.login(credentials)
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
