<template>
    <div class="box">
        <div class="box-body">
            <v-form @submit="submit" v-if="this.form === 0" v-model="valid">

                <v-text-field label="Email"
                              name="email"
                              v-model="email"
                              v-validate="'required|email'"
                              :rules="[errors.first('email') || true]"
                              required></v-text-field>

                <v-text-field name="password"
                              label="Password"
                              type="password"
                              v-model="password"
                              v-validate="'required|min:6|confirmed:confirm'"
                              :rules="[errors.first('password') || true]"
                              required></v-text-field>

                <v-text-field name="confirm"
                              label="Password Confirmation"
                              type="password"
                              ref="confirm"
                              v-model="confirm"
                              v-validate="'required|min:6'"
                              :rules="[errors.first('confirm') || true]"
                              required></v-text-field>

                <div class="footer">
                    <div>
                        <router-link to="#" class="text-sm">Create account</router-link>
                        <br>
                        <router-link to="#" class="text-sm">Forgot you password?</router-link>
                    </div>

                    <button class="btn btn-primary">Register</button>
                </div>

            </v-form>

            <form @submit="submit" v-if="this.form === 1">

                <v-text-field v-model="username"
                              label="Epic Account Username"></v-text-field>

                <!--<div class="footer">-->
                <!--<div>-->
                <!--<a href="javascript:void(0)" class="text-sm" @click="form = 0">-->
                <!--<i class="fa fa-chevron-left" style="display: inline"></i>-->
                <!--Back-->
                <!--</a>-->
                <!--</div>-->

                <!--<button class="btn btn-primary">Register</button>-->
                <!--</div>-->
            </form>
        </div>
    </div>
</template>

<script>
    import {Validator} from 'vee-validate'

    export default {
        components: {},

        data() {
            return {
                form: 0,

                email: null,
                password: null,
                confirm: null,
                username: null,

                valid: false,
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

                // todo use vee validete

                // if (!this.email || !this.password)
                //     return
                //
                // if (this.password !== this.confirm)
                //     return

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
