<template>
    <div class="box">
        <div class="box-header">
            <h2>Profile</h2>
        </div>
        <div class="box-body">
            <v-form @submit="update">
                <v-text-field label="Epic Account Username" v-model="username"></v-text-field>
                <v-text-field label="Email"
                              name="email"
                              v-model="email"
                              v-validate="'required|email'"
                              :rules="[errors.first('email') || true]"
                              required></v-text-field>
                <v-btn color="primary" type="submit">Update</v-btn>
            </v-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    username: null,
                    email: null,
                    password: null,
                }
            }
        },

        computed: {
            user() {
                return this.$store.state.user
            },

            username: {
                get() {
                    if (this.form.username)
                        return this.form.username

                    if (this.user)
                        return this.user.username
                },

                set(val) {
                    this.form.username = val
                }
            },

            email: {
                get() {
                    if (this.form.email)
                        return this.form.email

                    if (this.user)
                        return this.user.email
                },

                set(val) {
                    this.form.email = val
                }
            }
        },

        methods: {
            update(event) {
                event.preventDefault()

                let user = {}

                if (this.form.username)
                    user.username = this.form.username

                if (this.form.email)
                    user.email = this.form.email

                this.$api.users.update(this.user.id, user).then(
                    () => {
                        this.$auth.loadUserData()
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>
