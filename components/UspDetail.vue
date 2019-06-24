<template>
  <div class="usp-detail">
    <img :src="image" :alt="imgDesc">
    <div>
      <h2>{{ name }}</h2>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div @click="handleLink" v-html="description" />
    </div>
  </div>
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
    imgDesc: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
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
  align-items: center;
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
