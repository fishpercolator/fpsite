<template>
  <a class="techlogo" :href="url">
    <img v-lazy="logo" :src="$Lazyload.options.loading" :alt="logo_name" width="90" height="90">
    <h3>{{ name }}</h3>
  </a>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    logo () {
      return `/techs/${this.slug}.png`
    },
    logo_name () {
      return `${this.name} logo`
    }
  }
}
</script>

<style lang="scss">
@import "~assets/settings";
.techlogo {
  display: block;
  text-align: center;
  width: 5em;
  height: 7em;
  margin: 0.5em;
  transition: all 0.2s ease-in-out;
  img {
    width: 5em;
    height: 5em;
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
