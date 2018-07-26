<template>
    <div class="matchmaking">
        <app-matchmaking-sidebar></app-matchmaking-sidebar>

        <div class="container">
            <app-match data-animation-delay="0s"></app-match>
            <app-match data-animation-delay=".1s"></app-match>
            <app-match data-animation-delay=".2s"></app-match>
            <app-match data-animation-delay=".3s"></app-match>
        </div>
    </div>
</template>

<script>
    import AppMatchmakingSidebar from './components/Sidebar'
    import AppMatch from './components/Match2'

    export default {
        components: {
            AppMatchmakingSidebar,
            AppMatch,
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@variables";

    .matchmaking {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        background-color: lighten($light-grey, 70%);

        .container {
            height: $sidebar-height;
            width: 100%;
            overflow-y: scroll;
            overflow-x: hidden;
            padding: 4rem 8rem;
            z-index: $z-index-container;
            position: relative;
        }
    }
</style>
