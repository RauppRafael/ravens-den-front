<template>
    <div class="box">
        <ul class="matches-list">
            <app-match></app-match>
            <app-match></app-match>
            <app-match></app-match>
        </ul>
    </div>
</template>

<script>
    import AppMatch from './Match'

    export default {
        components: {
            AppMatch,
        }
    }
</script>

<style lang="scss" scoped>

</style>
