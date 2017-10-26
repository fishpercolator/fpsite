<template>
  <form class="contact-form" :action="endpoint" method="POST">
    <div v-if="sent" class="message">Thanks for your message! We'll be in touch shortly.</div>
    <div class="elements" v-else>
      <label for="name">
        Name
        <input type="text" name="name" v-model="name">
      </label>
      <label for="_replyto">
        Email
        <input type="email" name="_replyto" v-model="email">
      </label>
      <label for="message">
        Your message:
        <textarea name="message" v-model="message"></textarea>
      </label>
      <button @click.prevent="submit" :disabled="sending">Send</button>
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
      endpoint: 'https://formspree.io/hello@fishpercolator.co.uk',
      sending: false,
      sent: false
    }
  },
  methods: {
    submit (event) {
      this.sending = true
      axios.post(this.endpoint, {
        name: this.name,
        _replyto: this.email,
        message: this.message
      })
        .then((response) => {
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
@import "~assets/settings";
.contact-form {
  margin: 0.5em;
  .elements {
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 1em;
    }
    input, textarea {
      border: 2px solid $title;
      border-radius: 3px;
      font-size: 0.8em;
      padding: 0.5em;
    }
    textarea {
      display: block;
      width: calc(100% - 1em - 6px);
      height: 10em;
      margin-top: 0.5em;
    }
    button {
      background: $title;
      color: $white;
      border: none;
      border-radius: 3px;
      padding: 0.5em;
      font-size: 1em;
    }
  }
}
</style>
