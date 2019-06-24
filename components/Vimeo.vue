<template>
  <div class="vimeo">
    <div class="vimeo__container">
      <iframe :src="url" class="vimeo__iframe" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    upstream_id: {
      type: String,
      required: true
    }
  },
  computed: {
    url () {
      return `https://player.vimeo.com/video/${this.upstream_id}?color=a7efec&title=0&portrait=0&byline=0`
    }
  }
}
</script>

<style lang="scss">
.vimeo__container {
  padding: 56.25% 0 0 0;
  position: relative;
}
.vimeo__iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
