<template>
    <div id="app">
        <app-header></app-header>

        <div class="container">
            <transition>
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
    @import "~@variables";
    @import "~@scss/reset.scss";
    @import "~@scss/fixes.scss";
    @import "~@scss/utilities.scss";
    @import "~@scss/components.scss";
    @import "~@scss/typography/typography.scss";

    .container {
        height: $container-height;
        background-color: $lighter-grey;
        overflow: hidden;

        > * {
            display: flex;

            > *:last-child {
                position: relative;
                padding: 4rem 8rem;
                overflow-y: scroll;
                overflow-x: hidden;
                height: $container-height;
                width: 100%;
                z-index: $z-index-container;
            }
        }
    }
</style>
