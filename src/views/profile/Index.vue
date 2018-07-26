<template>
    <div class="">
        <app-sidebar></app-sidebar>

        <router-view></router-view>
    </div>
</template>

<script>
    import AppSidebar from './components/Sidebar'
    export default {
        components: {
            AppSidebar,
        }
    }
</script>

<style scoped>

</style>
