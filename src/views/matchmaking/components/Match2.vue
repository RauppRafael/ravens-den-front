<template>
    <div class="match">
        <div class="content">
            <div class="date-time">
                <h4 class="date">TODAY</h4>
                <h3 class="time">08:00</h3>
            </div>

            <div>
                <h5>Signed Players</h5>
                <h4 style="text-align: right">83/100</h4>
            </div>

            <div>
                <h5>Buy In</h5>
                <h4 style="text-align: right">$0.10</h4>
            </div>

            <div>
                <h5>Current/Max Prize</h5>
                <h4 style="text-align: right">$8.30/$10.00</h4>
            </div>

            <div class="buttons">
                <button class="btn"><h5>RULES</h5></button>
                <button class="btn"><h5>JOIN</h5></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    @import "~@variables";
    @import "~@mixins";

    @mixin rotate {
        transform: rotate(-1deg) skew(-15deg);
    }

    @mixin rotate-inverse {
        transform: rotate(1deg) skew(15deg);
    }

    .buttons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

        > *:first-child {
            margin-bottom: 1rem;
        }
    }

    .btn {
        @include rotate;

        padding: 1rem 5rem;
        box-shadow: $shadow;
        background: $light-blue;
        color: $white;
        text-shadow: $shadow;
        letter-spacing: .1rem;

        > * {
            @include rotate-inverse;
            @include text-shadow;
        }
    }

    .match {
        @include rotate;

        background-color: $yellow;
        box-shadow: $shadow;
        height: 15rem;
        padding: 1.8rem 5%;
        animation: fade-in 1s ease-out;

        .content {
            @include vertical-center;
            > * {
                @include rotate-inverse;
            }

            justify-content: space-between;
        }

        .date-time {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 10rem;
        }

        &:not(:last-child) {
            margin-bottom: 2.5rem;
        }
    }

    @keyframes fade-in {
        from {
            transform: translateX(70rem) rotate(-1deg) skew(-15deg);
            opacity: .5;
        }

        to {
            transform: translateX(0) rotate(-1deg) skew(-15deg) ;
            opacity: 1;

        }
    }
</style>
