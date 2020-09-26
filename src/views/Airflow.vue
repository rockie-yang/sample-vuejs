<template>
  <div>
    <b-embed
      type="iframe"
      id="airflow"
      class="full-window"
      :src="hostDNS + '/airflow'"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["hostDNS"]
});
</script>

<style scoped>
.full-window {
  height: 100%;
}
</style>