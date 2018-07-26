<template>
    <div id="app">
        <app-header></app-header>

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
    @import "~@scss/typography.scss";
    @import "~@scss/fixes.scss";
    @import "~@scss/utilities.scss";
    @import "~@animations";
    @import "~@variables";
    @import "~@scss/components.scss";
</style>
