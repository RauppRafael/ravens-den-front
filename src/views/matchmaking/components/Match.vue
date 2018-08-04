<template>
    <div class="match flex-column" :style="{'animation-delay': dataAnimationDelay}">

        <div class="content">
            <div class="date-time flex-column flex-center">
                <h4 class="date">{{date}}</h4>
                <h3 class="time">{{time}}</h3>
            </div>

            <div>
                <h5>Players</h5>
                <div class="flex-center">
                    <div>
                        <h6 class="text-right">Current</h6>
                        <h4>{{currentPlayers}}</h4>
                    </div>
                    <h3 class="slash">/</h3>
                    <div>
                        <h6>Max</h6>
                        <h4>{{maxPlayers}}</h4>
                    </div>
                </div>
            </div>

            <div>
                <h5>Entry</h5>

                <div class="flex-center">
                    <div>
                        <h6 class="text-right">&nbsp;</h6>
                        <h4 class="text-right">${{match.entry}}</h4>
                    </div>
                </div>
            </div>

            <div>
                <h5>Prize</h5>
                <div class="flex-center">
                    <div>
                        <h6 class="text-right">Current</h6>
                        <h4>${{currentPrize}}</h4>
                    </div>
                    <h3 class="slash">/</h3>
                    <div>
                        <h6>Max</h6>
                        <h4>${{maxPrize}}</h4>
                    </div>
                </div>
            </div>

            <div class="buttons">
                <button class="btn btn-primary"><h5>RULES</h5></button>

                <button class="btn btn-primary" @click="join" v-if="canJoin">
                    <h5>JOIN</h5>
                </button>

                <router-link tag="button" to="/profile/deposit" class="btn btn-primary" v-else>
                    <h5>ADD FUNDS</h5>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        props: {
            dataMatch: {
                type: Object,
                required: true,
            },
            dataAnimationDelay: {
                type: String,
                default: '0s',
            },
        },

        computed: {
            match() {
                return this.dataMatch
            },

            when() {
                return moment(this.match.when)
            },

            date() {
                const sameWeek = this.when.isSame(moment(), 'week');
                const format = sameWeek ? 'dddd' : 'MMM, D'
                return this.when.format(format)
            },

            time() {
                return this.when.format('HH:mm')
            },

            currentPlayers() {
                return this.match.__meta__.playerCount
            },

            maxPlayers() {
                return this.match.gameMode.maxPlayers
            },

            maxPrize() {
                return this.match.entry * this.maxPlayers
            },

            currentPrize() {
                return this.match.entry * this.currentPlayers
            },

            canJoin() {
                return this.$store.state.balance > this.match.entry
            },
        },

        methods: {
            join() {
                const matchId = this.match.id
                this.$api.matches.join(matchId).then(
                    () => {
                        this.$auth.loadUserData()
                        this.$router.push('/matches#' + matchId)
                    }
                )
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "~@variables";
    @import "~@scss-mixins";

    @mixin rotate {
        transform: rotate(-1deg) skew(-15deg);
    }

    @mixin rotate-inverse {
        transform: rotate(1deg) skew(15deg);
    }

    .match {
        @include rotate;

        background-color: $yellow;
        box-shadow: $shadow;
        height: 15rem;
        padding: 1.8rem 5%;
        animation: fade-in 1s ease-out backwards;

        @keyframes fade-in {
            from {
                transform: translateX(120rem) rotate(-1deg) skew(-15deg);
                opacity: .5;
            }

            to {
                transform: translateX(0) rotate(-1deg) skew(-15deg);
                opacity: 1;
            }
        }

        @keyframes fade-out {
            from {
                transform: translateX(0) rotate(-1deg) skew(-15deg);
                opacity: 1;
            }

            to {
                transform: translateX(120rem) rotate(-1deg) skew(-15deg);
                opacity: .5;
            }
        }

        &:not(:last-child) {
            margin-bottom: 2.5rem;
        }

        .content {
            @include vertical-center;

            justify-content: space-between;

            > * {
                @include rotate-inverse;
                margin: .5rem 1rem;
            }

            .date-time {
                width: 10rem;
            }

            .slash {
                margin: 0 .8rem;
            }

            .buttons {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;

                .btn {
                    @include rotate;

                    width: 15rem;
                    padding: 1rem;
                    text-shadow: $shadow;
                    letter-spacing: .1rem;

                    > * {
                        @include rotate-inverse;
                        @include text-shadow;
                    }

                    &:first-child {
                        margin-bottom: 1rem;
                    }
                }
            }
        }
    }
</style>
