<template>
  <div class="bullet-outer">
    <div class="bullet" @click="modalShown = true">
      <img :src="image" :alt="img_desc" />
      <h3>{{name}}</h3>
    </div>
    <div class="modal" v-if="modalShown" @click="modalShown = false">
      <div class="modal-content" @click.stop="">
        <div class="close" @click="modalShown = false">×</div>
        <img :src="image" :alt="img_desc" />
        <div>
          <h2>{{name}}</h2>
          <markdown v-bind="markdownProps">{{description}}</markdown>
        </div>
      </div>
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
      modalShown: false,
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
@import "~assets/settings";
.bullet {
  width: 10em;
  height: 10em;
  text-align: center;
  transition: all 0.2s ease-in-out;
  margin: 1em;
  @media (max-width: $mobile) {
    margin: 1em 0em;
  }
  img {
    width: 10em;
    height: 7em;
    object-fit: scale-down;
  }
  h3 {
    margin-top: 0.5em;
    font-size: 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
}
#home .bullet-outer {
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparentize($black, 0.7);
    .modal-content {
      position: relative;
      margin: 15% auto;
      width: 80%;
      min-height: 15em;
      border-radius: 0.5em;
      background: $white;
      padding: 1em;
      @media (max-width: $mobile) {
        max-height: 75%;
        overflow: auto;
      }
      img {
        height: 14em;
        float: left;
        margin-right: 1em;
        margin-bottom: 10em;
        @media (max-width: $mobile) {
          display: none;
        }
      }
      h2 {
        border-bottom: none;
        padding: 0;
      }
      blockquote {
        font-style: italic;
        color: $accent;
        margin-left: 0;
        margin-right: 0;
      }
      .close {
        position: absolute;
        font-size: 2em;
        line-height: 0.5em;
        top: 0.5rem;
        right: 0.5rem;
        cursor: pointer;
      }
    }
  }
}
</style>
