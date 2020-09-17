<template>
  <div id="app">
    <div id="nav">
      <Header />
    </div>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar justify-content-start">
          <SideBar />
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";
import SideBar from "@/components/SideBar.vue";

export default Vue.extend({
  components: {
    Header,
    SideBar
  }
});
</script>
<style lang="scss">
@import "assets/dashboard.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: white;
//     }
//   }
// }
</style>
