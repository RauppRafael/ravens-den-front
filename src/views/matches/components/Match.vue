<template>
    <li class="match">
        <div class="header">
            <div class="">Today, 22:00</div>
            <span>1v1</span>
            <i class="fa fa-chevron-down"
               :class="{rotate: expand}"
               @click="expand = !expand"></i>
        </div>

        <transition name="content">
            <div v-if="expand" class="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur culpa nihil nobis officia.
                Animi atque dicta dolore earum error eveniet maxime nam necessitatibus nemo nihil omnis placeat, quam
                quos.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur culpa nihil nobis officia.
                Animi atque dicta dolore earum error eveniet maxime nam necessitatibus nemo nihil omnis placeat, quam
                quos.
            </div>
        </transition>
    </li>
</template>

<script>
    export default {
        data() {
            return {
                expand: false,
            }
        },
    }
</script>

<style lang="scss">
    @import "~@variables";
    @import "match-animations";

    .match {
        padding: 1.5rem 2rem;

        &:not(:last-child) {
            border-bottom: 1px solid $grey;
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .fa-chevron-down {
                transition: transform .3s;
                transform: none;

                &.rotate {
                    transform: rotate(-180deg);
                }
            }
        }

        .content {
            padding-top: 2rem;
            height: auto;
            width: 100%;
        }
    }
</style>
