<template>
    <div class="home">
        <div class="welcome">
            <h3>Welcome to the</h3>
            <h1>RAVEN'S DEN</h1>
            <v-btn color="primary" round large @click="$router.push('/register')">JOIN OUR OPEN ALPHA</v-btn>
        </div>
        <div class="how-to">
            <div class="ball">
                <h2>#1</h2>
                <h5>Join a custom match</h5>
            </div>
            <div class="line"></div>
            <div class="ball">
                <h2>#2</h2>
                <h5>Get that VICTORY ROLAYE</h5>
            </div>
            <div class="line"></div>
            <div class="ball">
                <h2>#3</h2>
                <h5>Win cash prizes</h5>
            </div>
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
    @import "~@variables";

    .home {
        position: relative;

        .how-to {
            display: flex;
            align-items: center;
            position: absolute;
            top: 30rem;
            left: 50rem;

            .ball {
                height: 25rem;
                width: 25rem;
                flex: 0 0 25rem;
                border-radius: 50%;
                border: .5rem solid $grey;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: $white;
            }

            .line {
                width: 5rem;
                border-bottom: .5rem solid $grey;
            }
        }

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
