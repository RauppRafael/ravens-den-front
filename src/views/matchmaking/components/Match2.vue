<template>
    <div class="match">
        <div class="content">
            <div class="date-time">
                <h4 class="date">TODAY</h4>
                <!--<p class="text-small">20/05/2018</p>-->
                <h3 class="time">08:00</h3>
            </div>
        </div>
        <div class="shadow"></div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    @import "~@variables";
    @import "~@mixins";

    .match {
        @include vertical-center;

        transform: rotate(-1deg) skew(-15deg);
        background-color: $yellow;
        box-shadow: $shadow;
        height: 15rem;
        padding: 4rem 5%;

        &:not(:last-child) {
            margin-bottom: 2.5rem;
        }

        .content {
            transform: rotate(1deg) skew(15deg);
        }

        .date-time {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 10rem;

            .date {
                /*line-height: 1rem;*/
            }
        }
    }
</style>
