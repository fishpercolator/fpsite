Adapted from https://codepen.io/bennettfeely/pen/qRJOZJ

<template>
  <div id="logo-container" :class="{invisible: $route.fullPath == '/'}">
    <img src="~assets/img/logohoriz.svg" alt="Fish Percolator logo" />
  </div>
</template>

<style lang="scss">
#logo-container {
  max-width: 60rem;
  margin: 0 auto;
  height: 5.5rem;
  overflow: hidden;
  transition: height 0.2s ease-in-out;
  &.invisible {
    height: 0;
  }
  img {
    margin-top: 2.5rem;
    margin-left: 1rem;
    height: 3rem;
  }
}
</style>
