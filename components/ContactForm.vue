<template>
  <form class="contact-form" :action="endpoint" method="POST">
    <div v-if="sent" class="message">
      Thanks for your message! We'll be in touch shortly.
    </div>
    <div v-else class="elements">
      <label for="name">
        <span :class="{visible: name}">
          Name
        </span>
        <input id="name" v-model="name" type="text" name="name" placeholder="Name">
      </label>
      <label for="email">
        <span :class="{visible: email}">
          Email
        </span>
        <input id="email" v-model="email" type="email" name="_replyto" placeholder="Email">
      </label>
      <label for="message">
        <span :class="{visible: message}">
          Your message
        </span>
        <textarea id="message" v-model="message" name="message" placeholder="Your message" />
      </label>
      <button :disabled="sending" @click.prevent="submit">
        <img src="~assets/img/send.svg" alt="Paper aeroplane" width="18" height="18">
        Send
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      name: '',
      email: '',
      message: '',
      endpoint: 'https://formspree.io/f/mnqenlpv',
      sending: false,
      sent: false
    }
  },
  methods: {
    submit () {
      this.sending = true
      axios.post(this.endpoint, {
        name: this.name,
        _replyto: this.email,
        message: this.message
      })
        .then(() => {
          this.sent = true
          this.sending = false
        })
        .catch((error) => {
          console.log(error)
          this.sending = false
          alert('Sorry - something went wrong')
        })
    }
  }
}
</script>

<style lang="scss">
@import "~assets/form";

.contact-form {
  @extend %fp-form;
  margin: 0.5em;
}
</style>
