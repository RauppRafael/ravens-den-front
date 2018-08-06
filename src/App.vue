<template>
    <div id="app">
        <app-header></app-header>

        <app-snackbar></app-snackbar>

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
    import AppSnackbar from '@components/Snackbar'

    import 'vue-multiselect/dist/vue-multiselect.min.css'
    import '@fortawesome/fontawesome-free/css/all.min.css'

    export default {
        components: {
            AppHeader,
            AppMatchmaking,
            AppSnackbar,
        },

        mounted() {
            this.$auth.login()
            this.$loader.entries.all()
            this.$loader.gameModes.all()
            this.$loader.servers.all()
        }
    }
</script>

<style lang="scss">
    @import "~@scss/app.scss";

    .box, .sidebar {
        ul {
            padding: 0 !important;
        }
    }
</style>
