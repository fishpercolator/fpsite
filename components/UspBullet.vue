<template>
  <div class="bullet-outer">
    <div class="bullet" @click="modalShown = true">
      <img v-lazy="image" :src="$Lazyload.options.loading" :alt="imgDesc" width="180" height="126">
      <h3>{{ name }}</h3>
    </div>
    <div v-if="modalShown" class="modal" @click="modalShown = false">
      <div class="modal-content" @click.stop="">
        <div class="close" @click="modalShown = false">
          ×
        </div>
        <UspDetail v-bind="$props" />
      </div>
    </div>
  </div>
</template>

<script>
import UspDetail from './UspDetail.vue'
export default {
  components: {
    UspDetail
  },
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
  data () {
    return {
      modalShown: false
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
  cursor: zoom-in;
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
      min-height: 14em;
      border-radius: 0.5em;
      background: $white;
      padding: 1em;
      @media (max-width: $mobile) {
        max-height: 75%;
        overflow: auto;
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
