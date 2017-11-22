<template>
  <div id="portfolio">
    <div>
      <h1 class="flush">Portfolio</h1>
      <div id="projects" :class="{menuopen: menuOpen}">
        <ul id="projectlist">
          <li v-for="project in projects" :class="{current: currentSlug === project.slug}"><a @click.prevent="changeProject(project.slug)" :href="`/project/${project.slug}`">{{project.name}}</a></li>
        </ul>
        <div id="project" v-if="current">
          <button id="opener" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? 'close menu':'open menu'"><span v-if="menuOpen">◀</span><span v-else>▶</span></button>
          <img id="projectheader" v-lazy="currentImage" src="$Lazyload.options.loading" :alt="current.name"/>
          <h2>{{current.name}}</h2>
          <div class="content" v-html="current.content"></div>
          <div class="nextprev">
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
  data () { return {projects: projects, currentSlug: this.slug, menuOpen: false} },
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
      window.history.replaceState({}, null, `/project/${slug}`)
    }
  },
  mounted () { if (!this.currentSlug) this.changeProject(projects[0].slug) }
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
      @media (max-width: $mobile) {
        width: 0;
        min-width: 0;
        overflow: hidden;
        transition: min-width 0.1s ease-in-out;
      }
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
        white-space: nowrap;
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
      @media (max-width: $mobile) {
        flex-basis: 100%;
      }
      border-left: 1px solid $title;
      h2 {
        margin-top: 0;
        padding: 0.5em 0.5em 0 0.5em;
      }
      img#projectheader {
        width: 100%;
        height: 271px;
        object-fit: cover;
      }
      .nextprev {
        display: flex;
        padding: 1em;
        justify-content: space-between;
      }
      button#opener {
        display: none;
        @media (max-width: $mobile) {
          display: block;
          position: absolute;
          top: 50vh;
          height: 3em;
          line-height: 2em;
          background-color: $title;
          color: $white;
          border: 1px solid $white;
          border-left: none;
          border-radius: 0 5px 5px 0;
          &:focus {
            outline: none;
          }
        }
      }
    }
    @media (max-width: $mobile) {
      &.menuopen {
        #projectlist {
          width: auto;
          min-width: 45vw;
        }
        #project {
          flex-basis: none;
        }
      }
    }
  }
}
</style>
