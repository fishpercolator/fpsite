<template>
  <div id="portfolio">
    <div class="panel">
      <h1 class="flush">
        Portfolio
      </h1>
      <div id="projects" :class="{menuopen: menuOpen}">
        <ul id="projectlist" v-touch:swipe.left="swipePanel">
          <li v-for="project in projects" :key="project.slug" :class="{current: currentSlug === project.slug}">
            <a :href="`/project/${project.slug}`" @click.prevent="changeProject(project.slug)">
              {{ project.name }}
            </a>
          </li>
        </ul>
        <div v-if="current" id="project">
          <button id="opener" v-touch:swipe="swipePanel" :aria-label="menuOpen ? 'close menu':'open menu'" @click="menuOpen = !menuOpen">
            <span v-if="menuOpen">
              ◀
            </span><span v-else>
              ▶
            </span>
          </button>
          <img id="projectheader" :key="currentImage" v-lazy="currentImage" :src="$Lazyload.options.loading" :alt="current.name" width="768" height="271">
          <h2>{{ current.name }}</h2>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="content" v-html="current.content" />
          <div class="nextprev">
            <a v-if="prev" :href="`/project/${prev.slug}`" @click.prevent="changeProject(prev.slug)">
              &laquo; {{ prev.name }}
            </a>
            <a v-else />
            <a v-if="next" :href="`/project/${next.slug}`" @click.prevent="changeProject(next.slug)">
              {{ next.name }} &raquo;
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="cta">
      <RouterLink to="/contact">
        Contact us
      </RouterLink>
    </div>
  </div>
</template>

<script>
import projects from '../assets/projects.json'
export default {
  props: {
    slug: {
      type: String,
      required: false,
      default: null
    }
  },
  data () { return { projects: projects, currentSlug: this.slug, menuOpen: false } },
  head () {
    if (this.current) {
      return {
        title: this.current.name,
        meta: [
          { name: 'og:title', property: 'og:title', content: `${this.current.name} | Fish Percolator` },
          { name: 'twitter:title', content: `${this.current.name} | Fish Percolator` },
          { name: 'description', content: this.current.desc },
          { name: 'og:description', property: 'og:description', content: this.current.desc },
          { name: 'twitter:description', content: this.current.desc }
        ]
      }
    } else {
      return {
        title: 'Portfolio'
      }
    }
  },
  computed: {
    current () {
      if (this.currentSlug) {
        var idx = projects.findIndex((p) => this.currentSlug === p.slug)
        if (projects[idx]) {
          projects[idx].index = idx
          return projects[idx]
        }
      }
      return null
    },
    next () { return projects[this.current.index + 1] },
    prev () { return projects[this.current.index - 1] },
    currentImage () { return `/projects/${this.currentSlug}.jpg` }
  },
  mounted () {
    if (this.currentSlug === 'lif-backend-integration-for-mighty') this.changeProject('wordpress-plugins')
    else if (!this.current) this.changeProject(projects[0].slug)
  },
  methods: {
    changeProject (slug) {
      this.currentSlug = slug
      window.history.replaceState({}, null, `/project/${slug}`)
      let header = document.getElementById('projectheader')
      if (header) header.scrollIntoView({
        behavior: 'smooth'
      })
    },
    swipePanel (direction) {
      switch (direction) {
        case 'left':
          this.menuOpen = false
          break
        case 'right':
          this.menuOpen = true
          break
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/mixins";
#portfolio {
  @extend %page;
  > div.panel  {
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
        margin: 0;
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
        @media (max-width: $mobile) {
          padding-top: 1em;
        }
      }
      img#projectheader {
        width: 100%;
        height: 271px;
        object-fit: cover;
        @media (max-width: $mobile) {
          height: 150px;
        }
      }

      blockquote {
        padding: 0.5em 0;
        background-color: transparentize($title, 0.9);
        border-radius: 5px;
        font-size: 0.9em;
      }

      img.logo {
        float: right;
        width: 15em;
        max-width: 35vw;
        margin: 0 1em 1em 1em;
      }

      .nextprev {
        display: flex;
        padding: 1em;
        justify-content: space-between;
      }
      button#opener {
        display: none;
        @keyframes little-bounce {
          0% { width: 2.5rem; }
          50% { width: 2.8rem; }
          100% { width: 2.5rem; }
        }
        @media (max-width: $mobile) {
          display: block;
          position: absolute;
          top: 18.5rem;
          font-size: 1.5em;
          height: 5rem;
          width: 2.5rem;
          line-height: 5rem;
          text-align: right;
          background-color: transparentize($title, 0.3);
          color: $white;
          border: 1px solid $title;
          border-radius: 0 5px 5px 0;
          animation-name: little-bounce;
          animation-duration: 0.5s;
          animation-delay: 0.5s;
          animation-iteration-count: 2;
          animation-timing-function: ease-out;
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
