<script>
// Was URL on old FP site - redirect to closest equivalent
export default {
  fetch ({ redirect }) {
    redirect(301, '/about')
  }
}
</script>
