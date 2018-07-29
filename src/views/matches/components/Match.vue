<template>
    <li class="match">
        <div class="header" @click="expand = !expand">
            <div class="">Today, 22:00 - In 12 minutes</div>
            <span><span class="text-bold">1v1</span></span>
            <i class="fa fa-chevron-down"
               :class="{rotate: expand}"></i>
        </div>

        <transition name="content">
            <div v-if="expand" class="content flex-space-between flex-end">
                <div class="players">
                    <h5>Players</h5>
                    <ul class="list">
                        <li style="margin-top: 1rem" class="flex-center">
                            <div class="icon-wrapper">
                                <i class="fa fa-caret-right" style="margin-right: .5rem;"></i>
                            </div>
                            <h6 style="margin-right: .5rem;" class="player-name text-primary">WRX Raupp</h6>
                            <!--<div class="icon-wrapper">-->
                            <!--&lt;!&ndash;<i class="fa fa-copy text-muted"></i>&ndash;&gt;-->
                            <!--</div>-->
                        </li>

                        <li style="margin-top: 1rem" class="flex-center">
                            <div class="icon-wrapper">
                                <i class="fa fa-caret-right" style="margin-right: .5rem;"></i>
                            </div>
                            <h6 style="margin-right: .5rem;" class="player-name text-danger">djeguinho delas</h6>
                            <div class="icon-wrapper">
                                <i class="far fa-copy text-muted pointer"></i>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="">
                    <div class="mb-2">
                        <h5>Game Mode</h5>
                        <span>Playground 1v1</span>
                    </div>

                    <div class="">
                        <h5>Wins At</h5>
                        <span>3 kills</span>
                    </div>
                </div>

                <div class="server">
                    <div class="mb-2">
                        <h5>When</h5>
                        <span>20/05/2016 13:00</span>
                    </div>

                    <div class="">
                        <h5>Server</h5>
                        <span>BR</span>
                    </div>
                </div>

                <div class="">
                    <div class="mb-2">
                        <h5>Prize</h5>
                        <span>$ 0.50</span>
                    </div>
                    <div>
                        <h5>Entry Fee</h5>
                        <span>$ 0.25</span>
                    </div>
                </div>

                <div class="flex-column flex-space-between self-stretch">
                    <!--<button class="btn btn-primary">Set Results</button>-->
                    <button class="btn btn-primary">How To Play</button>
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

    .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 2.5rem;
        width: 2.5rem;
    }

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
                    }
                }
            }
        }
    }
</style>
