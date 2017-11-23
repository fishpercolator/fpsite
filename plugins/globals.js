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
  loading: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNjYwMDgwIiBvcGFjaXR5PSIwLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Y2lyY2xlIGN4PSIzMyIgY3k9IjUwLjAwMSIgcj0iNi40MTciLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwLjAwMSIgcj0iNi40MTciLz48Y2lyY2xlIGN4PSIzMyIgY3k9IjUwLjAwMSIgcj0iNi40MTciLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwLjAwMSIgcj0iNi40MTciLz48Y2lyY2xlIGN4PSI2NyIgY3k9IjUwLjAwMSIgcj0iNi40MTYiLz48L2c+PC9zdmc+Cg=='
})
