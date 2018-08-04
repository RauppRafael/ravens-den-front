<template>
    <header class="header">
        <router-link to="/" class="logo"><h3>RAVEN'S DEN</h3></router-link>

        <div class="links">
            <router-link to="/matchmaking" class="link" v-if="user">Matchmaking</router-link>

            <router-link to="/matches" class="link" v-if="user">Matches</router-link>

            <span v-if="!user"></span>

            <router-link to="/help" class="link">Help</router-link>

            <router-link to="/profile" v-if="user">
                <vue-dropdown :text="userText" class="dead">
                    <vue-dropdown-item to="/profile">Profile</vue-dropdown-item>
                    <vue-dropdown-item to="/profile/deposit">Deposit</vue-dropdown-item>
                    <vue-dropdown-item to="/profile/withdraw">Withdraw</vue-dropdown-item>
                    <vue-dropdown-item to="/profile/settings">Settings</vue-dropdown-item>
                </vue-dropdown>
            </router-link>
        </div>

        <a href="javascript:void(0)" class="action flex-column" @click="logout()" v-if="user">
            <i class="fas fa-sign-out-alt text-xl"></i>
            <span class="text-xs text-bold">Log Out</span>
        </a>

        <router-link to="/login" class="action flex-column" v-if="!user">
            <i class="fas fa-sign-in-alt text-xl"></i>
            <span class="text-xs text-bold">Log In</span>
        </router-link>
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
            user() {
                return this.$store.state.user
            },

            balance() {
                return this.$store.state.balance || 0
            },

            userText() {
                if (!this.user)
                    return ''

                return this.user.username + ' | $ ' + this.balance
            }
        },

        methods: {
            logout() {
                this.$auth.logout()
                this.$router.push('/login')
            },
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
