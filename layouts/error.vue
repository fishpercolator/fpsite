0<template>
  <div id="error">
    <div id="error-inner">
      <h1>Don't drink that coffee!</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/iSxNP-1VpjE" frameborder="0" allowfullscreen />
      <div v-if="error.statusCode == 404" id="error-desc">
        <h2>This page couldn't be found</h2>
        <p>
          Well, this is embarrassing. If you got here by following a link, please <RouterLink to="/contact">
            let us know
          </RouterLink> so we can fix it.
        </p>
      </div>
      <div v-else>
        <h2>Error: {{ error.message }}</h2>
        <p>Yerg! Something went wrong.</p>
      </div>
    </div>
    <div class="cta">
      <RouterLink to="/">
        Go home
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: String,
      required: true
    }
  },
  mounted () {
    console.log(this.error.message)
  }
}
</script>

<style lang="scss">
@import "~assets/global";
@import "~assets/mixins";

#error {
  @extend %page;
  #error-inner {
    @extend %box;
    text-align: center;
    h1 {
      text-align: left;
    }
    iframe {
      margin: 1em;
      border: 1px solid $title;
      border-radius: 5px;
      max-width: 90vw;
    }
    h2 {
      margin-top: 0;
    }
  }
}
</style>
