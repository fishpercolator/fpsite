<template>
  <div id="home">
    <img src="~assets/img/logo.svg" id="logo" alt="Fish Percolator" />
    <div id="intro" class="info">
      <h2>Helping startups get started</h2>
      <p>Fish Percolator is a software development house in Leeds, UK. We specialize in getting startups over the starting line.</p>
      <p>You bring the ideas and expertise in your field, and we'll build the technology you need to take your business to market.</p>
      <p>Unlike some other firms, we're with you all the way: our software is designed to be scalable and maintainable, and we can empower you with the tools and skills you need to keep your product alive.</p>
    </div>
    <div class="cta">
      <router-link to="/contact">Contact us</router-link>
    </div>
    <div id="clients" class="info">
      <h2>Our clients</h2>
      <ul>
        <li><a href="https://www.noiiz.com/">Noiiz</a></li>
        <li><a href="http://www.leeds.gov.uk/">Leeds City Council</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss">
@import "~assets/mixins";
#home {
  @extend %page;
  img#logo {
    width: 30em;
    max-width: 90vw;
    margin-top: 5em;
    margin-bottom: 5em;
  }
  .info {
    @extend %box;
  }
}
</style>
