<template>
  <div>
    <b-embed
      type="iframe"
      id="grafana"
      class="full-window"
      :src="hostDNS + '/grafana'"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({ props: ["hostDNS"] });
</script>

<style scoped>
.full-window {
  height: 100%;
}
</style>