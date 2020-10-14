import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import 'codemirror';
import Chart from 'chart.js'
import VueChartkick from 'vue-chartkick';

Vue.use(VueChartkick, { adapter: Chart });

// Vue.use(Chartkick.use(Chart))

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

