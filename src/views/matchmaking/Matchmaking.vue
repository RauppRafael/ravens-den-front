<template>
    <div class="matchmaking">
        <app-matchmaking-sidebar @load="load"></app-matchmaking-sidebar>

        <div class="matches container">

            <template v-if="!matches">
                <h4 class="text-muted mb-2">Sorry, we couldn't find you a match.</h4>

                <h5 class="text-muted mb-3">
                    Would you like to
                    <router-link to="/matches/create" class="link">create a new one</router-link>
                    ?
                </h5>
            </template>

            <template v-for="(match, index) in matches">

                <app-match :data-match="match"
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
                return this.$store.state.matchmaking.matches
            },
        },

        methods: {
            load() {
                this.$loader.matches.matchmaking(this.$store.state.matchmaking.filters)
            },
        },

        mounted() {
            if (!this.matches)
                this.load()
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

            .link {
                text-decoration: underline;
            }
        }
    }
</style>
