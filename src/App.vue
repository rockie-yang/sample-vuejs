<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import NavBar from "./views/NavBar.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default Vue.extend({
  data() {
    return {
      logoWidth: 30
    };
  },
  components: {
    NavBar
  }
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.active {
  background-color: #ccc;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
