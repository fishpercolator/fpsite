<template>
  <form class="contact-form" :action="endpoint" method="POST">
    <div v-if="sent" class="message">Thanks for your message! We'll be in touch shortly.</div>
    <div class="elements" v-else>
      <label for="name">
        <span :class="{visible: name}">Name</span>
        <input type="text" name="name" v-model="name" id="name" placeholder="Name">
      </label>
      <label for="email">
        <span :class="{visible: email}">Email</span>
        <input type="email" name="_replyto" v-model="email" id="email" placeholder="Email">
      </label>
      <label for="message">
        <span :class="{visible: message}">Your message</span>
        <textarea name="message" v-model="message" id="message" placeholder="Your message"></textarea>
      </label>
      <button @click.prevent="submit" :disabled="sending">
        <img src="~assets/img/send.svg" alt="Paper aeroplane" />
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
      margin: 0 0.5em 1em 0.5em;
      span {
        display: block;
        height: 0;
        font-size: 0.9rem;
        line-height: 1.1rem;
        font-weight: bold;
        transition: height 0.2s ease-in-out;
        overflow: hidden;
        &.visible {
          height: 1.1rem;
        }
      }
    }
    input, textarea {
      display: block;
      width: calc(100% - 1em);
      background: transparentize($black, 0.9);
      border: none;
      border-bottom: 2px solid transparentize($title, 0.6);
      padding: 0.5em;
      margin-top: 0.5em;
      font-size: 1rem;
      font-family: $font;
      &:focus {
        outline: none;
        border-bottom-color: $title;
      }
    }
    textarea {
      min-height: 4em;
    }
    button {
      background: $title;
      color: $white;
      border: none;
      border-radius: 3px;
      padding: 0.5em;
      font-size: 1em;
      margin: 0 0.5em 0.5em 0.5em;
      cursor: default;
      img {
        height: 1em;
      }
      &:hover {
        background: linear-gradient(darken($title, 9), $title);
        text-decoration: none;
      }
    }
  }
  .message {
    margin: 1em 0.5em;
    font-weight: bold;
    color: $accent;
  }
}
</style>
