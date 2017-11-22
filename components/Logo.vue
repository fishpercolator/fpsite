<template>
  <div id="logo-container" :class="{invisible: $route.fullPath == '/'}">
    <router-link to="/"><img src="~assets/img/logohoriz.svg" alt="Fish Percolator logo" /></router-link>
  </div>
</template>

<style lang="scss">
#logo-container {
  max-width: 60rem;
  margin: 0 auto;
  height: 5.5rem;
  overflow: hidden;
  transition: height 0.1s linear;
  &.invisible {
    height: 0;
  }
  img {
    margin-top: 2.5rem;
    margin-left: 1rem;
    max-height: 3rem;
    max-width: 60vw;
  }
}
</style>
