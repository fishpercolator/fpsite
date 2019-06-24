<template>
  <div class="vimeo">
    <div class="vimeo__container">
      <iframe :src="url" class="vimeo__iframe" frameborder="0" allow="autoplay; fullscreen" allowfullscreen />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    upstreamId: {
      type: String,
      required: true
    }
  },
  computed: {
    url () {
      return `https://player.vimeo.com/video/${this.upstreamId}?color=a7efec&title=0&portrait=0&byline=0`
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
