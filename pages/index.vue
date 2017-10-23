<template>
  <div id="home">
    <img src="~assets/img/logo.svg" id="logo" alt="Fish Percolator" />
    <div id="intro" class="info">
      <img class="feature" src="~assets/img/home.png" alt="App running on an Android phone" />
      <h2>Helping startups get started</h2>
      <p>Fish Percolator is a software development house in Leeds, UK. We specialize in getting startups over the starting line.</p>
      <p>You bring the ideas and expertise in your field, and we'll build the technology you need to take your business to market.</p>
      <p>Unlike some other firms, we're with you all the way: our software is designed to be scalable and maintainable, and we can empower you with the tools and skills you need to keep your product alive.</p>
    </div>
    <div class="cta">
      <router-link to="/contact">Get in touch</router-link>
    </div>
    <div id="clients" class="info">
      <h2>Our clients &amp; partners</h2>
      <div class="logos">
        <client v-for="client in clients" :key="client.slug" v-bind="client"></client>
      </div>
    </div>
    <div class="cta">
      <router-link to="/portfolio">View our portfolio</router-link>
    </div>
  </div>
</template>

<script>
import clients from '../assets/clients.json'
import Client from '../components/Client.vue'

var data = {
  clients
}
export default {
  name: 'home',
  components: {
    client: Client
  },
  data: () => data
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
  #clients .logos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
