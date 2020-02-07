<template>
  <div class="lead-forensics">
    <script type="text/javascript" :src="`https://secure.hiss3lark.com/js/${lfid}.js`" />
    <noscript><img alt="" :src="`https://secure.hiss3lark.com/${lfid}.png`" style="display:none;" /></noscript>
  </div>
</template>

<script>
export default {
  props: {
    lfid: {
      type: String,
      required: true
    }
  }
}
</script>
