<template>
    <div class="matchmaking">
        <app-matchmaking-sidebar></app-matchmaking-sidebar>

        <div class="container">
            <!--<app-match v-for="n in 7"></app-match>-->
            <app-match></app-match>
            <app-match-2></app-match-2>
        </div>
    </div>
</template>

<script>
    import AppMatchmakingSidebar from './components/Sidebar'
    import AppMatch from './components/Match'
    import AppMatch2 from './components/Match2'

    export default {
        components: {
            AppMatchmakingSidebar,
            AppMatch,
            AppMatch2,
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
            overflow-y: scroll;
            padding: 2rem 4rem;
            z-index: $z-index-container;
            position: relative;
        }
    }
</style>
