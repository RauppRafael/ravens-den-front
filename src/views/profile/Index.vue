<template>
    <div class="profile">
        <transition>
            <app-sidebar></app-sidebar>
        </transition>

        <div class="profile-container">
            <transition>
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
    @import "~@variables";

    .profile-container {
        flex: 0 0 $container-width;
        padding: 1rem;
    }
</style>
