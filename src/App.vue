<template>
  <div id="app">
    <app-header></app-header>
    <transition name="sidebar">
      <app-matchmaking></app-matchmaking>
    </transition>
  </div>
</template>

<script>
  import AppHeader from './layout/Header'
  import AppMatchmaking from '@views/matchmaking/Matchmaking'
  import '@fortawesome/fontawesome-free/css/all.min.css'

  export default {
    components: {
      AppHeader,
      AppMatchmaking,
    },
  }
</script>

<style lang="scss">
  @import "~@scss/reset.scss";
  @import "~@scss/fonts.scss";

  .calendar {
    height: auto !important;
  }

  .sidebar-enter {
    /*transform: translateX(-40rem);*/
    opacity: 0;

    &-to {
      /*transition: transform 2s;*/
      transition: opacity 2s;
    }
  }

  .sidebar-leave {
    &-active {
    }
  }

</style>
