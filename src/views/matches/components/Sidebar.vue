<template>
    <nav class="sidebar">
        <ul class="sidebar-list">

            <router-link tag="li" to="/matches" class="sidebar-item" exact>
                <a class="link">
                    <span class="icon"><i class="fa fa-forward"></i></span>
                    <span>Upcoming</span>
                </a>
            </router-link>

            <router-link tag="li" to="/matches/history" class="sidebar-item">
                <a class="link">
                    <span class="icon"><i class="fa fa-history"></i></span>
                    <span>History</span>
                </a>
            </router-link>

            <router-link tag="li" to="/matches/create" class="sidebar-item">
                <a class="link">
                    <span class="icon"><i class="fa fa-plus"></i></span>
                    <span>Create</span>
                </a>
            </router-link>

        </ul>
    </nav>
</template>

<script>
	export default {
	}
</script>

<style scoped>

</style>
