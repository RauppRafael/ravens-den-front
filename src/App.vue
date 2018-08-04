<template>
    <div id="app">
        <app-header></app-header>

        <div class="main">
            <transition mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import AppHeader from './layout/Header'
    import AppMatchmaking from '@views/matchmaking/Matchmaking'

    import 'vue-multiselect/dist/vue-multiselect.min.css'
    import '@fortawesome/fontawesome-free/css/all.min.css'

    export default {
        components: {
            AppHeader,
            AppMatchmaking,
        },

        mounted() {
            if (!this.$auth.token())
                console.log('redirect back')

            if (this.$auth.token())
                this.$loader.users.user()

            // this.$loader.users.login({email: 'raupperino@gmail.com', password: '200516'}).then(
            //     () => {
                    // this.$loader.matches.matchmaking({})
                // }
            // )

        }
    }
</script>

<style lang="scss">
    @import "~@scss/app.scss";
</style>
