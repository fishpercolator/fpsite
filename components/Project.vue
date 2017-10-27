<template>
  <div id="portfolio">
    <h1>Portfolio</h1>
    <ul>
      <li v-for="project in projects"><router-link :to="`/project/${project.slug}`">{{project.name}}</router-link></li>
    </ul>
    <h2 v-if="current">{{current.name}}</h2>
  </div>
</template>

<script>
import projects from '../assets/projects.json'
export default {
  props: {
    slug: {
      type: String,
      required: false
    }
  },
  data () { return {projects: projects} },
  computed: {
    current () { if (this.slug) return projects.find((p) => this.$route.params.slug === p.slug) }
  }
}
</script>

<style lang="scss">
@import "../assets/mixins";
#portfolio {
  @extend %page;
}
</style>
