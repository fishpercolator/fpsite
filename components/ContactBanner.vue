<template>
  <div id="contactbanner">
    <div>
      <div>
        <img src="~assets/img/email-w.svg" alt="Envelope" title="Email">
        <a href="mailto:hello@fishpercolator.co.uk">
          hello@fishpercolator.co.uk
        </a>
      </div>
      <div>
        <img src="~assets/img/phone-w.svg" alt="Phone" title="Phone">
        <a href="tel:+447963043979">
          <s>07963 043979</s>
        </a>
      </div>
      <div>
        <img src="~assets/img/twitter-w.svg" alt="Twitter logo" title="Twitter">
        <a href="https://twitter.com/fishpercolator">
          @fishpercolator
        </a>
      </div>
      <div>
        <img src="~assets/img/medium-w.svg" alt="Medium logo" title="Blog on Medium">
        <a href="https://medium.com/@fishpercolator">
          Blog
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "~assets/settings";

#contactbanner {
  background: linear-gradient(lighten($title, 9), $title);
  color: $white;
  font-size: 1em;
  @media (max-width: $mobile) {
    font-size: 0.9em;
  }
  > div {
    margin: 0 auto;
    width: 100vw;
    max-width: 60rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    > div {
      margin: 3px 0.5em;
      height: 1.5em;
      img {
        height: 1.2em;
        margin-bottom: 0.3em;
        margin-right: 0.2em;
        vertical-align: middle;
      }
      a {
        color: $white;
      }
    }
  }
}
</style>
