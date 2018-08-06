<template>
    <li class="match">
        <div class="header" @click="expand = !expand">

            <div class="">{{date(match.when)}} - {{time(match.when)}} (In 12 minutes)</div>

            <span class="text-bold">{{match.gameMode.name}}</span>

            <i class="fa fa-chevron-down" :class="{rotate: expand}"></i>

        </div>

        <transition name="content">
            <div v-if="expand" class="content flex-space-between">

                <div class="players">
                    <h5>Players</h5>

                    <ul class="list">

                        <li class="flex-center mt-1" v-for="player in match.players">
                            <i class="fa fa-caret-right ml-1"></i>
                            <h6 class="player-name ml-0-5"
                                :class="usernameColor(player)">
                                {{player.username}}
                            </h6>
                            <i class="far fa-copy text-muted pointer ml-0-5"
                               v-if="player.id !== user.id"
                               v-tooltip="'Copy'"></i>
                        </li>

                        <li class="flex-center mt-1" v-if="showInvite">
                            <i class="fa fa-caret-right ml-1"></i>
                            <h6 class="player-name ml-0-5 text-muted">
                                Invite a friend
                            </h6>
                            <i class="far fa-copy text-muted pointer ml-0-5" v-tooltip="'Copy'"></i>
                        </li>

                    </ul>
                </div>

                <div>
                    <div class="mb-2">
                        <h5>Game Mode</h5>
                        <span>{{match.gameMode.name}}</span>
                    </div>

                    <div>
                        <h5>Wins At</h5>
                        <span>3 kills (TODO)</span>
                    </div>
                </div>

                <div>
                    <div class="mb-2">
                        <h5>When</h5>
                        <span>{{formatDate(match.date)}}</span>
                    </div>

                    <div>
                        <h5>Server</h5>
                        <span>{{match.server.region}}</span>
                    </div>
                </div>

                <div>
                    <div class="mb-2">
                        <h5>Prize</h5>
                        <span>$ {{match.entry * match.__meta__.playerCount}}</span>
                    </div>
                    <div>
                        <h5>Entry</h5>
                        <span>$ {{match.entry}}</span>
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
    import date from '@mixins/date'

    export default {
        data() {
            return {
                expand: false,
            }
        },

        props: {
            dataMatch: {
                required: true,
                type: Object,
            }
        },

        computed: {
            match() {
                return this.dataMatch
            },

            user() {
                return this.$store.state.user
            },

            userWithTeam() {
                return _.find(this.playersInMatch,
                    (player) => {
                        return player.id === this.user.id
                    }
                )
            },

            playersInMatch() {
                return this.match.players
            },

            playersInTeam() {
                return _.filter(this.playersInMatch,
                    (player) => {
                        return player.pivot.team === this.userWithTeam.pivot.team
                    }
                )
            },

            showInvite() {
                let canJoinTeam = this.playersInTeam && this.playersInTeam.length < this.match.gameMode.teamSize
                let canJoinMatch = this.match.__meta__.playerCount < this.match.gameMode.maxPlayers
                return canJoinMatch && canJoinTeam
            },

            inviteUrl() {
                return 'example.com'
            },
        },

        methods: {
            usernameColor(player) {
                if (player.id === this.user.id)
                    return 'text-green'

                if (this.userWithTeam.pivot.team && player.pivot.team)
                    if (this.userWithTeam.pivot.team === player.pivot.team)
                        return 'text-primary'

                return 'text-danger'
            },
        },

        mixins: [date]
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
