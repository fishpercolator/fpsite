<template>
  <div>
    <nav-menu/>
    <div id="logo-container" :class="{invisible: isIndex}"><img v-if="!isIndex" src="~assets/img/logohoriz.svg" alt="Fish Percolator logo" /></div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  computed: {
    isIndex () { return this.$nuxt.$route.name === 'index' }
  }
}
</script>

<style lang="scss">
@import "~assets/settings";

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background: url(~assets/img/bg.jpg) no-repeat center center fixed;
  background-size: cover;
  color: $black;
  font-family: $font;
  font-size: 18px;
  overflow-y: scroll; // force scrollbar to appear even on short pages
}

#logo-container {
  max-width: 60rem;
  margin: 0 auto;
  height: 5rem;
  overflow: hidden;
  transition: height 0.2s ease-in-out;
  &.invisible {
    height: 0;
  }
  img {
    margin-top: 2rem;
    height: 3rem;
  }
}

a {
  color: $link;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

.page-enter-active, .page-leave-active {
  transition-property: opacity;
  transition-duration: .2s;
}

.page-enter-active {
  transition-delay: .2s;
}

.page-enter, .page-leave-active {
  opacity: 0
}

.cta {
  a {
    background: $accent;
    font-size: 1.5rem;
    color: $white;
    font-weight: bold;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    border: 2px solid $white;
    white-space: nowrap;
    &:hover {
      background: linear-gradient(darken($accent, 9), $accent);
      text-decoration: none;
    }
  }
}
</style>
