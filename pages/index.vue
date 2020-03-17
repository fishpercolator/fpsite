<template>
  <div id="home">
    <img id="logo" src="~assets/img/logo.svg" alt="Fish Percolator">
    <div id="intro" class="info">
      <h2>Changing the world in small ways with technology</h2>
      <Vimeo class="intro__video" upstream-id="337500213" />
      <p>We help you take your tech product dreams and turn them into reality.</p>
      <p>Our collaborative software development process has helped dozens of tech startups and spinoffs get their unique ideas in front of their customers as a minimum viable product (MVP) since 2015.</p> 
      <p>We're with you all the way: a Fish Percolator MVP isn't a throwaway prototype &mdash; they're designed to be scalable and maintainable, and we can empower you with the tools and skills you need to keep your product alive.</p>
      <p>Our mission is to <b>change the world in small ways through the application of technology</b>. Does that match your product idea? Let's work together!</p>
      <a class="award" href="https://www.ipse.co.uk/our/news-listing/ipse-announces-2017-awards-finalists-.html">
        <img v-lazy="award_img_url" :src="$Lazyload.options.loading" alt="ipse Freelancer Awards 2017, Finalist: Inspire">
      </a>
    </div>
    <div class="cta">
      <RouterLink to="/contact">
        Get in touch
      </RouterLink>
    </div>
    <div id="list" class="info">
      <h2>Get our quarterly emails</h2>
      <ListForm />
    </div>
    <div id="usps" class="info">
      <h2>Why we're different</h2>
      <div class="bullets">
        <UspBullet v-for="usp in usps" :key="usp.slug" v-bind="usp" />
      </div>
    </div>
    <div class="cta">
      <RouterLink to="/about">
        See all
      </RouterLink>
    </div>
    <div id="clients" class="info">
      <h2>Our clients &amp; partners include</h2>
      <div class="logos">
        <Client v-for="client in clients" :key="client.slug" v-bind="client" />
      </div>
    </div>
    <div class="cta">
      <RouterLink to="/projects">
        View our portfolio
      </RouterLink>
    </div>
    <div id="tech" class="info">
      <h2>Tech we love</h2>
      <div class="logos">
        <TechLogo v-for="tech in techs" :key="tech.slug" v-bind="tech" />
      </div>
    </div>
    <div class="cta">
      <RouterLink to="/contact">
        Contact us
      </RouterLink>
    </div>
  </div>
</template>

<script>
import clients from '../assets/clients.json'
import usps from '../assets/usps.json'
import techs from '../assets/techs.json'

import Client from '../components/Client.vue'
import UspBullet from '../components/UspBullet.vue'
import TechLogo from '../components/TechLogo.vue'
import ListForm from '../components/ListForm.vue'
import Vimeo from '../components/Vimeo.vue'

export default {
  name: 'Home',
  components: {
    Client,
    UspBullet,
    TechLogo,
    ListForm,
    Vimeo
  },
  data () {
    return {
      clients,
      usps,
      techs,
      home_img_url: require('~/assets/img/home.png'),
      award_img_url: require('~/assets/img/award.svg')
    }
  },
  head () {
    var title = 'Fish Percolator'
    var desc = 'Helping startups get started. Web app and software development house in Leeds, UK.'
    return {
      title,
      titleTemplate: undefined,
      meta: [
        { name: 'og:title', property: 'og:title', content: title },
        { name: 'twitter:title', content: title },
        { name: 'description', content: desc },
        { name: 'og:description', property: 'og:description', content: desc },
        { name: 'twitter:description', content: desc }
      ]
    }
  },
  jsonld () {
    let root = 'https://www.fishpercolator.co.uk'
    return [
      {
        '@context': 'http://schema.org',
        '@type': 'Corporation',
        name: 'Fish Percolator',
        url: `${root}/`,
        logo: `${root}/icon.png`,
        foundingDate: '2015-06-01',
        founder: { '@type': 'Person', name: 'Quinn Daley' },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Duke Studios, 3 Sheaf Street',
          addressLocality: 'Leeds',
          postalCode: 'LS10 1HD',
          addressCountry: 'GB'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'mailto:hello@fishpercolator.co.uk',
          telephone: '+44-7963043979'
        },
        sameAs: [
          'https://twitter.com/fishpercolator',
          'https://www.facebook.com/fishpercolator/',
          'https://www.linkedin.com/company/fish-percolator/',
          'https://medium.com/@fishpercolator',
          'https://beta.companieshouse.gov.uk/company/09617660'
        ],
        legalName: 'Fish Percolator Limited',
        isicV4: '6201',
        vatID: 'GB218804800'
      }
    ]
  }
}
</script>

<style lang="scss">
@import "~assets/mixins";
#home {
  @extend %page;
  img#logo {
    width: 30em;
    object-fit: contain;
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
      max-height: 3em;
    }
  }
  .info {
    @extend %box;
  }
  #clients .logos, #usps .bullets, #tech .logos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  #tech .logos {
    padding: 0.5em;
    justify-content: center;
  }
  .intro__video {
    padding: 1em;
    max-width: 640px;
    margin: 0 auto;
  }
}
</style>
