<template>
    <nav class="sidebar">
        <ul class="sidebar-list">
            <router-link tag="li" to="/profile" class="sidebar-item" exact>
                <a class="link">
                    <span class="icon"><i class="fa fa-user"></i></span>
                    <span>Profile</span>
                </a>
            </router-link>

            <router-link tag="li" to="/profile/deposit" class="sidebar-item">
                <a class="link">
                    <span class="icon"><i class="fa fa-credit-card"></i></span>
                    <span>Deposit</span>
                </a>
            </router-link>

            <router-link tag="li" to="/profile/withdraw" class="sidebar-item">
                <a class="link">
                    <span class="icon"><i class="fa fa-hand-holding-usd"></i></span>
                    <span>Withdraw</span>
                </a>
            </router-link>

            <router-link tag="li" to="/profile/settings" class="sidebar-item" exact>
                <a class="link">
                    <span class="icon"><i class="fa fa-cog"></i></span>
                    <span>Settings</span>
                </a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    @import "~@variables";

    /*
    .sidebar {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1.5rem 0;

        .sidebar-list {
            font-size: 1.4rem;
        }
    }

    .sidebar-item {
        position: relative;
        height: 5rem;
        color: $darker-grey;
        transition: color 1s .2s;

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
            background-color: $dark-blue;
            transform: scaleY(0);
            transition: transform .2s,
            width .4s cubic-bezier(1, 0, 0, 1) .2s,
            background-color .1s;
        }

        &.active, &:hover {
            color: $white;

            &::before {
                background-color: lighten($dark-blue, 5%);
                transform: scaleY(1);
                width: 100%;
            }
        }

        .link {
            &:link, &:visited {
                color: inherit;
                text-decoration: none;
                text-transform: uppercase;
                padding: 1.5rem 3rem;
                position: relative;
                z-index: 10;

                display: flex;
                align-items: center;
            }

            .icon {
                display: flex;
                justify-content: center;
                width: 2rem;
                font-size: 1.6rem;
                margin-right: 1.5rem;

                > * {
                    text-align: center;
                }
            }
        }
    }
    */
</style>
