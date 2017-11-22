<template>
  <div class="usp-detail">
    <img :src="image" :alt="img_desc" />
    <div>
      <h2>{{name}}</h2>
      <div v-html="description" @click="handleLink"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['slug', 'name', 'img_desc', 'description'],
  computed: {
    image () {
      return `/usps/${this.slug}.svg`
    }
  },
  methods: {
    // Make sure any internal links in the HTML are passed to the router
    handleLink (e) {
      if (e.target && e.target.tagName === 'A' && e.target.href && e.target.host === location.host) {
        e.preventDefault()
        this.$router.push(e.target.pathname)
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/settings';

.usp-detail {
  display: flex;
  justify-content: center;
  @media (max-width: $mobile) {
    flex-wrap: wrap;
  }
  img {
    width: 14em;
    object-fit: scale-down;
    margin: 1em;
    @media (max-width: $mobile) {
      display: none;
    }
  }
  h2 {
    color: $title;
    border-bottom: none;
    padding: 0;
    margin: 0 1rem;
  }
  blockquote {
    font-style: italic;
    color: $accent;
    margin-left: 0;
    margin-right: 0;
    padding: 0 1rem;
  }
}
</style>
