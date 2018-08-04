<template>
    <header class="header">
        <router-link to="/" class="logo"><h3>Fortnite</h3></router-link>

        <div class="links">
            <router-link to="/matchmaking" class="link" v-if="logged">Matchmaking</router-link>

            <router-link to="/matches" class="link" v-if="logged">Matches</router-link>

            <router-link to="/help" class="link">Help</router-link>

            <router-link to="/profile" v-if="logged">
                <vue-dropdown text="WRX Raupp | $ 172,95" class="dead">
                    <vue-dropdown-item to="/profile">Profile</vue-dropdown-item>
                    <vue-dropdown-item to="/profile/deposit">Deposit</vue-dropdown-item>
                    <vue-dropdown-item to="/profile/withdraw">Withdraw</vue-dropdown-item>
                    <vue-dropdown-item to="/profile/settings">Settings</vue-dropdown-item>
                </vue-dropdown>
            </router-link>

            <router-link to="/login" class="link" v-if="!logged">Log In</router-link>
        </div>

        <a href="javascript:void(0)" class="action flex-column" @click="logout()">
            <i class="fas fa-sign-out-alt text-xl"></i>
            <span class="text-xs text-bold">Sign Out</span>
        </a>
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

        computed: {
            logged() {
                return !!this.$store.state.user
            }
        },

        methods: {
            logout(){
                this.$auth.logout()
            }
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

        .logo {
            color: $white;
        }

        .link {
            padding: 0 1rem;
            font-size: 1.4rem;
            color: $light-grey;
            transition: all .2s ease-in-out;
            border: 0 solid $yellow;

            &.active, &:hover {
                border-bottom: 5px solid $yellow;
            }
        }

        .action {
            padding: 1rem;
            background-color: $yellow;
            color: black;
            width: 10rem;
        }
    }
</style>
