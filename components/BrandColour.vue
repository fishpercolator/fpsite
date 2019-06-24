<template>
  <div class="brand__colour" :class="{'brand__colour--dark': colorObj.isDark()}" :style="{'background-color': colour}">
    <div class="brand__colour__name">
      {{ name }}
    </div>
    <div class="brand__colour__hex">
      {{ colour }}
    </div>
    <div class="brand__colour__hsl">
      {{ colorObj.hsl().string(0) }}
    </div>
  </div>
</template>

<script>
import Color from 'color'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    colour: {
      type: String,
      required: true
    }
  },
  computed: {
    colorObj () {
      return Color(this.colour)
    }
  }
}
</script>

<style lang="scss">
.brand__colour {
  width: 12rem;
  height: 8rem;
  margin: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.brand__colour--dark {
  color: white;
}
</style>
