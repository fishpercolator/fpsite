<template>
</template>

<script>
// Was URL on old FP site - redirect to closest equivalent
export default {
  fetch ({params, redirect}) {
    redirect(301, '/about')
  }
}
</script>
