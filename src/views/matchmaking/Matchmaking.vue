<template>
    <div class="matchmaking">
        <app-matchmaking-sidebar></app-matchmaking-sidebar>

        <div class="container">
            <app-match v-for="n in 7"></app-match>
        </div>
    </div>
</template>

<script>
    import AppMatchmakingSidebar from './components/Sidebar'
    import AppMatch from './components/Match'

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

        .container {
            height: $sidebar-height;
            overflow-y: scroll;
            padding: 2rem 4rem;
        }
    }
</style>
