<template>
    <div class="profile">
        <transition>
            <app-sidebar></app-sidebar>
        </transition>

        <div class="container">
            <transition mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
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
