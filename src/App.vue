<template>
    <div id="app">
        <app-header></app-header>

        <app-matchmaking></app-matchmaking>

        <router-view></router-view>
    </div>
</template>

<script>
    import AppHeader from './layout/Header'
    import AppMatchmaking from '@views/matchmaking/Matchmaking'
    import '@fortawesome/fontawesome-free/css/all.min.css'

    export default {
        components: {
            AppHeader,
            AppMatchmaking,
        },
    }
</script>

<style lang="scss">
    @import "~@scss/reset.scss";
    @import "~@scss/fonts.scss";
    @import "~@scss/fixes.scss";
</style>
