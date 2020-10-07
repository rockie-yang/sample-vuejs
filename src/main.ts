import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import 'codemirror';
// import 'vue-codemirror';
// import 'codemirror/lib/codemirror.css'
// Vue.use(VueCodemirror);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

