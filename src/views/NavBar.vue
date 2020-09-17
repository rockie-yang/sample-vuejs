<template>
  <div>
    <ul class="nav nav-list">
      <li>A</li>
      <li class="nav">
        <router-link to="/jupyterhub">JupyterHub</router-link>
      </li>
      <li>
        <router-link to="/livy" class="nav-item">
          <span class="nav-text">Livy</span>
        </router-link>
      </li>
    </ul>
    <!-- <b-sidebar id="sidebar-1" width="180px" visible="true">
      <b-navbar-nav>
        <b-nav-item href="#" align="left">
          <router-link to="/jupyterhub" class="nav-item">
            <span class="nav-text">JupyterHub</span>
          </router-link>
        </b-nav-item>
        <b-nav-item href="#" align="left">
          <div>
            <router-link to="/livy" class="nav-item">
              <span class="nav-text">Livy</span>
            </router-link>
          </div>
        </b-nav-item>
      </b-navbar-nav>
    </b-sidebar>-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      logoWidth: "30px",
      logoHeight: "20px",
      hide: true,
    };
  },
  components: {},
});
</script>

<style scoped>
</style>