r<template>
  <div id="contact">
    <div id="form">
      <h2>Contact Fish Percolator</h2>
      <p>Lorem ipsum dolor sit amet</p>
      <p><router-link to="/">Go home</router-link></p>
    </div>
  </div>
</template>

<style lang="scss">
@import "~assets/mixins";
#contact {
  @extend %page;
  #form {
    @extend %box;
  }
}
</style>
