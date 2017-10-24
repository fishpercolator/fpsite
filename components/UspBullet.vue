<template>
  <div class="bullet">
    <img :src="image" />
    <h3>{{name}}</h3>
  </div>
</template>

<script>
export default {
  props: ['slug', 'name'],
  computed: {
    image: function () {
      return `/usps/${this.slug}.svg`
    }
  }
}
</script>

<style lang="scss">
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
</style>
