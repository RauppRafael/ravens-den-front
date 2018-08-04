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
                this.$router.push('/login')

            this.$loader.entries.all()
            this.$loader.gameModes.all()
            this.$loader.servers.all()

            if (this.$auth.token())
                this.$loader.users.user().then(
                    () => {
                        // TODO load matchmaking
                        // TODO load matches
                        // TODO load setting
                        // TODO load profile
                        // TODO load balance
                    }
                )
        }
    }
</script>

<style lang="scss">
    @import "~@scss/app.scss";
</style>
