<template>
    <div class="matches">
        <matches-sidebar></matches-sidebar>

        <div class="container">
            <div class="box">
                <matches-list></matches-list>
            </div>
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
</style>
