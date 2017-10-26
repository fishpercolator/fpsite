<template>
  <form class="contact-form" :action="endpoint" method="POST">
    <div v-if="sent">Thanks for sending!</div>
    <input type="text" name="name" v-model="name">
    <input type="email" name="_replyto" v-model="email">
    <textarea name="message" v-model="message"></textarea>
    <button @click.prevent="submit" :disabled="sending">Send</button>
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
