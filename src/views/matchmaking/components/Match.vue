<template>
    <div class="match">
        <div class="content">
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
        $polygon: polygon(4% 10%, 100% 0, 96% 75%, 36% 87%, 90% 84%, 0 100%);
        $height: 150px;

        position: relative;
        width: 100%;
        height: $height;


        > * {
            width: 100%;
            -webkit-clip-path: $polygon;
            clip-path: $polygon;
        }

        .content {
            height: 100%;
            background: $yellow;
            padding: 4rem 5rem 1rem 8.5rem;
        }

        .shadow {
            content: "";
            position: absolute;
            z-index: -1;
            height: $height;
            left: 3px;
            top: 3px;

            background: rgba($dark-grey, .5);
            filter: blur(35rem);
        }
    }
</style>
