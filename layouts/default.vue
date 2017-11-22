<template>
  <div>
    <nav-menu/>
    <logo />
    <nuxt/>
    <contact-banner/>
  </div>
</template>

<script>
export default {
  head () {
    return {
      titleTemplate: '%s | Fish Percolator'
    }
  }
}
</script>

<style lang="scss">
@import "~assets/global";
</style>
