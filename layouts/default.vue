<template>
  <div>
    <NavMenu />
    <Logo />
    <!-- eslint-disable-next-line vue/component-name-in-template-casing -->
    <nuxt />
    <ContactBanner />
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import Logo from '../components/Logo.vue'
import ContactBanner from '../components/ContactBanner.vue'

export default {
  components: {
    NavMenu: Menu,
    Logo,
    ContactBanner
  },
  data () {
    return {
      lfid: process.env.leadForensicsID
    }
  },
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
