<template>
    <div class="match">
        <div class="content">
            <h1>08:00</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam blanditiis corporis culpa eligendi
            in
            incidunt molestiae nobis nulla perferendis possimus quae sed sunt tempore, ullam unde vel veritatis? Illum?
        </div>
        <div class="shadow"></div>
    </div>
</template>

<script>
    export default {
        name: "Match"
    }
</script>

<style lang="scss" scoped>
    @import "~@variables";

    .match {
        transform: rotate(-1deg) skew(-15deg);
        background-color: $yellow;
        box-shadow: $shadow;
        height: 15rem;
        padding: 4rem 5%;

        .content {
            transform: rotate(1deg) skew(15deg);
        }
    }
</style>
