<template>
  <div id="portfolio">
    <div>
      <h2>Portfolio</h2>
      <div id="projects">
        <ul id="projectlist">
          <li v-for="project in projects"><a @click.prevent="changeProject(project.slug)" :href="`/project/${project.slug}`">{{project.name}}</a></li>
        </ul>
        <div id="project" v-if="current">
          <img id="projectheader" v-lazy="currentImage" src="$Lazyload.options.loading" :alt="current.name"/>
          <h2>{{current.name}}</h2>
        </div>
        <div id="project" v-else>
          Hello
        </div>
      </div>
    </div>
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
    current () { if (this.currentSlug) return projects.find((p) => this.currentSlug === p.slug) },
    currentImage () { return `/projects/${this.currentSlug}.jpg` }
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
  > div  {
    @extend %box;
  }
  #projects {
    display: flex;
    //flex-wrap: wrap;
    ul#projectlist {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      flex-grow: 1;
      li {
        flex-grow: 1;
        list-style-type: none;
        padding: 0;
        text-align: right;
        a {
          color: $black;
          display: block;
          padding: 0.5em;
        }
      }
    }
    #project {
      flex-basis: 80%;
      border-left: 1px solid $title;
      h2 {
        margin-top: 0;
        padding: 0.5em;
      }
      img#projectheader {
        max-width: 100%;
      }
    }
  }
}
</style>
