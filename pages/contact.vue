<template>
  <div id="contact">
    <div id="form">
      <h2>Contact us</h2>
      <contact-form />
    </div>
    <div id="details">
      <h2>All the details</h2>
      <div class="columns">
        <dl>
          <dt><img src="~assets/img/email.svg" alt="Envelope"> Email</dt>
          <dd><a href="mailto:hello@fishpercolator.co.uk">hello@fishpercolator.co.uk</a></dd>
          <dt><img src="~assets/img/phone.svg" alt="Phone"> Phone</dt>
          <dd><a href="tel:+447963043979">07963 043979</a></dd>
          <dt><img src="~assets/img/twitter.svg" alt="Twitter logo"> Twitter</dt>
          <dd><a href="https://twitter.com/fishpercolator">@fishpercolator</a></dd>
          <dt><img src="~assets/img/facebook.svg" alt="Thumbs up"> Facebook</dt>
          <dd><a href="https://www.facebook.com/fishpercolator/">fishpercolator</a></dd>
          <dt><img src="~assets/img/medium.svg" alt="Medium logo"> Blog (on Medium)</dt>
          <dd><a href="https://medium.com/@fishpercolator">@fishpercolator</a></dd>
          <dt><img src="~assets/img/address.svg" alt="Signpost"> Address</dt>
          <dd><address><a href="http://duke-studios.com/">Duke Studios</a><br/>3 Sheaf Street<br/>Leeds LS10 1HD</address><p><em>Come visit us! <a href="http://sheafstcafeteria.com/">The café here</a> is amazing.</em></p></dd>
          <dt><img src="~assets/img/company.svg" alt="Office block"> Company info</dt>
          <dd>Fish Percolator Limited<br/>England &amp; Wales company #9617660<br/>VAT number GB 218804800</dd>
        </dl>
        <iframe id="map" :src="gmapsUrl" allowfullscreen></iframe>
      </div>
    </div>
    <div class="cta">
      <router-link to="/">Back to home</router-link>
    </div>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'

export default {
  data () {
    return {
      gmapsKey: 'AIzaSyBWzXMR3j8Zc4mDBYIBHpw7DDLNQo12Qtc'
    }
  },
  computed: {
    gmapsUrl () { return `https://www.google.com/maps/embed/v1/place?key=${this.gmapsKey}&q=Duke+Studios,+Leeds` }
  },
  components: {
    'contact-form': ContactForm
  }
}
</script>

<style lang="scss">
@import "~assets/mixins";
#contact {
  @extend %page;
  #details {
    @extend %box;
    .columns {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      dl {
        margin: 1em;
        line-height: 1.3em;
        dt {
          margin-top: 1em;
          font-weight: bold;
          img {
            position: relative;
            height: 1em;
            top: 0.1em;
          }
        }
        dd {
          margin: 0.1em 0;
          address {
            font-style: normal;
          }
        }
      }
      #map {
        min-height: 40em;
        min-width: 30em;
        border: 1px solid mix(white, $title, 50%);
        border-radius: 0.5em;
        margin: 0.5em;
        @media (max-width: $mobile) {
          min-height: 15em;
          width: 100%;
          min-width: 0;
        }
      }
    }
  }
  #form {
    @extend %box;
  }
}
</style>
