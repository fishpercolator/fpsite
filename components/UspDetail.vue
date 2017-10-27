<template>
  <div class="usp-detail">
    <img :src="image" :alt="img_desc" />
    <div>
      <h2>{{name}}</h2>
      <markdown v-bind="markdownProps">{{description}}</markdown>
    </div>
  </div>
</template>

<script>
import Markdown from 'vue-markdown'

export default {
  props: ['slug', 'name', 'img_desc', 'description'],
  components: {
    markdown: Markdown
  },
  data () {
    return {
      markdownProps: {
        anchorAttributes: {
          target: '_blank'
        }
      }
    }
  },
  computed: {
    image () {
      return `/usps/${this.slug}.svg`
    }
  }
}
</script>

<style lang="scss">
@import '~assets/settings';

.usp-detail {
  img {
    height: 14em;
    width: 12em;
    object-fit: scale-down;
    float: left;
    margin-right: 1em;
    margin-bottom: 10em;
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
  }
}
</style>
