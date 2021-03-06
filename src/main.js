// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import BootstrapVue from "bootstrap-vue"

import jQuery from "jquery";
window._jQuery = jQuery;

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas);
library.add(far);
library.add(fab);

import App from "@/App"
import router from '@/router'
import Meta from 'vue-meta'
import { LoadStorage } from "@/storage"

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(Meta);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  data() {
    return {
      icons: [],
    }
  },
  template: '<App/>'
});

router.afterEach((to, from) => {
  var ga = window.ga || (function () { /*console.log('ga');*/ });

  ga('set', 'page', to.path);
  ga('send', 'pageview');
});