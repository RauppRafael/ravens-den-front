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
    import '@fortawesome/fontawesome-free/css/all.min.css'

    export default {
        components: {
            AppHeader,
            AppMatchmaking,
        },

        computed: {}
    }
</script>

<style lang="scss">
    @import "~@scss/app.scss";
</style>
