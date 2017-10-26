<template>
  <div id="contact">
    <div id="form">
      <h2>Contact Fish Percolator</h2>
      <contact-form />
    </div>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'

export default {
  components: {
    'contact-form': ContactForm
  }
}
</script>

<style lang="scss">
@import "~assets/mixins";
#contact {
  @extend %page;
  #form {
    @extend %box;
  }
}
</style>
