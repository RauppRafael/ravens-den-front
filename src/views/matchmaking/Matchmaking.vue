<template>
    <div class="matchmaking">
        <app-matchmaking-sidebar></app-matchmaking-sidebar>

        <div class="matches container">
            <template v-for="(match, index) in matches">

                <app-match
                    :data-match="match"
                    :data-animation-delay="(index / 10) + 's'"></app-match>

            </template>
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
        },

        computed: {
            matches() {
                return ['','','','','','','','',]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@variables";
    @import "animations";

    .matchmaking {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        background-color: lighten($light-grey, 70%);

        .container {
            padding: 4rem 8rem;
        }
    }
</style>
