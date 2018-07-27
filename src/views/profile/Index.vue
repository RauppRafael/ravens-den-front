<template>
    <div class="profile">
        <transition>
            <app-sidebar></app-sidebar>
        </transition>

        <transition>
            <router-view></router-view>
        </transition>
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

<style lang="scss" scoped>
    @import "animations";
</style>
