<template>
  <form id="list-form" :action="mcUrl" method="post" name="mc-embedded-subscribe-form" target="_blank" novalidate>
    <p class="disclaimer">
      We send out emails about once every 3 months with links to cool stuff we're doing, things we've seen and technology/productivity tips. You can unsubscribe at any time.
    </p>
    <div class="elements">
      <label for="list-form__email" class="sr-only">Your email address</label>
      <input id="list-form__email" v-model="email" type="email" name="EMAIL" placeholder="Your email address" required>
      <div class="bot-trap" aria-hidden="true">
        <input type="text" :name="mcBotTrap" tabindex="-1" value="">
      </div>
      <button>
        <img src="~assets/img/subscribe.svg" alt="Subscribe symbol">
        Subscribe
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      mcUrl: 'https://fishpercolator.us7.list-manage.com/subscribe/post?u=c5bb35428be4364099111e38a&id=862e59a52b',
      mcBotTrap: 'b_c5bb35428be4364099111e38a_862e59a52b'
    }
  }
}
</script>

<style lang="scss">
@import "~assets/form";
#list-form {
  @extend %fp-form;
  .elements {
    flex-direction: row;
    padding: 0 1rem;
    margin: 1em auto;
    .bot-trap {
      position: absolute;
      left: -500px;
    }
    input {
      margin: 0;
      border-bottom-color: transparentize($accent, 0.6);
      &:focus {
        border-bottom-color: $accent;
      }
    }
    button {
      margin-bottom: 0;
      background: $accent;
      &:hover {
        background: linear-gradient(darken($accent, 9), $accent);
      }
    }
  }
}
</style>
