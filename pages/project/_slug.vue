<template>
  <Project :slug="$route.params.slug" />
</template>

<script>
import Project from '../../components/Project.vue'
export default {
  components: {
    Project
  }
}
</script>
