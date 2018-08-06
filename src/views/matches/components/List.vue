<template>
    <div :class="{box:showTable}">
        <ul class="matches-list">

            <template v-for="match in matches">
                <app-match :dataMatch="match"></app-match>
            </template>

        </ul>
    </div>
</template>

<script>
    import AppMatch from './Match'

    export default {
        components: {
            AppMatch,
        },

        computed: {
            matches() {
                return this.$store.state.matches
            },

            showTable() {
                return this.matches && this.matches.length > 0
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
