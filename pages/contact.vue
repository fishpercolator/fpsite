<template>
  <div id="contact">
    <div id="details">
      <h2>Contact Fish Percolator</h2>
      <div class="columns">
        <dl>
          <dt>Address</dt>
          <dd>Duke Studios<br/>3 Sheaf Street<br/>Leeds LS10 1HD</dd>
          <dt>Phone</dt>
          <dd>07963 043979</dd>
          <dt>Email</dt>
          <dd><a href="mailto:hello@fishpercolator.co.uk">hello@fishpercolator.co.uk</a></dd>
          <dt>Twitter</dt>
          <dd><a href="https://twitter.com/fishpercolator" target="_blank">@fishpercolator</a></dd>
          <dt>Facebook</dt>
          <dd><a href="https://www.facebook.com/fishpercolator/" target="_blank">fishpercolator</a></dd>
          <dt>Blog (on Medium)</dt>
          <dd><a href="https://medium.com/@fishpercolator" target="_blank">@fishpercolator</a></dd>
        </dl>
        <iframe id="map" :src="gmapsUrl" allowfullscreen></iframe>
      </div>
    </div>
    <div id="form">
      <h2>or fill in this form</h2>
      <contact-form />
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
        dt {
          margin-top: 1em;
          font-weight: bold;
        }
        dd {
          margin: 0.1em 0;
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
