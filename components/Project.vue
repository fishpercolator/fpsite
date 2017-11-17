<template>
  <div id="portfolio">
    <h1>Portfolio</h1>
    <ul>
      <li v-for="project in projects"><a @click.prevent="changeProject(project.slug)" :href="`/project/${project.slug}`">{{project.name}}</a></li>
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
  data () { return {projects: projects, currentSlug: this.slug} },
  computed: {
    current () { if (this.currentSlug) return projects.find((p) => this.currentSlug === p.slug) }
  },
  methods: {
    changeProject (slug) {
      this.currentSlug = slug
      history.replaceState({}, null, `/project/${slug}`)
    }
  }
}
</script>

<style lang="scss">
@import "../assets/mixins";
#portfolio {
  @extend %page;
}
</style>
