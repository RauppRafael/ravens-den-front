<template>
    <header class="header">
        <h3>Fortnite</h3>

        <div class="links">
            <router-link to="/matchmaking" class="link">Matchmaking</router-link>

            <router-link to="/history" class="link">History</router-link>

            <router-link to="jobs" class="link">Jobs</router-link>

            <router-link to="/profile" class="link">
                <vue-dropdown text="WRX Raupp | $ 172,95">
                    <vue-dropdown-item to="/profile">Profile</vue-dropdown-item>
                    <vue-dropdown-item to="/profile/deposit">Deposit</vue-dropdown-item>
                    <vue-dropdown-item to="/profile/withdraw">Withdraw</vue-dropdown-item>
                    <vue-dropdown-item to="/profile/settings">Settings</vue-dropdown-item>
                </vue-dropdown>
            </router-link>
        </div>

        <router-link to="#" class="yellow">Download</router-link>
    </header>
</template>

<script>
    import VueDropdown from 'bootstrap-vue/es/components/dropdown/dropdown'
    import VueDropdownItem from 'bootstrap-vue/es/components/dropdown/dropdown-item'

    export default {
        components: {
            VueDropdown,
            VueDropdownItem,
        },
    }
</script>

<style lang="scss" scoped>
    @import "~@variables";

    .header {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        position: relative;
        z-index: $z-index-header;

        width: 100vw;
        height: $header-height;
        padding: 0 0 0 1.5rem;

        background-color: $darker-grey;
        color: $white;
        box-shadow: $shadow;

        font-size: 1.4rem;

        > * {
            display: flex;
            align-items: center;
            text-transform: uppercase;
        }

        .links {
            width: 100%;
            justify-content: space-between;
            align-items: stretch;
            padding: 0 5rem;

            > * {
                display: flex;
                align-items: center;
            }
        }

        .link {
            font-size: 1.4rem;
            color: $light-grey;
            transition: all .2s ease-in-out;
            border: none;

            &.active, &:hover {
                border-bottom: 5px solid $yellow;
            }
        }

        .yellow {
            padding: 1rem;
            background-color: $yellow;
            color: black;
        }
    }
</style>
