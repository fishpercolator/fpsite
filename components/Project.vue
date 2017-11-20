<template>
  <div id="portfolio">
    <div>
      <h1 class="flush">Portfolio</h1>
      <div id="projects">
        <ul id="projectlist">
          <li v-for="project in projects" :class="{current: currentSlug === project.slug}"><a @click.prevent="changeProject(project.slug)" :href="`/project/${project.slug}`">{{project.name}}</a></li>
        </ul>
        <div id="project" v-if="current">
          <img id="projectheader" v-lazy="currentImage" src="$Lazyload.options.loading" :alt="current.name"/>
          <h2>{{current.name}}</h2>
          <div class="content" v-html="current.content"></div>
          <div id="nextprev">
            <a v-if="prev" @click.prevent="changeProject(prev.slug)" :href="`/project/${prev.slug}`">&laquo; {{prev.name}}</a>
            <a v-else></a>
            <a v-if="next" @click.prevent="changeProject(next.slug)" :href="`/project/${next.slug}`">{{next.name}} &raquo;</a>
          </div>     
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
    current () {
      if (this.currentSlug) {
        var idx = projects.findIndex((p) => this.currentSlug === p.slug)
        projects[idx].index = idx
        return projects[idx]
      }
    },
    next () { return projects[this.current.index + 1] },
    prev () { return projects[this.current.index - 1] },
    currentImage () { return `/projects/${this.currentSlug}.jpg` }
  },
  methods: {
    changeProject (slug) {
      this.currentSlug = slug
      history.replaceState({}, null, `/project/${slug}`)
    }
  },
  created () { if (!this.currentSlug) this.changeProject(projects[0].slug) }
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
    ul#projectlist {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      flex-grow: 1;
      justify-content: flex-start;
      li {
        list-style-type: none;
        padding: 0;
        text-align: right;
        display: flex;
        align-items: center;
        &:not(:first-child) {
          border-top: 1px solid $title;
        }
        a {
          color: $black;
          display: block;
          padding: 1em 0.5em;
          flex: 1;
        }
        &.current {
          font-weight: bold;
          a::before {
            content: '• ';
          }
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
        width: 100%;
        height: 271px;
      }
      #nextprev {
        display: flex;
        padding: 1em;
        justify-content: space-between;
      }
    }
  }
}
</style>
