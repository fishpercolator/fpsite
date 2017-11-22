<template>
  <a class="client-box" :href="url">
    <img v-lazy="logo" :src="$Lazyload.options.loading" :alt="logo_name"/>
    <h3>{{name}}</h3>
  </a>
</template>

<script>
export default {
  props: ['name', 'slug', 'url'],
  computed: {
    logo () {
      return `/clients/${this.slug}.png`
    },
    logo_name () {
      return `${this.name} logo`
    }
  }
}
</script>

<style lang="scss">
@import "~assets/settings";
.client-box {
  display: block;
  text-align: center;
  width: 10em;
  height: 12em;
  margin: 1em;
  @media (max-width: $mobile) {
    margin: 1em 0em;
  }
  transition: all 0.2s ease-in-out;
  img {
    width: 10em;
    height: 10em;
  }
  h3 {
    color: $black;
    margin-top: 0;
    font-size: 1.1rem;
  }
  &:hover {
    transform: scale(1.1);
    text-decoration: none;
  }
}
</style>
