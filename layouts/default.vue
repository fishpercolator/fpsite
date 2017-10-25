<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Oxygen);
@import "~assets/settings";

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background: url(~assets/img/bg.jpg) no-repeat center center fixed;
  background-size: cover;
  color: $black;
  font-family: 'Oxygen', sans-serif;
  font-size: 18px;
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
    background: $accent;
    font-size: 1.5rem;
    color: $white;
    font-weight: bold;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    border: 2px solid $white;
    white-space: nowrap;
    &:hover {
      background: linear-gradient(darken($accent, 9), $accent);
      text-decoration: none;
    }
  }
}
</style>
