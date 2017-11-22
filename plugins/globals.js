import Vue from 'vue'
import Menu from '../components/Menu.vue'
import Logo from '../components/Logo.vue'
import ContactBanner from '../components/ContactBanner.vue'
import VueLazyload from 'vue-lazyload'

Vue.component('nav-menu', Menu)
Vue.component('logo', Logo)
Vue.component('contact-banner', ContactBanner)
Vue.use(VueLazyload, {
  lazyComponent: true,
  loading: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNjYwMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGNpcmNsZSBjeD0iMzMiIGN5PSI1MC4wMDEiIHI9IjYuNDE3Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwLjAwMSIgcj0iNi40MTciPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjMzIiBjeT0iNTAuMDAxIiByPSI2LjQxNyI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MC4wMDEiIHI9IjYuNDE3Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSI2NyIgY3k9IjUwLjAwMSIgcj0iNi40MTYiPjwvY2lyY2xlPjwvZz48L3N2Zz4='
})
