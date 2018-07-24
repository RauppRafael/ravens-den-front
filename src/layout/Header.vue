<template>
  <header class="header">
    <h1>Fortnite</h1>
    <router-link to="#" class="active">Matchmaking</router-link>
    <router-link to="#">History</router-link>
    <router-link to="#">Jobs</router-link>
    <router-link to="#">
      <!--<i class="fas fa-user"></i> -->
      Profile
    </router-link>
    <router-link to="#" class="yellow">Something</router-link>
  </header>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  @import "~@variables";

  .header {
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    width: 100vw;
    height: $header-height;
    padding: 0 0 0 1.5rem;

    background-color: $dark-grey;
    color: $white;
    box-shadow: $shadow;

    > * {
      display: flex;
      align-items: center;
      text-transform: uppercase;
    }

    a {
      font-size: 1.4rem;
      color: $light-grey;
      text-decoration: none;

      &.active {
        border-bottom: 5px solid $yellow;
      }
    }

    .yellow {
      padding: 1rem;
      background-color: $yellow;
      color: black;
    }
  }
</style>
