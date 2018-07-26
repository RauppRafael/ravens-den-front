<template>
    <nav class="sidebar">
        <ul>
            <router-link tag="li" to="/profile" class="sidebar-item" exact>
                <a class="link">
                    <i class="fa fa-user"></i>
                    <span>Profile</span>
                </a>
            </router-link>

            <router-link tag="li" to="/profile/deposit" class="sidebar-item">
                <a class="link">
                    <i class="fa fa-credit-card"></i>
                    <span>Deposit</span>
                </a>
            </router-link>

            <router-link tag="li" to="/profile/withdraw" class="sidebar-item">
                <a class="link">
                    <i class="fa fa-hand-holding-usd"></i>
                    <span>Withdraw</span>
                </a>
            </router-link>

            <router-link tag="li" to="/profile/settings" class="sidebar-item" exact>
                <a class="link">
                    <i class="fa fa-cog"></i>
                    <span>Settings</span>
                </a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    @import "~@variables";

    .sidebar {
        background-color: $light-blue;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        ul {
            font-size: 1.4rem;
            margin-top: 3.5rem;
        }
    }

    .sidebar-item {
        position: relative;
        height: 5rem;

        &:not(:last-child) {
            margin-bottom: .5rem;
        }

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 3px;
            background-color: $yellow;
            transform: scaleY(0);
            transition: transform .2s,
            width .4s cubic-bezier(1, 0, 0, 1) .2s,
            background-color .1s;
        }

        &:hover::before,
        &.active::before {
            transform: scaleY(1);
            width: 100%;
        }

        &:active::before {
            background-color: lighten(green, 30%);
        }
    }

    .link {
        &:link, &:visited {
            color: $darker-grey;
            text-decoration: none;
            text-transform: uppercase;
            padding: 1.5rem 3rem;
            position: relative;
            z-index: 10;

            display: flex;
            align-items: center;
        }
    }

    .fa {
        /*font-size: 1.4rem;*/
        margin-right: 1.5rem;
    }

</style>
