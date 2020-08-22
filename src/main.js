import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';

import {
  Observable,
  Subscription,
  Subject
} from "rxjs"
import VueRx from "vue-rx"
Vue.use(VueRx, {
  Observable,
  Subscription,
  Subject
})

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
