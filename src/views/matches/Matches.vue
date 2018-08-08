<template>
    <div class="matches">
        <matches-sidebar></matches-sidebar>

        <div class="app-container">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    import MatchesSidebar from './components/Sidebar'
    import MatchesList from './components/List'

    export default {
        components: {
            MatchesSidebar,
            MatchesList,
        }
    }
</script>

<style lang="scss" scoped>
    @import "animations";

    .matches {
        display: flex;
    }
</style>
