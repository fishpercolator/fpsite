<template>
  <div id="about">
    <h1>Why we're different</h1>
    <UspDetail v-for="usp in usps" :key="usp.slug" v-bind="usp" />
    <div class="cta">
      <RouterLink to="/contact">
        Get in touch
      </RouterLink>
    </div>
  </div>
</template>

<script>
import usps from '../../assets/usps.json'
import UspDetail from '../../components/UspDetail.vue'

export default {
  name: 'About',
  components: {
    UspDetail
  },
  data () { return { usps } },
  head () {
    var title = 'About'
    var desc = 'What makes Fish Percolator different from all the other software houses out there?'
    return {
      title,
      meta: [
        { name: 'og:title', property: 'og:title', content: `${title} | Fish Percolator` },
        { name: 'twitter:title', content: `${title} | Fish Percolator` },
        { name: 'description', content: desc },
        { name: 'og:description', property: 'og:description', content: desc },
        { name: 'twitter:description', content: desc }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "~assets/mixins.scss";
#about {
  @extend %page;
  .usp-detail {
    @extend %box;
    padding-top: 1em;
    img {
      margin-bottom: 2em;
      @media (max-width: $mobile) {
        max-height: 10em;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1em;
        width: 50%;
        height: auto;
        float: none;
      }
    }
  }
}
</style>
