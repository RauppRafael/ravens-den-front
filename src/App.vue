<template>
    <div id="app">
        <app-header></app-header>

        <div class="container">
            <router-view></router-view>
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

    .container {
        background-color: $lighter-grey;

        > * {
            display: flex;

            > *:last-child {
                position: relative;
                padding: 4rem 8rem;
                overflow-y: scroll;
                overflow-x: hidden;
                height: $sidebar-height;
                width: 100%;
                z-index: $z-index-container;
            }
        }
    }
</style>
