<template>
  <div id="brand">
    <div class="brand__section">
      <h1>Brand guidelines</h1>
      <p>Below is a summary of the Fish Percolator brand identity.</p>
    </div>
    <div class="brand__section">
      <h2>Colours</h2>
      <div class="brand__colours">
        <BrandColour v-for="colour in colours" :key="colour.name" v-bind="colour" />
      </div>
    </div>
    <div class="brand__section">
      <h2>Fonts</h2>
      <ul>
        <li>Logo &amp; brand text: <b><a href="https://fonts.google.com/specimen/Paytone+One">Paytone One</a></b></li>
        <li>Body text: <b><a href="https://fonts.google.com/specimen/Oxygen">Oxygen</a></b></li>
      </ul>
    </div>
    <div class="brand__section">
      <h2>Logos</h2>
      <p><a href="https://drive.google.com/drive/folders/0B2nx1tPtDCbNODM5aXR0TWU3bVE?usp=sharing">Open Google Drive folder</a> containing the Fish Percolator logo in various formats.</p>
    </div>
  </div>
</template>

<script>
import BrandColour from '~/components/BrandColour'

export default {
  components: {
    BrandColour
  },
  data () {
    return {
      colours: [
        {colour: '#660080', name: 'primary'},
        {colour: '#333333', name: 'secondary'},
        {colour: '#09a949', name: 'accent'},
        {colour: '#ab9a00', name: 'contrast'},
        {colour: '#111111', name: 'text'},
        {colour: '#6a7ed7', name: 'links'},
        {colour: '#a7efec', name: 'background 1'},
        {colour: '#fff43d', name: 'background 2'}
      ]
    }
  }
}
</script>

<style lang="scss">
@import "~assets/mixins.scss";
#brand {
  @extend %page;
  .brand__section {
    @extend %box;
  }
  .brand__colours {
    margin: 0.5em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}

</style>
