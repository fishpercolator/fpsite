<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import "~assets/settings";

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background: url(~assets/img/bg.jpg);
  background-size: cover;
  background-attachment: fixed;
  color: $black;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  overflow-y: scroll; // force scrollbar to appear even on short pages
}

a {
  color: $link;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

.page-enter-active, .page-leave-active {
  transition-property: opacity;
  transition-duration: .2s;
}

.page-enter-active {
  transition-delay: .2s;
}

.page-enter, .page-leave-active {
  opacity: 0
}

.cta {
  a {
    background: linear-gradient($accent, lighten($accent, 18));
    font-size: 1.5rem;
    color: $black;
    font-weight: bold;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    border: 1px solid transparentize($black, 0.8);
    &:hover {
      background: linear-gradient(darken($accent, 9), lighten($accent, 9));
      text-decoration: none;
    }
  }
}
</style>
