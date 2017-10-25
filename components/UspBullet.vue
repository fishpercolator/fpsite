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
          <p>{{description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['slug', 'name', 'img_desc'],
  data: function () { return {modalShown: false} },
  computed: {
    image: function () {
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
.bullet-outer {
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
      max-height: 10em;
      border-radius: 0.5em;
      background: $white;
      padding: 1em;
      display: flex;
      img {
        width: 10em;
        object-fit: scale-down;
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
