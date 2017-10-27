<template>
  <project :slug="$route.params.slug"/>
</template>

<script>
import Project from '../../components/Project.vue'
export default {
  components: {
    project: Project
  }
}
</script>
