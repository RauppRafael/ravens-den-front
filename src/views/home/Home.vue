<template>
    <div class="home">
        <div class="welcome">
            <h3>Welcome to the</h3>
            <!--<h2>RAVEN'S CAVE</h2>-->
            <h1>RAVEN'S DEN</h1>
            <h3>Coming soon</h3>
        </div>
        <img src="/dist/images/raven.png" alt="Raven Image" class="raven">
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style lang="scss" scoped>
    .home {
        position: relative;

        .welcome {
            position: absolute;
            top: 6rem;
            left: 47rem;
            width: 50rem;
        }

        .raven {
            position: absolute;
            top: 5rem;
            left: -10rem;
        }

    }
</style>
