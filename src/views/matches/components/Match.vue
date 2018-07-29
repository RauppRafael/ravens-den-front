<template>
    <li class="match">
        <div class="header" @click="expand = !expand">
            <div class="">Today, 22:00 - In 12 minutes</div>
            <span class="text-bold">Playground 2v2</span>
            <i class="fa fa-chevron-down"
               :class="{rotate: expand}"></i>
        </div>

        <transition name="content">
            <div v-if="expand" class="content flex-space-between">

                <div class="players">
                    <h5>Players</h5>
                    <ul class="list">
                        <li style="margin-top: 1rem" class="flex-center">
                            <i class="fa fa-caret-right ml-1"></i>
                            <h6 class="player-name text-green ml-0-5">WRX Raupp</h6>
                        </li>

                        <li style="margin-top: 1rem" class="flex-center">
                            <i class="fa fa-caret-right ml-1"></i>
                            <h6 class="player-name text-primary ml-0-5">djeguinho delas</h6>
                            <i class="far fa-copy text-muted pointer ml-0-5" v-tooltip="'Copy'"></i>
                        </li>

                        <li style="margin-top: 1rem" class="flex-center">
                            <i class="fa fa-caret-right ml-1"></i>
                            <h6 class="player-name text-danger ml-0-5">F3N1x_</h6>
                            <i class="far fa-copy text-muted pointer ml-0-5" v-tooltip="'Copy'"></i>
                        </li>

                        <li style="margin-top: 1rem" class="flex-center">
                            <i class="fa fa-caret-right ml-1"></i>
                            <h6 class="player-name text-danger ml-0-5">deftzin</h6>
                            <i class="far fa-copy text-muted pointer ml-0-5" v-tooltip="'Copy'"></i>
                        </li>
                    </ul>
                </div>

                <div>
                    <div class="mb-2">
                        <h5>Game Mode</h5>
                        <span>Playground 2v2</span>
                    </div>

                    <div>
                        <h5>Wins At</h5>
                        <span>3 kills</span>
                    </div>
                </div>

                <div>
                    <div class="mb-2">
                        <h5>When</h5>
                        <span>20/05/2016 13:00</span>
                    </div>

                    <div>
                        <h5>Server</h5>
                        <span>BR</span>
                    </div>
                </div>

                <div>
                    <div class="mb-2">
                        <h5>Prize</h5>
                        <span>$ 1.00</span>
                    </div>
                    <div>
                        <h5>Entry Fee</h5>
                        <span>$ 0.25</span>
                    </div>
                </div>

                <div class="flex-column self-stretch flex-justify-end">
                    <button class="btn btn-primary mb-1">How To Play</button>
                    <button class="btn btn-danger">Refund</button>
                </div>

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

        &:not(:last-child) {
            border-bottom: 1px solid $grey;
        }

        .header {
            cursor: pointer;
            padding: 1.5rem 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &:hover {
                background-color: $lighter-grey;
            }

            .fa-chevron-down {
                transition: transform .3s;
                transform: none;

                &.rotate {
                    transform: rotate(-180deg);
                }
            }
        }

        .content {
            padding: 1.5rem 2rem;
            height: auto;
            width: 100%;
            align-items: flex-start;

            .players {
                .list {
                    .player-name {
                        font-size: 1.8rem;
                        letter-spacing: .2px;
                    }
                }
            }
        }
    }
</style>
