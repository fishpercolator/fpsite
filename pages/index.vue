<template>
  <div id="home">
    <img src="~assets/img/logo.svg" id="logo" alt="Fish Percolator" />
    <div id="intro" class="info">
      <img class="feature" v-lazy="home_img_url" :src="$Lazyload.options.loading" alt="App running on an Android phone" />
      <h2>Helping startups get started</h2>
      <p>Fish Percolator is a software development house in Leeds, UK. We specialize in getting startups over the starting line.</p>
      <p>You bring the ideas and expertise in your field, and we'll build the technology you need to take your business to market.</p>
      <p>Unlike some other firms, we're with you all the way: our software is designed to be scalable and maintainable, and we can empower you with the tools and skills you need to keep your product alive.</p>
      <a class="award" href="http://www.nationalfreelancersday.com/blog/finalists-announced-ipse-freelancer-year-awards-2017" target="_blank" rel="noopener"><img v-lazy="award_img_url" :src="$Lazyload.options.loading" alt="ipse Freelancer Awards 2017, Finalist: Inspire" /></a>
    </div>
    <div class="cta">
      <router-link to="/contact">Get in touch</router-link>
    </div>
    <div id="usps" class="info">
      <h2>Why we're different</h2>
      <div class="bullets">
        <bullet v-for="usp in usps" :key="usp.slug" v-bind="usp" />
      </div>
    </div>
    <div class="cta">
      <router-link to="/about">See all</router-link>
    </div>
    <div id="clients" class="info">
      <h2>Our clients &amp; partners include</h2>
      <div class="logos">
        <client v-for="client in clients" :key="client.slug" v-bind="client" />
      </div>
    </div>
    <div class="cta">
      <router-link to="/projects">View our portfolio</router-link>
    </div>
  </div>
</template>

<script>
import clients from '../assets/clients.json'
import usps from '../assets/usps.json'

import Client from '../components/Client.vue'
import UspBullet from '../components/UspBullet.vue'

export default {
  name: 'home',
  components: {
    client: Client,
    bullet: UspBullet
  },
  data () {
    return {
      clients,
      usps,
      home_img_url: require('~/assets/img/home.png'),
      award_img_url: require('~/assets/img/award.svg')
    }
  }
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
    @media (max-width: $mobile) {
      margin-top: 4em;
      margin-bottom: 2em;
    }
  }
  a.award {
    img {
      display: block;
      margin: 0 auto 1em auto;
      max-height: 3.5em;
    }
  }
  .info {
    @extend %box;
  }
  #clients .logos, #usps .bullets {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
